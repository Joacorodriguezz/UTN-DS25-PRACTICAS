import { useParams } from "react-router-dom";
import BloqueTema from "../components/BloqueTema";
import { useFetch } from "../hooks/useFetch";
import { useContext, useEffect } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import "../styles/seccion.css";

function Seccion() {
  const { tema } = useParams();
  const { usuario } = useContext(UsuarioContext);

  // Función para obtener la URL de búsqueda según el tema
  const getSearchUrl = (tema) => {
    const searchTerms = {
      'deportes': 'sports football soccer basketball',
      'ciencia-ficcion': 'science fiction fantasy space',
      'poesia': 'poetry poems verse'
    };
    
    const searchTerm = searchTerms[tema] || 'books';
    // Agregamos parámetros adicionales para obtener mejores resultados
    return `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&limit=6&sort=rating`;
  };

  const { datos, cargando, error } = useFetch(getSearchUrl(tema));


  useEffect(() => {
    document.title = `Sección: ${tema}`;
  }, [tema]);

  if (cargando) return <p>Cargando libros...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="section-page">
      <div className="section-header">
        <h1>{tema?.replace("-", " ")}</h1>
        {usuario && usuario.nombre && (
          <p>Usuario actual: {usuario.nombre} (favorito: {usuario.favorito})</p>
        )}
      </div>

      <div className="books-grid">
        {datos?.docs?.map((libro) => (
          <BloqueTema
            key={libro.key}
            title={libro.title}
            autor={libro.author_name?.[0] || "Autor desconocido"}
            img={`https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`}
          />
        ))}

      </div>
    </div>
  );
}

export default Seccion;
