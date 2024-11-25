import {
  createCategoria,
  deleteCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
} from "../controllers/CategoriaController";

import {
  createManutencao,
  deleteManutencao,
  getManutencao,
  getManutencoes,
  updateManutencao,
} from "../controllers/ManutencaoController";

import {
  createMarca,
  deleteMarca,
  getMarca,
  getMarcas,
  updateMarca,
} from "../controllers/MarcaController";

import {
  createModelo,
  deleteModelo,
  getModelo,
  getModelos,
  updateModelo,
} from "../controllers/ModeloController";

import {
  createVeiculo,
  deleteVeiculo,
  getVeiculo,
  getVeiculos,
  updateVeiculo,
} from "../controllers/VeiculoController";

const express = require("express");
const router = express.Router();

router.post("/createCategoria", createCategoria);
router.get("/getCategorias", getCategorias);
router.get("/getCategoria//:id", getCategoria);
router.put("/updateCategoria/:id", updateCategoria);
router.delete("/deleteCategoria/:id", deleteCategoria);

router.post("/createManutencao", createManutencao);
router.get("/getManutencoes", getManutencoes);
router.get("/getManutencao/:id", getManutencao);
router.put("/updateManutencao/:id", updateManutencao);
router.delete("/deleteManutencao/:id", deleteManutencao);

router.post("/createMarca", createMarca);
router.get("/getMarcas", getMarcas);
router.get("/getMarca/:id", getMarca);
router.get("/getCategoria//:id", getCategoria);
router.put("/updateMarca/:id", updateMarca);
router.delete("/deleteMarca/:id", deleteMarca);

router.post("/createModelo", createModelo);
router.get("/getModelos", getModelos);
router.get("/getModelo/:id", getModelo);
router.put("/updateModelo/:id", updateModelo);
router.delete("/deleteModelo/:id", deleteModelo);

router.post("/createVeiculo", createVeiculo);
router.get("/getVeiculos", getVeiculos);
router.get("/getVeiculo/:id", getVeiculo);
router.put("/updateVeiculo/:id", updateVeiculo);
router.delete("/deleteVeiculo/:id", deleteVeiculo);

export default router;
