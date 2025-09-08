import React from 'react';
import BookCard from '../components/BookCard';
import '../styles/section.css';

const Fiction = () => {
  const books = [
    { title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Una épica aventura en la Tierra Media.', price: 25.99 },
    { title: 'Harry Potter y la Piedra Filosofal', author: 'J.K. Rowling', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'El inicio del mundo mágico de Hogwarts.', price: 22.50 },
    { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Realismo mágico en Macondo.', price: 19.99 },
    { title: '1984', author: 'George Orwell', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Distopía clásica sobre control social.', price: 18.75 },
    { title: 'El Quijote', author: 'Miguel de Cervantes', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Aventuras del ingenioso hidalgo.', price: 24.99 },
    { title: 'Los Miserables', author: 'Victor Hugo', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Justicia, redención y amor en Francia.', price: 21.50 }
  ];

  return (
    <div className="section-page">
      <div className="container">
        <div className="section-header">
          <h1>Ficción</h1>
          <p>Sumérgete en mundos imaginarios y aventuras épicas.</p>
        </div>
        <div className="books-grid">
          {books.map((book, i) => <BookCard key={i} book={book} />)}
        </div>
      </div>
    </div>
  );
};

export default Fiction;

