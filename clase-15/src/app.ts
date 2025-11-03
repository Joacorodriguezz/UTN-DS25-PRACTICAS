import express from 'express';
import librosRoutes from './routes/libros.routes';
import { logger } from './middlewares/logger.middleware';

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(logger);

// Rutas
app.use('/api/libros', librosRoutes);

// Endpoint base
app.get('/', (req, res) => {
  res.send('📚 Bienvenido a la API de Libros (Clase 15 – UTN DS25)');
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
