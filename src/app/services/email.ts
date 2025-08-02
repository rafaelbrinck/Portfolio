import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { EmailEnv } from '../../env/enviroments';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public sendEmail(infos: HTMLFormElement): Promise<EmailJSResponseStatus> {
    const env = new EmailEnv();
    return emailjs.sendForm(env.serviceID, env.templateID, infos, env.key);
  }
}
