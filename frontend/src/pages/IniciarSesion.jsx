import "../styles/iniciarSesion.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UsuarioContext } from "../context/UsuarioContext";
import { API_ENDPOINTS } from "../config/api";

// Validación de los campos del formulario usando Yup
const schema = yup.object().shape({
  email: yup.string().email("Debe ser un correo válido").required("El correo es obligatorio"),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
});

function IniciarSesion() {
  const navigate = useNavigate();
  const { setUsuario } = useContext(UsuarioContext);
  const [error, setError] = useState("");
  
  // Configuración de React Hook Form con validación
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Función para manejar el submit del formulario
  const onSubmit = async (data) => {
    try {
      setError("");
      const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, {
        email: data.email,
        password: data.password,
      });
      
      // Guardar el token y datos del usuario
      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      
      // Actualizar el contexto
      setUsuario({
        id: user.id,
        nombre: user.name,
        email: user.email,
        role: user.role,
      });
      
      // Redirigir según el rol
      if (user.role === "ADMIN") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Credenciales inválidas. Por favor, intenta nuevamente.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-welcome">
          <img src={logo} alt="Logo" className="login-logo" />
          <h2>Bienvenido a la Librería Luciano Lollo</h2>
          <p>Iniciá sesión para continuar</p>
        </div>
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
              <TextField
                label="Correo"
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
            </Box>
            {error && <p className="error-message">{error}</p>}
            <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 2, mb: 2 }}>
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
