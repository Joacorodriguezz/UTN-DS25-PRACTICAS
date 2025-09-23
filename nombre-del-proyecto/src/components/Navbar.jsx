import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        
        <li className="dropdown">
          <span className="dropbtn">Secciones ▾</span>
          <div className="dropdown-content">
            <Link to="/secciones/deportes">Deportes</Link>
            <Link to="/secciones/ciencia-ficcion">Ciencia Ficción</Link>
            <Link to="/secciones/poesia">Poesía</Link>
          </div>
        </li>
        <li><Link to="/contacto">Contacto</Link></li>

        <li><Link to="/registro">Registro</Link></li>
       <li><Link to="/iniciar-sesion">Iniciar sesión</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
