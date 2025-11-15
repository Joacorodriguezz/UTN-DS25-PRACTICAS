import { Router } from 'express';
import { LibroService } from '../services/libros.service';
import { authenticateAndAuthorize } from '../middlewares/auth.middleware';

const router = Router();
const libroService = new LibroService();

// Route to get all books (accessible by USER and ADMIN)
router.get('/books', authenticateAndAuthorize(['USER', 'ADMIN']), async (req, res) => {
  try {
    const books = await libroService.getBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new book (accessible by USER and ADMIN)
router.post('/books', authenticateAndAuthorize(['USER', 'ADMIN']), async (req, res) => {
  try {
    const bookData = req.body;
    const newBook = await libroService.createBook(bookData);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a book (only accessible by ADMIN)
router.delete('/books/:id', authenticateAndAuthorize(['ADMIN']), async (req, res) => {
  const { id } = req.params;
  try {
    await libroService.deleteBook({ id: Number(id) });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
