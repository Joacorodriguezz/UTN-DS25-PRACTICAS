import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import cors, { CorsOptions } from 'cors'
import path from 'path'

import authRoutes from './routes/auth.routes'
import { booksRouter } from './routes/books.routes'
import { userRoutes } from './routes/user.routes'
import { legacySectionsRouter } from './routes/legacy.sections.routes'
import authorRoutes from './routes/author.routes'

const app = express()

const ALLOWED_ORIGINS = (process.env.FRONTEND_URLS || process.env.FRONTEND_URL || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)

// En desarrollo, permitir localhost si no hay URLs configuradas
const isDevelopment = process.env.NODE_ENV !== 'production';
const defaultOrigins = isDevelopment 
  ? ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173']
  : [];

const corsOptions: cors.CorsOptions = {
  origin(origin, callback) {
    // Permitir requests sin origen (como Postman, mobile apps, etc.)
    if (!origin) return callback(null, true);
    
    // Si hay URLs configuradas, solo permitir esas
    if (ALLOWED_ORIGINS.length > 0) {
      if (ALLOWED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    }
    
    // En desarrollo sin configuración, permitir localhost
    if (isDevelopment && defaultOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Si estamos en producción sin configuración, rechazar
    if (!isDevelopment) {
      return callback(new Error('CORS not configured for production'));
    }
    
    return callback(null, true);
  },
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Cache-Control',
    'Pragma'
  ],
};
app.use(cors(corsOptions));

app.use(express.json())

const IMGS_DIR = process.env.IMGS_DIR || path.join(process.cwd(), 'imagenes')
app.use(
  '/imagenes',
  express.static(IMGS_DIR, {
    fallthrough: false,
    immutable: true,
    maxAge: '1d',
  })
)

app.use('/api/auth', authRoutes)

app.use('/api', legacySectionsRouter)
app.use('/api', booksRouter)
app.use('/api/users', userRoutes)
app.use('/api/authors', authorRoutes)

app.get('/health', (_req: Request, res: Response) => res.json({ ok: true }))

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' })
})

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = typeof err?.statusCode === 'number' ? err.statusCode : 500
  res.status(status).json({ error: err?.message ?? 'Internal Server Error' })
})

export default app
