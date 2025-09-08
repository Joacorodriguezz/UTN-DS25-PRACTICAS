import React from 'react';
import BookCard from '../components/BookCard';
import '../styles/section.css';

const ScienceFiction = () => {
  const books = [
    { title: 'Dune', author: 'Frank Herbert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Obra maestra en Arrakis.', price: 22.50 },
    { title: 'Fundación', author: 'Isaac Asimov', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Visión del futuro de la humanidad.', price: 20.99 },
    { title: 'El Juego de Ender', author: 'Orson Scott Card', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Guerra y estrategia en el espacio.', price: 19.75 },
    { title: 'Neuromante', author: 'William Gibson', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'El cyberpunk nace aquí.', price: 18.50 },
    { title: 'La Guía del Autoestopista Galáctico', author: 'Douglas Adams', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Humor espacial inolvidable.', price: 17.99 },
    { title: 'Solaris', author: 'Stanisław Lem', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Conciencia alienígena y humanidad.', price: 21.25 }
  ];

  return (
    <div className="section-page">
      <div className="container">
        <div className="section-header">
          <h1>Ciencia Ficción</h1>
          <p>Explora el futuro y las posibilidades del universo.</p>
        </div>
        <div className="books-grid">
          {books.map((book, i) => <BookCard key={i} book={book} />)}
        </div>
      </div>
    </div>
  );
};

export default ScienceFiction;

