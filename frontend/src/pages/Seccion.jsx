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

  // Mapeo de temas a géneros del backend
  const temaToGenre = {
    'deportes': 'Desarrollo_Personal', // Ajustar según los géneros disponibles
    'ciencia-ficcion': 'Ciencia_Ficcion',
    'poesia': 'Fantasia', // Ajustar según los géneros disponibles
  };

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        setCargando(true);
        const token = localStorage.getItem("authToken");
        const response = await axios.get(API_ENDPOINTS.BOOKS.GET_ALL, {
          headers: token ? {
            Authorization: `Bearer ${token}`,
          } : {},
        });
        
        // Filtrar libros por género si es necesario
        const genre = temaToGenre[tema];
        const librosFiltrados = genre 
          ? response.data.filter(libro => libro.genre === genre)
          : response.data;
        
        setLibros(librosFiltrados);
      } catch (err) {
        // Si no hay token, intentar sin autenticación (puede fallar)
        setError("Error al cargar los libros. Por favor, inicia sesión.");
      } finally {
        setCargando(false);
      }
    };

    fetchLibros();
    document.title = `Sección: ${tema}`;
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
              title={libro.title}
              autor={libro.author?.name || "Autor desconocido"}
              img={libro.imageUrl}
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
