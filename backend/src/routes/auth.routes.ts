import { Router } from 'express';
import { AuthService } from '../services/auth.service';

const router = Router();
const authService = new AuthService();

// Route for login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginResponse = await authService.login({ email, password });
    res.status(200).json(loginResponse);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// Route for registration
router.post('/register', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await authService.register(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
