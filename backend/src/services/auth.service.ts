import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '../config/prisma';

type JWTRole = 'USER' | 'ADMIN';
type JWTPayload = { 
    sub: number;
    email: string; 
    role: JWTRole;
};

export async function loginService(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Credenciales inválidas');
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new Error('Credenciales inválidas');

  const JWT_SECRET = process.env.JWT_SECRET as Secret | undefined;
  if (!JWT_SECRET) {
    throw new Error('Falta JWT_SECRET en .env');
  }
  const EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '2h';

  const payload: JWTPayload = {
    sub: user.id,
    email: user.email,
    role: user.role as JWTRole,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRES_IN } as SignOptions);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}
