import express  from "express";
import categoriaController from "../controllers/categoriaController.js"

const router = express.Router();

router
  .get("/categoria", categoriaController.listaCategoria)
  .post("/categoria", categoriaController.cadastroCategoria)
  .put("/categoria/:id", categoriaController.atualizarCategotia)
  .delete("/categoria/:id", categoriaController.deletarCategotia)

  export default router;

