import { secciones } from "../mocks/libros.js";
import { useParams } from "react-router-dom";
import BloqueTema from "../components/BloqueTema";
import '../styles/seccion.css'
function Seccion() {
  const { tema } = useParams();
  const libros = secciones[tema] || [];

  return (
    <div>
      <div className="section-header">
        <h1>{tema.replace("-", " ")}</h1>
      </div>

      <div className="books-grid">
        {libros.map((libro) => (
          <BloqueTema
            title={libro.title}
            autor={libro.autor}
            img={libro.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Seccion;
