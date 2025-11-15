import { PrismaClient } from '@prisma/client';
import { CreateUserRequest, UpdateUserRequest, UserData } from '../types/usuario.types';

const prisma = new PrismaClient();

export class UsuarioService {
  async createUser(userData: CreateUserRequest): Promise<UserData> {
    return await prisma.user.create({
      data: userData,
    });
  }

  async updateUser(id: number, userData: UpdateUserRequest): Promise<UserData> {
    return await prisma.user.update({
      where: { id },
      data: userData,
    });
  }

  async getUserById(id: number): Promise<UserData | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async getAllUsers(): Promise<UserData[]> {
    return await prisma.user.findMany();
  }

  async deleteUser(id: number): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }
}
