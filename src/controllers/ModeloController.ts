import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getModelos = async (req: Request, res: Response) => {
  const modelos = await prisma.modelo.findMany({
    include: {
      categoria: true,
      marca: true,
      veiculos: true,
    },
  });
  res.json(modelos);
};

export const getModelo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const modelo = await prisma.modelo.findUnique({
    where: { id: parseInt(id) },
    include: {
      categoria: true,
      marca: true,
      veiculos: true,
    },
  });
  if (!modelo) {
    return res.status(404).json({ error: "Modelo not found" });
  }
  res.json(modelo);
};

export const createModelo = async (req: Request, res: Response) => {
  try {
    const { nome, anoModelo, qtModelo, categoriaId, marcaId } = req.body;
    const modelo = await prisma.modelo.create({
      data: {
        nome,
        anoModelo,
        qtModelo,
        categoriaId: parseInt(categoriaId),
        marcaId: parseInt(marcaId),
      },
    });
    res.status(201).json(modelo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create modelo" });
  }
};

export const updateModelo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, anoModelo, qtModelo, categoriaId, marcaId } = req.body;
    const modelo = await prisma.modelo.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        anoModelo,
        qtModelo,
        categoriaId: parseInt(categoriaId),
        marcaId: parseInt(marcaId),
      },
    });
    res.json(modelo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update modelo" });
  }
};

export const deleteModelo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.modelo.delete({ where: { id: parseInt(id) } });
    res.status(204).json({ message: "Modelo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete modelo" });
  }
};
