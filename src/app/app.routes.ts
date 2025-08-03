import { Routes } from '@angular/router';
import { OS } from './os/os';
import { TelaUser } from './tela-user/tela-user';
import { AuthGuard } from './guard/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: TelaUser },
  { path: 'home', component: OS, canActivate: [AuthGuard] },
];
