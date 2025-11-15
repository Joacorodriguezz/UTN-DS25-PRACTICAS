import { PrismaClient } from '@prisma/client';
import { LoginRequest, LoginResponse, AuthUser } from '../types/auth.types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export class AuthService {
  async login({ email, password }: LoginRequest): Promise<LoginResponse> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    return { user: user as AuthUser, token };
  }

  async register(userData: AuthUser): Promise<AuthUser> {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new Error('Email is already taken');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = await prisma.user.create({
      data: { ...userData, password: hashedPassword },
    });

    return newUser as AuthUser;
  }
}
