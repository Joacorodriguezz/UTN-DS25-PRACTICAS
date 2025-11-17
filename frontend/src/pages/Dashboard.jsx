import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";
import { UsuarioContext } from "../context/UsuarioContext";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const { usuario, isAdmin, logout } = useContext(UsuarioContext);
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    portada: "",
    descripcion: "",
    categoria: "",
  });

  useEffect(() => {
    // Verificar si es admin
    if (!isAdmin()) {
      navigate("/");
      return;
    }

    fetchLibros();
  }, [navigate, isAdmin]);

  const fetchLibros = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const response = await axios.get(API_ENDPOINTS.BOOKS.GET_ALL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // La respuesta del backend tiene formato { data, total, page, pageSize }
      setLibros(response.data.data || response.data);
    } catch (err) {
      setError("Error al cargar los libros");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setFormData({
      titulo: "",
      autor: "",
      portada: "",
      descripcion: "",
      categoria: "",
    });
    setError("");
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const token = localStorage.getItem("authToken");
      
      // Primero, buscar o crear el autor
      let authorId = null;
      if (formData.autor.trim()) {
        try {
          const authorResponse = await axios.post(
            API_ENDPOINTS.AUTHORS.FIND_OR_CREATE,
            { nombre: formData.autor.trim() },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          authorId = authorResponse.data.data.id;
        } catch (authorErr) {
          setError("Error al crear/buscar el autor: " + (authorErr.response?.data?.error || authorErr.message));
          return;
        }
      }
      
      // Crear el libro con el formato correcto del backend
      await axios.post(
        API_ENDPOINTS.BOOKS.CREATE,
        {
          titulo: formData.titulo,
          autor: formData.autor,
          categoria: formData.categoria,
          portada: formData.portada || null,
          descripcion: formData.descripcion || null,
          authorId: authorId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("Libro agregado exitosamente");
      handleCloseDialog();
      fetchLibros();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || "Error al agregar el libro");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este libro?")) {
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(API_ENDPOINTS.BOOKS.DELETE(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess("Libro eliminado exitosamente");
      fetchLibros();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Error al eliminar el libro");
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography>Cargando...</Typography>
      </Box>
    );
  }

  return (
    <div className="dashboard-page">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Dashboard de Administración</Typography>
        <Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenDialog}
            sx={{ mr: 2 }}
          >
            Agregar Libro
          </Button>
          <Button variant="outlined" onClick={logout}>
            Cerrar Sesión
          </Button>
        </Box>
      </Box>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess("")}>
          {success}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {libros.map((libro) => (
          <Grid key={libro.id} xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={{ p: 2 }}>
              {libro.portada && (
                <img
                  src={libro.portada}
                  alt={libro.titulo}
                  style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
                />
              )}
              <Typography variant="h6" sx={{ mt: 1 }}>
                {libro.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {libro.author?.nombre || libro.autor || "Autor desconocido"}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Categoría: {libro.categoria}
              </Typography>
              {libro.descripcion && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {libro.descripcion.length > 100 
                    ? libro.descripcion.substring(0, 100) + "..." 
                    : libro.descripcion}
                </Typography>
              )}
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(libro.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Agregar Nuevo Libro</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Título"
                fullWidth
                required
                value={formData.titulo}
                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              />
              <TextField
                label="Autor"
                fullWidth
                required
                value={formData.autor}
                onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
                helperText="Se creará el autor automáticamente si no existe"
              />
              <TextField
                label="URL de la Portada"
                fullWidth
                value={formData.portada}
                onChange={(e) => setFormData({ ...formData, portada: e.target.value })}
                helperText="Opcional"
              />
              <TextField
                label="Descripción"
                fullWidth
                multiline
                rows={3}
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                helperText="Opcional"
              />
              <FormControl fullWidth required>
                <InputLabel>Categoría</InputLabel>
                <Select
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                  label="Categoría"
                >
                  <MenuItem value="DEPORTE">Deporte</MenuItem>
                  <MenuItem value="FICCION">Ficción</MenuItem>
                  <MenuItem value="HISTORIA">Historia</MenuItem>
                  <MenuItem value="INFANTIL">Infantil</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button type="submit" variant="contained">
              Agregar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default Dashboard;

