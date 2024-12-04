import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getContratoLocacao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contratoLocacao = await prisma.contratoLocacao.findUnique({
      where: { id: parseInt(id) },
      include: {
        veiculos: true,
        ocorrencias: true,
        pagamentos: true,
      },
    });
    if (!contratoLocacao) {
      return res.status(404).json({ error: "ContratoLocacao not found" });
    }
    res.json(contratoLocacao);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contratoLocacao" });
  }
};

export const getContratoLocacoes = async (req: Request, res: Response) => {
  try {
    const contratoLocacoes = await prisma.contratoLocacao.findMany({
      include: {
        veiculos: true,
        ocorrencias: true,
        pagamentos: true,
      },
    });
    res.json(contratoLocacoes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contratoLocacoes" });
  }
};

export const createContratoLocacao = async (req: Request, res: Response) => {
  try {
    const { dataLocacao, dataDevolucao, valorCaucao, valorTotal, status } =
      req.body;
    const contratoLocacao = await prisma.contratoLocacao.create({
      data: {
        dataLocacao,
        dataDevolucao,
        valorCaucao,
        valorTotal,
        status,
      },
    });
    res.status(201).json(contratoLocacao);
  } catch (error) {
    res.status(500).json({ error: "Failed to create contratoLocacao" });
  }
};

export const updateContratoLocacao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { dataLocacao, dataDevolucao, valorCaucao, valorTotal, status } =
      req.body;
    const contratoLocacao = await prisma.contratoLocacao.update({
      where: { id: parseInt(id) },
      data: {
        dataLocacao,
        dataDevolucao,
        valorCaucao,
        valorTotal,
        status,
      },
    });
    res.json(contratoLocacao);
  } catch (error) {
    res.status(500).json({ error: "Failed to update contratoLocacao" });
  }
};

export const deleteContratoLocacao = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.contratoLocacao.delete({ where: { id: parseInt(id) } });
    res.status(204).json({ message: "ContratoLocacao deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contratoLocacao" });
  }
};
