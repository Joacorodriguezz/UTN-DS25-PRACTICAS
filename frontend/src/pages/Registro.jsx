import "../styles/registro.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { API_ENDPOINTS } from "../config/api";

// Validación de los campos del formulario usando Yup
const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Debe ser un correo válido").required("El correo es obligatorio"),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Las contraseñas deben coincidir").required("Confirmar contraseña es obligatorio"),
});

function Registro() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  // Configuración de React Hook Form con validación
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Función para manejar el submit del formulario
  const onSubmit = async (data) => {
    try {
      setError("");
      await axios.post(API_ENDPOINTS.AUTH.REGISTER, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      setSuccess(true);
      setTimeout(() => {
        navigate("/iniciar-sesion");  // Redirige al login después de registrarse
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Hubo un error al registrarse. Intenta nuevamente.");
    }
  };

  return (
    <div className="registro-page">
      <div className="registro-container">
        <div className="registro-welcome">
          <img src={logo} alt="Logo" className="registro-logo" />
          <h2>Unite a la Librería Luciano Lollo</h2>
          <p>Completá el formulario para registrarte</p>
        </div>
        <div className="registro-form">
          <h2>Registración</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
              <TextField
                label="Nombre"
                variant="outlined"
                required
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                required
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                required
                fullWidth
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <TextField
                label="Repetir Contraseña"
                type="password"
                variant="outlined"
                required
                fullWidth
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            </Box>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">¡Registro exitoso! Redirigiendo...</p>}
            <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 2, mb: 2 }}>
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
