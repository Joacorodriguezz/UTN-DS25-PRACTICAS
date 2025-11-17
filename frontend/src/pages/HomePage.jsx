import { useState, useEffect } from "react";
import BloqueTema from '../components/BloqueTema';
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";
import '../styles/home.css'; 

function HomePage() {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(API_ENDPOINTS.BOOKS.GET_ALL, {
          headers: token ? {
            Authorization: `Bearer ${token}`,
          } : {},
        });
        // La respuesta del backend tiene formato { data, total, page, pageSize }
        const librosData = response.data.data || response.data;
        const librosArray = Array.isArray(librosData) ? librosData : [];
        // Mostrar solo los primeros 3 libros destacados
        setLibros(librosArray.slice(0, 3));
      } catch (err) {
        console.error("Error al cargar libros:", err);
        // Si falla, usar libros de ejemplo
        setLibros([
          {
            id: 1,
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            portada: "https://www.edicontinente.com.ar/image/titulos/9788466379717.jpg"
          },
          {
            id: 2,
            titulo: "Doctor y campeón",
            autor: "Luciano Wernicke, Carlos Salvador Bilardo",
            portada: "https://pdlibrosarg.cdnstatics2.com/usuaris/libros/thumbs/13e3e63d-9ca4-45b8-97bd-dabbc39145d9/d_1200_1200/doctor-y-campeon_9789504938507.webp"
          },
          {
            id: 3,
            titulo: "Veinte poemas de amor y una canción desesperada",
            autor: "Pablo Neruda",
            portada: "https://cdn.oceano.com.ar/titulos/9786074003697.jpg"
          }
        ]);
      } finally {
        setCargando(false);
      }
    };

    fetchLibros();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido a la Librería Luciano Lollo</h1>
        <p>Busca en los libros lo que ves en tus sueños</p>
      </section>

      <h2 className="section-title">Libros Destacados</h2>

      {cargando ? (
        <p>Cargando libros...</p>
      ) : (
        <div className="themes-grid">
          {libros.map((libro) => (
            <BloqueTema 
              key={libro.id}
              id={libro.id}
              title={libro.titulo} 
              autor={libro.author?.nombre || libro.autor || "Autor desconocido"} 
              img={libro.portada} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
