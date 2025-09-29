import { secciones } from "../mocks/libros.js";
import { useParams } from "react-router-dom";
import BloqueTema from "../components/BloqueTema";
import '../styles/seccion.css'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
             key={libro.title}   
            title={libro.title}
            autor={libro.autor}
            img={libro.img}
          />
        ))}
      </div>
      <div className="form-agregar">
        <TextField required id="outlined-basic" label="Nombre" variant="outlined"  />
         <TextField required id="outlined-basic" label="Autor" variant="outlined" />
         <Button variant="contained" endIcon={<SendIcon />}>Enviar   </Button>
      </div>
    </div>
  );
}

export default Seccion;
