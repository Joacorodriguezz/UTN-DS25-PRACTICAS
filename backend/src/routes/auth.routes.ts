import { Router } from 'express';
import { loginController, registerController } from '../controllers/auth.controller';
import { loginSchema, registerSchema } from '../validations/auth.validation';
import { validate } from '../middlewares/validation.middleware';

const router = Router();

router.post('/register', validate(registerSchema), registerController);
router.post('/login', validate(loginSchema), loginController);

export default router;