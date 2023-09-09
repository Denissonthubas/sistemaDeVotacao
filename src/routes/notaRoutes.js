import express from "express";
import notaController from "../controllers/notaController.js";

const router = express.Router();

router
  .get("/nota", notaController.listaNotas)
  .get("/nota/relatorio", notaController.somaDasNotasDoParticipante)
  .post("/nota", notaController.cadastroNotas)
  .put("/nota/:id", notaController.atualizarNota)
  .delete("/nota/:id", notaController.deletarNota)

  export default router;