import { useState } from "react";
import { secciones } from "../mocks/libros.js";
import { useParams } from "react-router-dom";
import BloqueTema from "../components/BloqueTema";
import "../styles/seccion.css";
import { TextField, Button } from "@mui/material";

function Seccion() {
  const { tema } = useParams();
  const [libros, setLibros] = useState(secciones[tema] || []);
  const [nuevoLibro, setNuevoLibro] = useState({ title: "", autor: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLibros([
      ...libros,
      { id: Date.now(), ...nuevoLibro, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYtfVTrivY-Btfqn5evBxSyQu4amOtZ5n6g&s" }
    ]);
    setNuevoLibro({ title: "", autor: "" });
  };

  return (
    <div>
      <div className="section-header">
        <h1>{tema.replace("-", " ")}</h1>
      </div>

      <div className="books-grid">
        {libros.map((libro) => (
          <BloqueTema
            key={libro.id}
            title={libro.title}
            autor={libro.autor}
            img={libro.img}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="form-agregar">
        <TextField
          label="Nombre"
          required
          value={nuevoLibro.title}
          onChange={(e) => setNuevoLibro({ ...nuevoLibro, title: e.target.value })}
        />
        <TextField
          label="Autor"
          required
          value={nuevoLibro.autor}
          onChange={(e) => setNuevoLibro({ ...nuevoLibro, autor: e.target.value })}
        />
        <Button type="submit" variant="contained">Enviar</Button>
      </form>
    </div>
  );
}

export default Seccion;
