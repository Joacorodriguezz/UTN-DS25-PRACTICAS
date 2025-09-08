import React from 'react';
import '../styles/bookCard.css';

const BookCard = ({ book, isFeatured = false }) => {
  return (
    <div className={`book-card ${isFeatured ? 'featured' : ''}`}>
      <div className="book-image">
        <img src={book.image} alt={book.title} />
        {isFeatured && <div className="featured-badge">Destacado</div>}
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">por {book.author}</p>
        {book.description && (
          <p className="book-description">{book.description}</p>
        )}
        {book.price && (
          <p className="book-price">${book.price}</p>
        )}
      </div>
    </div>
  );
};

export default BookCard;

