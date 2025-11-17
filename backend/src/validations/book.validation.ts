import { z } from 'zod';

export const createBookSchema = z.object({
  titulo: z.string().trim().min(1, 'El título es requerido').max(200),
  autor: z.string().trim().min(1, 'El autor es requerido').max(120),
  categoria: z.enum(['DEPORTE', 'FICCION', 'HISTORIA', 'INFANTIL'], {
    errorMap: () => ({ message: 'Categoría debe ser: DEPORTE, FICCION, HISTORIA o INFANTIL' })
  }),
  descripcion: z.string().trim().max(2000).optional(),
  portada: z.string().trim().max(400).optional(),
  authorId: z.number().int().positive().optional().nullable(),
});

export const updateBookSchema = createBookSchema.partial();

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const listQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  size: z.coerce.number().int().positive().max(100).optional(),
  orderBy: z.enum(['titulo', 'autor', 'createdAt']).optional(),
  dir: z.enum(['asc', 'desc']).optional(),
  q: z.string().trim().optional(),
});
