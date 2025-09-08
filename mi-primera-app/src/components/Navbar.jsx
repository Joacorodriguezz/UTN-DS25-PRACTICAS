import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <h2>Librería Luciano Lollo</h2>
          </Link>
        </div>

        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Inicio</Link>
          <div className="dropdown">
            <span className="navbar-link dropdown-toggle">Libros</span>
            <div className="dropdown-content">
              <Link to="/ficcion" className="dropdown-link">Ficción</Link>
              <Link to="/ciencia-ficcion" className="dropdown-link">Ciencia Ficción</Link>
              <Link to="/misterio" className="dropdown-link">Misterio</Link>
              <Link to="/romance" className="dropdown-link">Romance</Link>
            </div>
          </div>
          <Link to="/contacto" className="navbar-link">Contacto</Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/registro" className="navbar-link">Registro</Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className={`navbar-mobile ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-mobile-link" onClick={closeMenu}>Inicio</Link>
        <div className="mobile-dropdown">
          <span className="navbar-mobile-link">Libros</span>
          <div className="mobile-dropdown-content">
            <Link to="/ficcion" className="navbar-mobile-link" onClick={closeMenu}>Ficción</Link>
            <Link to="/ciencia-ficcion" className="navbar-mobile-link" onClick={closeMenu}>Ciencia Ficción</Link>
            <Link to="/misterio" className="navbar-mobile-link" onClick={closeMenu}>Misterio</Link>
            <Link to="/romance" className="navbar-mobile-link" onClick={closeMenu}>Romance</Link>
          </div>
        </div>
        <Link to="/contacto" className="navbar-mobile-link" onClick={closeMenu}>Contacto</Link>
        <Link to="/login" className="navbar-mobile-link" onClick={closeMenu}>Login</Link>
        <Link to="/registro" className="navbar-mobile-link" onClick={closeMenu}>Registro</Link>
      </div>
    </nav>
  );
};

export default Navbar;

