import React from 'react';
import BookCard from '../components/BookCard';
import '../styles/section.css';

const Mystery = () => {
  const books = [
    { title: 'El Código Da Vinci', author: 'Dan Brown', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Historia, arte y secretos.', price: 19.99 },
    { title: 'Asesinato en el Orient Express', author: 'Agatha Christie', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Poirot en su mejor caso.', price: 16.75 },
    { title: 'Los Crímenes de la Calle Morgue', author: 'Edgar Allan Poe', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'El origen del detective moderno.', price: 14.50 },
    { title: 'El Silencio de los Corderos', author: 'Thomas Harris', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Thriller psicológico icónico.', price: 18.99 },
    { title: 'La Chica del Tren', author: 'Paula Hawkins', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Memoria y percepción en juego.', price: 17.25 },
    { title: 'El Gran Gatsby', author: 'F. Scott Fitzgerald', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Misterio y drama social.', price: 15.99 }
  ];

  return (
    <div className="section-page">
      <div className="container">
        <div className="section-header">
          <h1>Misterio</h1>
          <p>Desentraña enigmas y resuelve casos intrigantes.</p>
        </div>
        <div className="books-grid">
          {books.map((book, i) => <BookCard key={i} book={book} />)}
        </div>
      </div>
    </div>
  );
};

export default Mystery;

