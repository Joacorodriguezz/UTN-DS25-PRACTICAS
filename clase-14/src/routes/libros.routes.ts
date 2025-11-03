import { Router } from 'express';
import {
  getLibros,
  getLibroById,
  postLibro,
  deleteLibro,
  putLibro
} from '../controllers/libros.controller';

const router = Router();

// GET /api/libros
router.get('/', getLibros);

// GET /api/libros/:id
router.get('/:id', getLibroById);

// POST /api/libros
router.post('/', postLibro);

// PUT /api/libros/:id
router.put('/:id', putLibro);

// DELETE /api/libros/:id
router.delete('/:id', deleteLibro);

export default router;
