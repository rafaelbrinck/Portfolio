import { Routes } from '@angular/router';
import { OS } from './os/os';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: OS },
];
