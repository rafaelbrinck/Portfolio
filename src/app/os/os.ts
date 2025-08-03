import { Component } from '@angular/core';
import { AreaTrabalho } from '../components/body/area-trabalho/area-trabalho';
import { BarraTarefas } from '../components/footer/barra-tarefas/barra-tarefas';

@Component({
  selector: 'app-os',
  imports: [AreaTrabalho, BarraTarefas],
  templateUrl: './os.html',
  styleUrl: './os.css',
})
export class OS {}
