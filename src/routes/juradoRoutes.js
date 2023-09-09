import express from "express";
import juradoController from "../controllers/juradoController.js";

const router = express.Router();

router 
  .get("/jurado", juradoController.listaJurados)
  .post("/jurado", juradoController.cadastroJurados)
  .put("/jurado/:id", juradoController.atualizarJurado)
  .delete("/jurado/:id", juradoController.deletarJurado)

  export default router;