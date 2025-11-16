import { Request, Response, NextFunction } from 'express';
import { loginService } from '../services/auth.service';
import { createUser } from '../services/user.service';
import type { RegisterBody } from '../validations/auth.validation';

export async function loginController(req: Request, res: Response, next: NextFunction) {
 try {
    const { email, password } = req.body as { email: string; password: string };
    const result = await loginService(email, password);
    return res.status(200).json(result);
  } catch {
    return res.status(401).json({ message: 'Email o password incorrectos' });
  }
}

export async function registerController(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body as RegisterBody;
    const user = await createUser({ ...data, role: 'USER' });
    return res.status(201).json({ 
      user, 
      message: 'Usuario registrado exitosamente' 
    });
  } catch (error: any) {
    next(error);
  }
}
