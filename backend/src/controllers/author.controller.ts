import { Request, Response } from 'express';
import { findOrCreateAuthor, findAuthorByName, getAllAuthors } from '../services/author.service';

export async function findOrCreateAuthorHandler(req: Request, res: Response) {
  try {
    const { nombre } = req.body;
    if (!nombre || typeof nombre !== 'string') {
      return res.status(400).json({ error: 'El nombre del autor es requerido' });
    }
    const author = await findOrCreateAuthor(nombre);
    return res.json({ data: author });
  } catch (error: any) {
    return res.status(400).json({ error: error.message || 'Error al crear/buscar autor' });
  }
}

export async function findAuthorByNameHandler(req: Request, res: Response) {
  try {
    const { nombre } = req.query;
    if (!nombre || typeof nombre !== 'string') {
      return res.status(400).json({ error: 'El nombre del autor es requerido' });
    }
    const author = await findAuthorByName(nombre);
    if (!author) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    return res.json({ data: author });
  } catch (error: any) {
    return res.status(400).json({ error: error.message || 'Error al buscar autor' });
  }
}

export async function getAllAuthorsHandler(req: Request, res: Response) {
  try {
    const authors = await getAllAuthors();
    return res.json({ data: authors });
  } catch (error: any) {
    return res.status(400).json({ error: error.message || 'Error al obtener autores' });
  }
}

