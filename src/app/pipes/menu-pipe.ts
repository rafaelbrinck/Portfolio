import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menu',
})
export class MenuPipe implements PipeTransform {
  transform(itens: any[], text: string): any[] {
    if (!text || text.trim() === '') return itens;
    text = text.toLowerCase();
    return itens.filter((item) => item.nome.toLowerCase().includes(text));
  }
}
