import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PessoaLista } from './pessoa/pessoa-lista/pessoa-lista';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PessoaLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda-unijorge');
}
