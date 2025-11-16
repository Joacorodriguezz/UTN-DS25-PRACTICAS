export type Seccion = 'ficcion' | 'deporte' | 'historia' | 'infantil';
export type Categoria = 'FICCION' | 'DEPORTE' | 'HISTORIA' | 'INFANTIL';

export function fromCategoria(c: Categoria): Seccion {
  switch (c) {
    case 'FICCION':  return 'ficcion';
    case 'DEPORTE':  return 'deporte';
    case 'HISTORIA': return 'historia';
    case 'INFANTIL': return 'infantil';
    default:         return 'ficcion';
  }
}

export function toCategoria(s: Seccion): Categoria {
  switch (s) {
    case 'ficcion':  return 'FICCION';
    case 'deporte':  return 'DEPORTE';
    case 'historia': return 'HISTORIA';
    case 'infantil': return 'INFANTIL';
    default:         return 'FICCION';
  }
}
