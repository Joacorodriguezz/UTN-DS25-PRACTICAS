export type CreateBookRequest = {
  titulo: string;
  autor: string;
  descripcion?: string;
  portada?: string;
};

export type UpdateBookRequest = Partial<CreateBookRequest>;

export type Seccion = 'ficcion' | 'deporte' | 'historia' | 'infantil';

export type BookDTO = {
  id: number;               
  titulo: string;
  autor: string;
  descripcion?: string | null;
  seccion: Seccion;
  portada?: string;         
};
