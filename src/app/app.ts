import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraTarefas } from './components/footer/barra-tarefas/barra-tarefas';
import { AreaTrabalho } from './components/body/area-trabalho/area-trabalho';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraTarefas, AreaTrabalho],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-project');
}
