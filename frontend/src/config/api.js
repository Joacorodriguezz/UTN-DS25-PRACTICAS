// Configuración de la API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
  },
  BOOKS: {
    GET_ALL: `${API_BASE_URL}/api/libros`,
    GET_BY_ID: (id) => `${API_BASE_URL}/api/libros/${id}`,
    CREATE: `${API_BASE_URL}/api/libros`,
    DELETE: (id) => `${API_BASE_URL}/api/libros/${id}`,
  },
  AUTHORS: {
    FIND_OR_CREATE: `${API_BASE_URL}/api/authors`,
    GET_ALL: `${API_BASE_URL}/api/authors`,
    SEARCH: `${API_BASE_URL}/api/authors/search`,
  },
};

// Función helper para obtener headers con autenticación
export const getAuthHeaders = () => {
  const token = localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default API_BASE_URL;

