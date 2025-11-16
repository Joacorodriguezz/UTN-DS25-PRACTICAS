// Configuración de la API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
  },
  BOOKS: {
    GET_ALL: `${API_BASE_URL}/api/books/books`,
    GET_BY_ID: (id) => `${API_BASE_URL}/api/books/books/${id}`,
    CREATE: `${API_BASE_URL}/api/books/books`,
    DELETE: (id) => `${API_BASE_URL}/api/books/books/${id}`,
  },
};

// Función helper para obtener headers con autenticación
export const getAuthHeaders = () => {
  const token = localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default API_BASE_URL;

