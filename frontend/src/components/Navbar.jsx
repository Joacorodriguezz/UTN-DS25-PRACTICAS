import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import "../styles/navbar.css";

function Navbar() {
  const { usuario, isAuthenticated, isAdmin, logout } = useContext(UsuarioContext);

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

        {isAuthenticated() ? (
          <>
            {isAdmin() && (
              <li><Link to="/dashboard">Dashboard</Link></li>
            )}
            <li>
              <span style={{ marginRight: "10px" }}>
                {usuario?.nombre || "Usuario"}
              </span>
              <button onClick={logout} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
                Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/registracion">Registro</Link></li>
            <li><Link to="/iniciar-sesion">Iniciar sesión</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
