import { PrismaClient, Prisma } from '@prisma/client';
import { Book, CreateBookRequest, UpdateBookRequest, DeleteBookRequest } from '../types/libro.type';

const prisma = new PrismaClient();

// Tipo para Book con author incluido
type BookWithAuthor = Prisma.BookGetPayload<{
  include: { author: true };
}>;

export class LibroService {
  // Function to get all books
  async obtenerLibros(): Promise<BookWithAuthor[]> {
    return await prisma.book.findMany({
      include: { author: true },  // Include author data for each book
    });
  }

  // Function to get a book by ID
  async obtenerLibroPorId(id: number): Promise<BookWithAuthor | null> {
    return await prisma.book.findUnique({
      where: { id },
      include: { author: true },  // Include author data
    });
  }

  // Function to create a new book
  async agregarLibro(bookData: CreateBookRequest): Promise<Prisma.BookGetPayload<{}>> {
    return await prisma.book.create({
      data: bookData,
    });
  }

  // Function to update a book
  async actualizarLibro(id: number, bookData: UpdateBookRequest): Promise<Prisma.BookGetPayload<{}>> {
    return await prisma.book.update({
      where: { id },
      data: bookData,
    });
  }

  // Function to delete a book
  async eliminarLibro(id: number): Promise<void> {
    await prisma.book.delete({
      where: { id },
    });
  }
}

// Export individual functions for convenience
const libroService = new LibroService();

export const obtenerLibros = () => libroService.obtenerLibros();
export const obtenerLibroPorId = (id: number) => libroService.obtenerLibroPorId(id);
export const agregarLibro = (bookData: CreateBookRequest) => libroService.agregarLibro(bookData);
export const actualizarLibro = (id: number, bookData: UpdateBookRequest) => libroService.actualizarLibro(id, bookData);
export const eliminarLibro = (id: number) => libroService.eliminarLibro(id);
