import express from "express"
import participanteKpopController from "../controllers/participanteKpopController.js"

const router = express.Router();

router
  .get("/participanteKpop", participanteKpopController.listaParticipantesKpop)
  .post("/participanteKpop", participanteKpopController.cadastroParticipantesKpop)


  export default router;