import { Pessoa } from './pessoa';

const CURSOS_VALIDOS = [
  'Engenharia de Computação',
  'Sistemas de Informação',
  'Ciência da Computação'
];

export function validarNome(nome: string): string | null {
  const limpo = nome.trim();

  if (limpo.length < 3) {
    return 'O nome deve ter ao menos 3 caracteres.';
  }
  if (/\d/.test(limpo)) {
    return 'O nome não pode conter números.';
  }
  return null;
}

export function validarEmail(email: string): string | null {
  const limpo = email.trim();

  if (limpo.length === 0) {
    return 'O e-mail é obrigatório.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(limpo)) {
    return 'O e-mail informado não é válido.';
  }
  return null;
}

export function validarTelefone(telefone?: string): string | null {
  // Ausente é válido: telefone é opcional.
  if (telefone === undefined) {
    return null;
  }

  const digitos = telefone.replace(/\D/g, '');

  if (digitos.length !== 10 && digitos.length !== 11) {
    return 'O telefone deve ter 10 ou 11 dígitos, incluindo o DDD.';
  }
  return null;
}

export function validarCurso(curso: string): string | null {
  if (!CURSOS_VALIDOS.includes(curso)) {
    return `O curso "${curso}" não está na lista de cursos aceitos.`;
  }
  return null;
}

export function validarPessoa(pessoa: Pessoa): string[] {
  return [
    validarNome(pessoa.nome),
    validarEmail(pessoa.email),
    validarTelefone(pessoa.telefone),
    validarCurso(pessoa.curso)
  ].filter((erro): erro is string => erro !== null);
}

export function validarIdsUnicos(pessoas: Pessoa[]): string[] {
  const ocorrencias = new Map<number, number>();

  for (const pessoa of pessoas) {
    ocorrencias.set(pessoa.id, (ocorrencias.get(pessoa.id) ?? 0) + 1);
  }

  const erros: string[] = [];
  for (const [id, quantidade] of ocorrencias) {
    if (quantidade > 1) {
      erros.push(`O id ${id} aparece ${quantidade} vezes na lista.`);
    }
  }
  return erros;
}
