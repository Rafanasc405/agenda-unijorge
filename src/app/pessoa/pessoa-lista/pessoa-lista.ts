import { Component } from '@angular/core';
import { PESSOAS, Pessoa } from '../pessoa';
import { validarIdsUnicos, validarPessoa } from '../pessoa.validacao';

interface ResultadoPessoa {
  pessoa: Pessoa;
  erros: string[];
}

@Component({
  selector: 'app-pessoa-lista',
  imports: [],
  templateUrl: './pessoa-lista.html',
  styleUrl: './pessoa-lista.css'
})
export class PessoaLista {
  protected readonly pessoas: Pessoa[] = PESSOAS;

  // Calculado uma vez só, na classe.
  protected readonly resultados: ResultadoPessoa[] = this.pessoas.map(pessoa => ({
    pessoa,
    erros: validarPessoa(pessoa)
  }));

  // Desafio: aviso de ids duplicados no topo da tela.
  protected readonly errosIdsDuplicados: string[] = validarIdsUnicos(this.pessoas);
}
