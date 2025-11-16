import type { BookDTO } from '../types/book.types';
import { fromCategoria } from './sections';

type CategoriaEnum = 'FICCION' | 'DEPORTE' | 'HISTORIA' | 'INFANTIL';

type BookRecord = {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string | null;
  categoria: CategoriaEnum;
};

export function mapBookToDTO(b: BookRecord): BookDTO {
  return {
    id: b.id,
    titulo: b.titulo,
    autor: b.autor,
    descripcion: b.descripcion ?? null,
    seccion: fromCategoria(b.categoria),
  };
}
