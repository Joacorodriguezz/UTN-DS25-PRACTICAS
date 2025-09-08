import '../styles/footer.css'; // Importa los estilos del footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Copyright */}
        <p className="footer-copy">&copy; 2025 Librería XYZ</p>

        {/* Redes sociales */}
        <ul className="footer-socials">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>

        {/* Términos y condiciones */}
        <p className="footer-terms">
          <a href="/assets/terms.pdf" target="_blank" rel="noopener noreferrer">
            Términos y Condiciones
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
