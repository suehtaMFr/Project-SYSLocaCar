import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Create Marca
export const createMarca = async (req: Request, res: Response) => {
  try {
    const { nome } = req.body;
    const marca = await prisma.marca.create({
      data: { nome },
    });
    res.status(201).json(marca);
  } catch (error) {
    res.status(500).json({ error: "Failed to create marca" });
  }
};

// Get all Marcas
export const getMarcas = async (req: Request, res: Response) => {
  try {
    const marcas = await prisma.marca.findMany();
    res.status(200).json(marcas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve marcas" });
  }
};

// Get single Marca
export const getMarca = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const marca = await prisma.marca.findUnique({
      where: { id: parseInt(id) },
    });
    if (marca) {
      res.status(200).json(marca);
    } else {
      res.status(404).json({ error: "Marca not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve marca" });
  }
};

// Update Marca
export const updateMarca = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    const marca = await prisma.marca.update({
      where: { id: parseInt(id) },
      data: { nome },
    });
    res.json(marca);
  } catch (error) {
    res.status(500).json({ error: "Failed to update marca" });
  }
};

// Delete Marca
export const deleteMarca = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.marca.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete marca" });
  }
};
