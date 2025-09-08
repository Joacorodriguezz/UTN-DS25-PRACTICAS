import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    return( 
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Librería Luciano Lollo</h3>
                    <p>Tu destino para descubrir nuevos mundos a través de la lectura.</p>
                </div>
                
                <div className="footer-section">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/ficcion">Ficción</Link></li>
                        <li><Link to="/ciencia-ficcion">Ciencia Ficción</Link></li>
                        <li><Link to="/misterio">Misterio</Link></li>
                        <li><Link to="/romance">Romance</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/registro">Registro</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Redes Sociales</h4>
                    <div className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© 2024 Librería Luciano Lollo. Todos los derechos reservados.</p>
                <p><a href="#terminos">Términos y Condiciones</a> | <a href="#privacidad">Política de Privacidad</a></p>
            </div>
        </footer>
    );
};

export default Footer;

