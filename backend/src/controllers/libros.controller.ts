import { Request, Response } from 'express';
import {
  obtenerLibros,
  obtenerLibroPorId,
  agregarLibro,
  eliminarLibro,
  actualizarLibro
} from '../services/libros.service';

export const getLibros = async (req: Request, res: Response) => {
  const libros = await obtenerLibros();
  res.json(libros);
};

export const getLibroById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const libro = await obtenerLibroPorId(id);
  if (!libro) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
  res.json(libro);
};

export const postLibro = async (req: Request, res: Response) => {
  const nuevo = await agregarLibro(req.body);
  res.status(201).json(nuevo);
};

export const deleteLibro = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await eliminarLibro(id);
    res.json({ mensaje: 'Libro eliminado correctamente' });
  } catch (error) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
};

export const putLibro = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const actualizado = await actualizarLibro(id, req.body);
    res.json(actualizado);
  } catch (error) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
};
