import prisma from '../config/prisma';

export async function findOrCreateAuthor(nombre: string) {
  const trimmedNombre = nombre.trim();
  if (!trimmedNombre) {
    throw new Error('El nombre del autor es requerido');
  }

  // Buscar o crear el autor usando upsert
  const author = await prisma.author.upsert({
    where: { nombre: trimmedNombre },
    update: {}, // Si existe, no actualizar nada
    create: { nombre: trimmedNombre },
  });

  return author;
}

export async function findAuthorByName(nombre: string) {
  const trimmedNombre = nombre.trim();
  return await prisma.author.findUnique({
    where: { nombre: trimmedNombre },
  });
}

export async function getAllAuthors() {
  return await prisma.author.findMany({
    orderBy: { nombre: 'asc' },
  });
}

