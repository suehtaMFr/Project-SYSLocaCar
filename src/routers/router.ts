import {
  createCategoria,
  deleteCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
} from "../controllers/CategoriaController";

const express = require("express");
const router = express.Router();

router.post("/createCategoria", createCategoria);
router.get("/getCategorias", getCategorias);
router.get("/getCategoria:id", getCategoria);
router.put("/updateCategoria:id", updateCategoria);
router.delete("/deleteCategoria:id", deleteCategoria);

export default router;
