import { useParams } from "react-router-dom";
import BloqueTema from "../components/BloqueTema";
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";
import "../styles/seccion.css";

function Seccion() {
  const { tema } = useParams();
  const { usuario } = useContext(UsuarioContext);
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Mapeo de temas de la URL a categorías del backend
  const temaToCategoria = {
    'deportes': 'DEPORTE',
    'deporte': 'DEPORTE',
    'ficcion': 'FICCION',
    'ciencia-ficcion': 'FICCION',
    'historia': 'HISTORIA',
    'infantil': 'INFANTIL',
  };

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        setCargando(true);
        setError(null);
        const token = localStorage.getItem("authToken");
        
        // Obtener la categoría correspondiente al tema
        const categoria = temaToCategoria[tema?.toLowerCase()];
        
        // Construir la URL con el parámetro categoria si existe
        let url = API_ENDPOINTS.BOOKS.GET_ALL;
        if (categoria) {
          url += `?categoria=${categoria}`;
        }
        
        const response = await axios.get(url, {
          headers: token ? {
            Authorization: `Bearer ${token}`,
          } : {},
        });
        
        // La respuesta del backend tiene formato { data, total, page, pageSize }
        const librosData = response.data.data || response.data;
        setLibros(Array.isArray(librosData) ? librosData : []);
      } catch (err) {
        console.error("Error al cargar los libros:", err);
        setError("Error al cargar los libros. Por favor, inicia sesión.");
      } finally {
        setCargando(false);
      }
    };

    if (tema) {
      fetchLibros();
      document.title = `Sección: ${tema}`;
    }
  }, [tema]);

  if (cargando) return <p>Cargando libros...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="section-page">
      <div className="section-header">
        <h1>{tema?.replace("-", " ")}</h1>
        {usuario && usuario.nombre && (
          <p>Usuario actual: {usuario.nombre}</p>
        )}
      </div>

      <div className="books-grid">
        {libros.length > 0 ? (
          libros.map((libro) => (
            <BloqueTema
              key={libro.id}
              id={libro.id}
              title={libro.titulo}
              autor={libro.author?.nombre || libro.autor || "Autor desconocido"}
              img={libro.portada}
            />
          ))
        ) : (
          <p>No hay libros disponibles en esta sección.</p>
        )}
      </div>
    </div>
  );
}

export default Seccion;
