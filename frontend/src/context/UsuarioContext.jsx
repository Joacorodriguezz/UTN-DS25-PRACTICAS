import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar usuario del localStorage al iniciar
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("user");
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        setUsuario({
          id: user.id,
          nombre: user.name,
          email: user.email,
          role: user.role,
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUsuario(null);
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };

  const isAdmin = () => {
    return usuario?.role === "ADMIN";
  };

  return (
    <UsuarioContext.Provider value={{ 
      usuario, 
      setUsuario, 
      logout, 
      isAuthenticated, 
      isAdmin,
      loading 
    }}>
      {children}
    </UsuarioContext.Provider>
  );
}
