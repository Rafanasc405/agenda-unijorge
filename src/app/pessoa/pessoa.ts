export interface Pessoa {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  curso: string;
  vinculo: 'aluno' | 'professor' | 'coordenador';
  ativo: boolean;
}

export const PESSOAS: Pessoa[] = [
  {
    id: 1,
    nome: 'Ana Beatriz Souza',
    email: 'ana.souza@unijorge.edu.br',
    telefone: '(71) 99123-4567',
    curso: 'Engenharia de Computação',
    vinculo: 'aluno',
    ativo: true
  },
  {
    id: 2,
    nome: 'Carlos Eduardo Lima',
    email: 'carlos.lima@unijorge.edu.br',
    curso: 'Sistemas de Informação',
    vinculo: 'aluno',
    ativo: true
  },
  {
    id: 3,
    nome: 'Fernanda Ramos',
    email: 'fernanda.ramos@unijorge.edu.br',
    telefone: '71991234567',
    curso: 'Ciência da Computação',
    vinculo: 'professor',
    ativo: true
  },
  {
    id: 4,
    nome: 'João Pedro Alves',
    email: 'joao.alves@unijorge.edu.br',
    telefone: '(71) 3123-4567',
    curso: 'Engenharia de Computação',
    vinculo: 'aluno',
    ativo: false
  },
  // Quinto registro propositalmente errado (item 2 da tarefa):
  // nome com número, e-mail sem '@', telefone curto e curso fora da lista.
  {
    id: 5,
    nome: 'Rita2 Nascimento',
    email: 'rita-nascimento-exemplo.com',
    telefone: '123',
    curso: 'Medicina',
    vinculo: 'aluno',
    ativo: true
  }
];
