import express from "express";
import participanteController from "../controllers/participanteController.js";

const router = express.Router();

router 
  .get("/participante", participanteController.listaParticipantes)
  .post("/participante", participanteController.cadastroParticipantes)
  .put("/participante/:id", participanteController.atualizarParticipante)
  .delete("/participante/:id", participanteController.deletarParticipante)

  export default router;