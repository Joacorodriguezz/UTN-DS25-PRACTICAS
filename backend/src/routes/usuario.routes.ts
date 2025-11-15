import { Router } from 'express';
import { UsuarioService } from '../services/usuario.service';

const router = Router();
const usuarioService = new UsuarioService();

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await usuarioService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a user by their ID
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usuarioService.getUserById(Number(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new user
router.post('/users', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await usuarioService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to update an existing user
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await usuarioService.updateUser(Number(id), userData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await usuarioService.deleteUser(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
