import "../styles/contacto.css";
import { TextField, Button, Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function Contacto() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Formulario */}
        <div className="contact-form">
          <h2>Contáctanos</h2>
          <form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
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
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                />
                <TextField
                  label="Teléfono"
                  type="tel"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FormControl fullWidth>
                  <InputLabel>Método de contacto preferido</InputLabel>
                  <Select
                    label="Método de contacto preferido"
                    defaultValue=""
                  >
                    <MenuItem value="email">Email</MenuItem>
                    <MenuItem value="telefono">Teléfono</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>¿Sobre qué tema nos contactás?</InputLabel>
                  <Select
                    label="¿Sobre qué tema nos contactás?"
                    defaultValue=""
                  >
                    <MenuItem value="compras">Compras</MenuItem>
                    <MenuItem value="soporte">Soporte</MenuItem>
                    <MenuItem value="otro">Otro</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                label="Escribí tu mensaje..."
                multiline
                rows={5}
                variant="outlined"
                fullWidth
              />
            </Box>
            <Button 
              type="submit" 
              variant="contained" 
              size="large"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              Enviar
            </Button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Información de contacto</h3>
          <p><strong>Dirección:</strong> Calle Falsa 123, La Plata</p>
          <p><strong>Teléfono:</strong> +54 221 123-4567</p>
          <p><strong>Email:</strong> contacto@librerialollo.com</p>
          <div className="social-links">
            <a href="#">📘 Facebook</a>
            <a href="#">📸 Instagram</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
