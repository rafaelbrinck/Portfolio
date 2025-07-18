import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraTarefas } from './components/footer/barra-tarefas/barra-tarefas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-project');
}
