import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getManutencoes = async (req: Request, res: Response) => {
  const manutencoes = await prisma.manutencao.findMany({
    include: {
      veiculo: true,
    },
  });
  res.json(manutencoes);
};

export const getManutencao = async (req: Request, res: Response) => {
  const { id } = req.params;
  const manutencao = await prisma.manutencao.findUnique({
    where: { id: parseInt(id) },
    include: {
      veiculo: true,
    },
  });
  if (!manutencao) {
    return res.status(404).json({ error: "Manutencao not found" });
  }
  res.json(manutencao);
};

export const createManutencao = async (req: Request, res: Response) => {
  try {
    const { descricao, dataManutencao, valorManutencao, veiculoId } = req.body;
    const manutencao = await prisma.manutencao.create({
      data: {
        descricao,
        dataManutencao,
        valorManutencao,
        veiculoId: parseInt(veiculoId),
      },
    });
    res.status(201).json(manutencao);
  } catch (error) {
    console.log("ERRO ESTA AQUI: " + error);
    res.status(500).json({ error: "Failed to create manutencao" });
  }
};

export const updateManutencao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descricao, dataManutencao, valorManutencao, veiculoId } = req.body;
    const manutencao = await prisma.manutencao.update({
      where: { id: parseInt(id) },
      data: {
        descricao,
        dataManutencao,
        valorManutencao,
        veiculoId: parseInt(veiculoId),
      },
    });
    res.json(manutencao);
  } catch (error) {
    res.status(500).json({ error: "Failed to update manutencao" });
  }
};

export const deleteManutencao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.manutencao.delete({ where: { id: parseInt(id) } });
    res.status(204).json({ message: "Manutencao deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete manutencao" });
  }
};
