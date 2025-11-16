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
  const [autores, setAutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    authorId: "",
    price: "",
    imageUrl: "",
    genre: "",
  });

  useEffect(() => {
    // Verificar si es admin
    if (!isAdmin()) {
      navigate("/");
      return;
    }

    fetchLibros();
    fetchAutores();
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
      setLibros(response.data);
    } catch (err) {
      setError("Error al cargar los libros");
    } finally {
      setLoading(false);
    }
  };

  const fetchAutores = async () => {
    // Por ahora, usaremos autores hardcodeados o puedes crear un endpoint para obtenerlos
    // Por simplicidad, asumiremos que el usuario ingresa el ID del autor
    setAutores([
      { id: 1, name: "Gabriel García Márquez" },
      { id: 2, name: "Pablo Neruda" },
      { id: 3, name: "Isaac Asimov" },
    ]);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setFormData({
      title: "",
      authorId: "",
      price: "",
      imageUrl: "",
      genre: "",
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
      await axios.post(
        API_ENDPOINTS.BOOKS.CREATE,
        {
          title: formData.title,
          authorId: parseInt(formData.authorId),
          price: parseInt(formData.price),
          imageUrl: formData.imageUrl,
          genre: formData.genre,
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
      setError(err.response?.data?.message || "Error al agregar el libro");
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
          <Grid item xs={12} sm={6} md={4} key={libro.id}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <img
                src={libro.imageUrl}
                alt={libro.title}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
              />
              <Typography variant="h6" sx={{ mt: 1 }}>
                {libro.title}
              </Typography>
              {libro.author && (
                <Typography variant="body2" color="text.secondary">
                  {libro.author.name}
                </Typography>
              )}
              <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                ${libro.price}
              </Typography>
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
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <TextField
                label="ID del Autor"
                type="number"
                fullWidth
                required
                value={formData.authorId}
                onChange={(e) => setFormData({ ...formData, authorId: e.target.value })}
                helperText="Ingresa el ID numérico del autor"
              />
              <TextField
                label="Precio"
                type="number"
                fullWidth
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              <TextField
                label="URL de la Imagen"
                fullWidth
                required
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              />
              <FormControl fullWidth required>
                <InputLabel>Género</InputLabel>
                <Select
                  value={formData.genre}
                  onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                  label="Género"
                >
                  <MenuItem value="Ciencia_Ficcion">Ciencia Ficción</MenuItem>
                  <MenuItem value="Fantasia">Fantasía</MenuItem>
                  <MenuItem value="Novela_Historica">Novela Histórica</MenuItem>
                  <MenuItem value="Desarrollo_Personal">Desarrollo Personal</MenuItem>
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

