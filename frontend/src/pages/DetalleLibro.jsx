import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";
import { Box, Button, Typography, CircularProgress, Paper, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../styles/detalleLibro.css";

function DetalleLibro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [libro, setLibro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLibro = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        
        // Intentar obtener el libro por ID primero
        try {
          const response = await axios.get(API_ENDPOINTS.BOOKS.GET_BY_ID(id), {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          });
          // La respuesta del backend tiene formato { data: {...} }
          setLibro(response.data.data || response.data);
        } catch (err) {
          // Si no existe el endpoint por ID, obtener todos y filtrar
          const allBooksResponse = await axios.get(API_ENDPOINTS.BOOKS.GET_ALL, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          });
          // La respuesta del backend tiene formato { data, total, page, pageSize }
          const librosData = allBooksResponse.data.data || allBooksResponse.data;
          const librosArray = Array.isArray(librosData) ? librosData : [];
          const libroEncontrado = librosArray.find(
            (libro) => libro.id === parseInt(id)
          );
          if (libroEncontrado) {
            setLibro(libroEncontrado);
          } else {
            setError("Libro no encontrado");
          }
        }
      } catch (err) {
        setError(err.response?.data?.message || "Error al cargar el libro");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchLibro();
    }
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !libro) {
    return (
      <Box p={4}>
        <Typography variant="h5" color="error">
          {error || "Libro no encontrado"}
        </Typography>
        <Button onClick={() => navigate("/")} sx={{ mt: 2 }}>
          Volver al inicio
        </Button>
      </Box>
    );
  }

  return (
    <div className="detalle-libro-page">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Volver
      </Button>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          <Box flex={1}>
            {libro.portada && (
              <img
                src={libro.portada}
                alt={libro.titulo}
                className="libro-imagen-detalle"
              />
            )}
          </Box>
          <Box flex={2}>
            <Typography variant="h3" component="h1" gutterBottom>
              {libro.titulo}
            </Typography>
            
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Autor: {libro.author?.nombre || libro.autor || "Autor desconocido"}
            </Typography>

            <Box my={2}>
              <Chip 
                label={libro.categoria || "Sin categoría"} 
                color="primary" 
                sx={{ mr: 1 }}
              />
            </Box>

            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              {libro.descripcion || "No hay descripción disponible para este libro."}
            </Typography>

            <Box mt={4}>
              <Button variant="contained" size="large" color="primary">
                Comprar
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default DetalleLibro;

