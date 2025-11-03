import { Request, Response } from 'express';
import {
  obtenerLibros,
  obtenerLibroPorId,
  agregarLibro,
  eliminarLibro,
  actualizarLibro
} from '../services/libros.service';

export const getLibros = (req: Request, res: Response) => {
  res.json(obtenerLibros());
};

export const getLibroById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const libro = obtenerLibroPorId(id);
  if (!libro) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
  res.json(libro);
};

export const postLibro = (req: Request, res: Response) => {
  const nuevo = agregarLibro(req.body);
  res.status(201).json(nuevo);
};

export const deleteLibro = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const eliminado = eliminarLibro(id);
  if (!eliminado) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
  res.json({ mensaje: 'Libro eliminado correctamente' });
};

export const putLibro = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const actualizado = actualizarLibro(id, req.body);
  if (!actualizado) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
  res.json(actualizado);
};
