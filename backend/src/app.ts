import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import cors, { CorsOptions } from 'cors'
import path from 'path'

import authRoutes from './routes/auth.routes'
import { booksRouter } from './routes/books.routes'
import { userRoutes } from './routes/user.routes'
import { legacySectionsRouter } from './routes/legacy.sections.routes'

const app = express()

const ALLOWED_ORIGINS = (process.env.FRONTEND_URLS || process.env.FRONTEND_URL || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)

const corsOptions: cors.CorsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
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

app.get('/health', (_req: Request, res: Response) => res.json({ ok: true }))

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' })
})

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = typeof err?.statusCode === 'number' ? err.statusCode : 500
  res.status(status).json({ error: err?.message ?? 'Internal Server Error' })
})

export default app
