import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout es un componente que envuelve todas las páginas.
 * Header, Footer y cualquier elemento común va aquí.
 * El contenido específico de cada página se pasa mediante `children`.
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />       {/* Cabecera + Menú */}
      <main>{children}</main> {/* Contenido específico de cada página */}
      <Footer />       {/* Pie de página */}
    </>
  );
};

export default Layout;
