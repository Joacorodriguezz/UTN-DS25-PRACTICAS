import "../styles/iniciarSesion.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function IniciarSesion() {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Columna izquierda */}
        <div className="login-welcome">
          <img src={logo} alt="Logo" className="login-logo" />
          <h2>Bienvenido a la Librería Luciano Lollo</h2>
          <p>Iniciá sesión para continuar</p>
        </div>

        {/* Columna derecha */}
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Usuario" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Contraseña" required />
            </div>
            <div className="form-options">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="btn-login">Ingresar</button>
          </form>
          <p className="signup-text">
            ¿No tenés cuenta?{" "}
            <Link to="/registro">Registrate acá</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default IniciarSesion;
