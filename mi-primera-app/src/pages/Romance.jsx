import React from 'react';
import BookCard from '../components/BookCard';
import '../styles/section.css';

const Romance = () => {
  const books = [
    { title: 'Orgullo y Prejuicio', author: 'Jane Austen', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Romance clásico con Elizabeth y Darcy.', price: 18.75 },
    { title: 'Cumbres Borrascosas', author: 'Emily Brontë', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Pasión y tragedia en Yorkshire.', price: 17.50 },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Independencia y amor verdadero.', price: 16.99 },
    { title: 'Romeo y Julieta', author: 'William Shakespeare', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'El amor imposible más famoso.', price: 14.25 },
    { title: 'El Amor en los Tiempos del Cólera', author: 'Gabriel García Márquez', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Un amor que dura toda la vida.', price: 19.50 },
    { title: 'El Diario de Noa', author: 'Nicholas Sparks', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Historia conmovedora e inolvidable.', price: 15.75 }
  ];

  return (
    <div className="section-page">
      <div className="container">
        <div className="section-header">
          <h1>Romance</h1>
          <p>Historias de amor que tocan el corazón.</p>
        </div>
        <div className="books-grid">
          {books.map((book, i) => <BookCard key={i} book={book} />)}
        </div>
      </div>
    </div>
  );
};

export default Romance;

