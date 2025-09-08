import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import '../styles/home.css';

const Home = () => {
  const themes = [
    {
      id: 1,
      title: "Ficción",
      description: "Sumérgete en mundos imaginarios y aventuras épicas",
      featuredBook: {
        title: "El Señor de los Anillos",
        author: "J.R.R. Tolkien",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Una épica aventura en la Tierra Media que ha cautivado a millones de lectores.",
        price: 25.99
      }
    },
    {
      id: 2,
      title: "Ciencia Ficción",
      description: "Explora el futuro y las posibilidades del universo",
      featuredBook: {
        title: "Dune",
        author: "Frank Herbert",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Una obra maestra de la ciencia ficción que define el género.",
        price: 22.50
      }
    },
    {
      id: 3,
      title: "Misterio",
      description: "Desentraña enigmas y resuelve casos intrigantes",
      featuredBook: {
        title: "El Código Da Vinci",
        author: "Dan Brown",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Un thriller que combina historia, arte y misterio en una trama fascinante.",
        price: 19.99
      }
    },
    {
      id: 4,
      title: "Romance",
      description: "Historias de amor que tocan el corazón",
      featuredBook: {
        title: "Orgullo y Prejuicio",
        author: "Jane Austen",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Una de las novelas románticas más influyentes de la literatura inglesa.",
        price: 18.75
      }
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Librería Luciano Lollo</h1>
          <p>Descubre tu próxima aventura literaria en nuestra amplia colección de libros</p>
        </div>
      </section>

      <section className="themes-section">
        <div className="container">
          <h2 className="section-title">Nuestros Temas Destacados</h2>
          <div className="themes-grid">
            {themes.map(theme => (
              <div key={theme.id} className="theme-card">
                <div className="theme-header">
                  <h3 className="theme-title">{theme.title}</h3>
                  <p className="theme-description">{theme.description}</p>
                </div>
                <div className="featured-book">
                  <h4>Libro Destacado:</h4>
                  <BookCard book={theme.featuredBook} isFeatured={true} />
                </div>
                <Link to={
                  theme.title === 'Ficción' ? '/ficcion' :
                  theme.title === 'Ciencia Ficción' ? '/ciencia-ficcion' :
                  theme.title === 'Misterio' ? '/misterio' :
                  theme.title === 'Romance' ? '/romance' : '/'
                } className="theme-link">
                  Ver más libros de {theme.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>📚 Amplia Selección</h3>
              <p>Más de 10,000 títulos en diferentes géneros y categorías</p>
            </div>
            <div className="feature">
              <h3>🚚 Envío Rápido</h3>
              <p>Entrega a domicilio en 24-48 horas en toda la ciudad</p>
            </div>
            <div className="feature">
              <h3>💯 Calidad Garantizada</h3>
              <p>Todos nuestros libros son originales y en perfecto estado</p>
            </div>
            <div className="feature">
              <h3>👥 Atención Personalizada</h3>
              <p>Nuestro equipo te ayuda a encontrar el libro perfecto</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

