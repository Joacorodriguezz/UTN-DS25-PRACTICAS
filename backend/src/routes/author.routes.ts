import { Router } from 'express';
import {
  findOrCreateAuthorHandler,
  findAuthorByNameHandler,
  getAllAuthorsHandler,
} from '../controllers/author.controller';
import { authenticate } from '../middlewares/authenticate.middleware';

const router = Router();

// Buscar o crear autor (para uso al crear libros)
router.post('/', authenticate, findOrCreateAuthorHandler);

// Buscar autor por nombre
router.get('/search', authenticate, findAuthorByNameHandler);

// Obtener todos los autores
router.get('/', authenticate, getAllAuthorsHandler);

export default router;

