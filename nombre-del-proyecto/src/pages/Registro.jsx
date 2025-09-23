import "../styles/registro.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Registro() {
  return (
    <div className="registro-page">
      <div className="registro-container">
        {/* Columna izquierda */}
        <div className="registro-welcome">
          <img src={logo} alt="Logo" className="registro-logo" />
          <h2>Unite a la Librería Luciano Lollo</h2>
          <p>Completá el formulario para registrarte</p>
        </div>

        {/* Columna derecha */}
        <div className="registro-form">
          <h2>Registración</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Apellido" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="date" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Contraseña" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Repetir contraseña" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Tema Favorito</option>
                <option value="deportes">Deportes</option>
                <option value="ciencia-ficcion">Ciencia Ficción</option>
                <option value="poesia">Poesía</option>
              </select>
            </div>
            <button type="submit" className="btn-registro">Registrarse</button>
          </form>
          <p className="signup-text">
            ¿Ya tenés cuenta?{" "}
            <Link to="/iniciar-sesion">Iniciá sesión acá</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
