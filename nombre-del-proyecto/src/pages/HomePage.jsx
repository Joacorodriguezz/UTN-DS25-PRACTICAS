import BloqueTema from '../components/BloqueTema';
import '../styles/home.css'; 

function HomePage() {
  return (
    <div className="home">
     
      <section className="hero">
        <h1>Bienvenido a la Librería Luciano Lollo</h1>
        <p>Busca en los libros lo que ves en tus sueños</p>
      </section>


      <h2 className="section-title">Nuestros Temas</h2>

   
      <div className="themes-grid">
        <BloqueTema 
          title="Cien años de soledad" 
          autor="Gabriel García Márquez" 
          img="https://www.edicontinente.com.ar/image/titulos/9788466379717.jpg" 
        />
        <BloqueTema 
          title="Doctor y campeón"
          autor="Luciano Wernicke, Carlos Salvador Bilardo"
          img="https://pdlibrosarg.cdnstatics2.com/usuaris/libros/thumbs/13e3e63d-9ca4-45b8-97bd-dabbc39145d9/d_1200_1200/doctor-y-campeon_9789504938507.webp" 
        />
        <BloqueTema 
          title="Veinte poemas de amor y una canción desesperada"
          autor="Pablo Neruda"
          img="https://cdn.oceano.com.ar/titulos/9786074003697.jpg" 
        />
      </div>
    </div>
  );
}

export default HomePage;
