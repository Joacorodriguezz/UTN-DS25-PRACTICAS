import { Router } from 'express';
import {
  getBooksHandler,
  getBookHandler,
  createBookHandler,
  updateBookHandler,
  deleteBookHandler,
} from '../controllers/books.controller';

import {
  listQuerySchema,  
  idParamSchema,
  createBookSchema,
  updateBookSchema,
} from '../validations/book.validation';

import { validate } from '../middlewares/validation.middleware';

import { authenticate } from '../middlewares/authenticate.middleware';
import { authorize } from '../middlewares/authorize.middleware';

export const booksRouter = Router();

booksRouter.get(
  '/libros',
  validate(listQuerySchema),     
  getBooksHandler
);

booksRouter.get(
  '/libros/:id',
  validate(idParamSchema),
  getBookHandler
);

booksRouter.post('/libros', validate(createBookSchema), createBookHandler);

booksRouter.put(
  '/libros/:id',
  authenticate,
  authorize('ADMIN'),
  validate(idParamSchema),
  validate(updateBookSchema),
  updateBookHandler
);

booksRouter.patch(
  '/libros/:id',
  authenticate,
  authorize('ADMIN'),
  validate(idParamSchema),
  validate(updateBookSchema),
  updateBookHandler
);

booksRouter.delete(
  '/libros/:id',
  authenticate,
  authorize('ADMIN'),
  validate(idParamSchema),
  deleteBookHandler
);
