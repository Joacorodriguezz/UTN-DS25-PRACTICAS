import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Archivo CSS para el header

const Header = () => {
  return (
    <div className="header">
      {/* Cabecera con logo */}
      <header className="header-top">
        <img src="/vite.svg" alt="Logo Librería" className="header-logo" />
        <h1>Librería Luciano Lollo</h1>
      </header>

      {/* Menú de navegación */}
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/register">Registrarse</Link>
        <Link to="/login">Iniciar Sesión</Link>
      </nav>
    </div>
  );
};

export default Header;
