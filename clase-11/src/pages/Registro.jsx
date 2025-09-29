import "../styles/registro.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { TextField, Button, Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
              <TextField
                label="Nombre"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                label="Apellido"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                label="Fecha de Nacimiento"
                type="date"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                label="Repetir Contraseña"
                type="password"
                variant="outlined"
                required
                fullWidth
              />
              <FormControl fullWidth required>
                <InputLabel>Tema Favorito</InputLabel>
                <Select
                  label="Tema Favorito"
                  defaultValue=""
                >
                  <MenuItem value="deportes">Deportes</MenuItem>
                  <MenuItem value="ciencia-ficcion">Ciencia Ficción</MenuItem>
                  <MenuItem value="poesia">Poesía</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button 
              type="submit" 
              variant="contained" 
              size="large"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              Registrarse
            </Button>
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
