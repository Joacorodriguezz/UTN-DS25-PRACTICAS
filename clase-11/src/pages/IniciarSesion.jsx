import "../styles/iniciarSesion.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";

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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
              <TextField
                label="Usuario"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                required
                fullWidth
              />
            </Box>
            <div className="form-options">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <Button 
              type="submit" 
              variant="contained" 
              size="large"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              Ingresar
            </Button>
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
