import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Create Categoria
export const createCategoria = async (req: Request, res: Response) => {
  try {
    const { tipo, valorLocacao } = req.body;
    const categoria = await prisma.categoria.create({
      data: { tipo, valorLocacao },
    });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: "Failed to create categoria" });
  }
};

// Get all Categorias
export const getCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await prisma.categoria.findMany();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve categorias" });
  }
};

// Get single Categoria
export const getCategoria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const categoria = await prisma.categoria.findUnique({
      where: { id: parseInt(id) },
    });
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ error: "Categoria not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve categoria" });
  }
};

// Update Categoria
export const updateCategoria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { tipo, valorLocacao } = req.body;
    const categoria = await prisma.categoria.update({
      where: { id: parseInt(id) },
      data: { tipo, valorLocacao },
    });
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: "Failed to update categoria" });
  }
};

// Delete Categoria
export const deleteCategoria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.categoria.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    console.log("ERRO ESTA AQUI: " + error);
    res.status(500).json({ error: "Failed to delete categoria" });
  }
};
