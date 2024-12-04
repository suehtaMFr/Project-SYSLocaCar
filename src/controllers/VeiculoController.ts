import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export const getVeiculos = async (req: Request, res: Response) => {
  try {
    const veiculos = await prisma.veiculo.findMany();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve veiculos" });
  }
};

export const getVeiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const veiculo = await prisma.veiculo.findUnique({
      where: { id: parseInt(id) },
    });
    if (veiculo) {
      res.status(200).json(veiculo);
    } else {
      res.status(404).json({ error: "Veiculo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve veiculo" });
  }
};

export const createVeiculo = async (req: Request, res: Response) => {
  try {
    const { placa, chassi, anoFabricacao, cor, modeloId } = req.body;
    const veiculo = await prisma.veiculo.create({
      data: {
        placa,
        chassi,
        anoFabricacao,
        cor,
        modeloId: parseInt(modeloId),
        status: "disponível", // ou outro valor padrão
      },
    });
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create veiculo" });
  }
};

export const updateVeiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { placa, chassi, anoFabricacao, cor, modeloId } = req.body;
    const veiculo = await prisma.veiculo.update({
      where: { id: parseInt(id) },
      data: {
        placa,
        chassi,
        anoFabricacao,
        cor,
        modeloId: parseInt(modeloId),
      },
    });
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update veiculo" });
  }
};

export const deleteVeiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.veiculo.delete({ where: { id: parseInt(id) } });
    res.status(204).json({ message: "Veiculo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete veiculo" });
  }
};
