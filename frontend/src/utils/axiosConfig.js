import axios from "axios";
import { API_BASE_URL } from "../config/api";

// Configurar axios para incluir el token automáticamente
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de autenticación
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido o expirado
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      window.location.href = "/iniciar-sesion";
    }
    return Promise.reject(error);
  }
);

export default axios;

