import express from 'express';
import authRoutes from './routes/auth.routes';
import libroRoutes from './routes/libros.routes';
import usuarioRoutes from './routes/usuario.routes';
import { authenticateAndAuthorize } from './middlewares/auth.middleware'; // Import combined middleware

const app = express();

app.use(express.json());

// Authentication routes are not protected
app.use('/api/auth', authRoutes);

// Protect libros routes (for example, with "USER" role allowed to get and create, and "ADMIN" allowed to delete)
app.use('/api/books', authenticateAndAuthorize(['USER', 'ADMIN']), libroRoutes);

// Protect users routes (only "ADMIN" role allowed to manage users)
app.use('/api/users', authenticateAndAuthorize(['ADMIN']), usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
