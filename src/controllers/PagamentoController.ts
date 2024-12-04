import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createPagamento = async (req: Request, res: Response) => {
  try {
    const { data, valorPago, formaPagamento, contratoId } = req.body;
    const pagamento = await prisma.pagamento.create({
      data: {
        data,
        valorPago,
        formaPagamento,
        contratoId: parseInt(contratoId),
      },
    });
    res.status(201).json(pagamento);
  } catch (error) {
    res.status(500).json({ error: "Failed to create pagamento" });
  }
};

export const getPagamentos = async (req: Request, res: Response) => {
  try {
    const pagamentos = await prisma.pagamento.findMany();
    res.status(200).json(pagamentos);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve pagamentos" });
  }
};

export const getPagamento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pagamento = await prisma.pagamento.findUnique({
      where: { id: parseInt(id) },
    });
    if (pagamento) {
      res.status(200).json(pagamento);
    } else {
      res.status(404).json({ error: "Pagamento not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve pagamento" });
  }
};

export const updatePagamento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data, valorPago, formaPagamento, contratoId } = req.body;
    const pagamento = await prisma.pagamento.update({
      where: { id: parseInt(id) },
      data: {
        data,
        valorPago,
        formaPagamento,
        contratoId: parseInt(contratoId),
      },
    });
    res.status(200).json(pagamento);
  } catch (error) {
    res.status(500).json({ error: "Failed to update pagamento" });
  }
};

export const deletePagamento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.pagamento.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete pagamento" });
  }
};
