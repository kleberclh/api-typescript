import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(401).json({
      message: "Todos os campos são obrigatórios!!",
      success: false,
      status: 401,
    });
  }
  try {
    const checkEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (checkEmail) {
      res.status(401).json({
        message: "E-mail já está sendo usado por outro usuário!",
        success: false,
        status: 401,
      });
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      success: true,
      status: 201,
      usuario: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const getAll = await prisma.user.findMany();
    res.status(200).json({
      message: "Usuários encontrados com sucesso",
      success: true,
      status: 200,
      usuarios: getAll,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { uuid } = req.params;
    const { name, email } = req.body;

    const findUser = await prisma.user.findUnique({
      where: {
        id: uuid,
      },
    });

    if (!findUser) {
      res.status(404).json({ message: "Usuário não encontrado" });
    }

    const updatedData = { name, email };

    if (!name || !email) {
      res
        .status(401)
        .json({
          message: "Todos os campos são obrigatórios!!",
          success: false,
          status: 401,
        });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: uuid,
      },
      data: updatedData,
    });
    res.status(200).json({
      message: "Usuário atualizado com sucesso!",
      success: true,
      status: 200,
      usuario: updatedUser,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
