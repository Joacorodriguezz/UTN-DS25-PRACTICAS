import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Seccion from "./pages/Seccion";
import IniciarSesion from "./pages/IniciarSesion";
import Registro from "./pages/Registro";
import Contacto from "./pages/Contacto";
import DetalleLibro from "./pages/DetalleLibro";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="secciones/:tema" element={<Seccion />} />
        <Route path="libro/:id" element={<DetalleLibro />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="iniciar-sesion" element={<IniciarSesion />} />
      <Route path="/registracion" element={<Registro />} />
    </Routes>
  );
}

export default App;
