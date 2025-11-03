import { Libro } from '../types/libro.type';

let libros: Libro[] = [
  { id: 1, titulo: '1984', autor: 'George Orwell', precio: 8500, disponible: true },
  { id: 2, titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', precio: 9200, disponible: true },
];

export const obtenerLibros = (): Libro[] => {
  return libros;
};

export const obtenerLibroPorId = (id: number): Libro | undefined => {
  return libros.find(libro => libro.id === id);
};

export const agregarLibro = (nuevo: Libro): Libro => {
  const id = libros.length > 0 ? libros[libros.length - 1].id! + 1 : 1;
  const libro = { ...nuevo, id, disponible: true };
  libros.push(libro);
  return libro;
};

export const eliminarLibro = (id: number): boolean => {
  const index = libros.findIndex(libro => libro.id === id);
  if (index === -1) return false;
  libros.splice(index, 1);
  return true;
};

export const actualizarLibro = (id: number, datos: Partial<Libro>): Libro | undefined => {
  const libro = obtenerLibroPorId(id);
  if (!libro) return undefined;
  Object.assign(libro, datos);
  return libro;
};
