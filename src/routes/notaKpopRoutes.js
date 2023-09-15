import express from "express";
import notaKpopController from "../controllers/notaKpopController.js";

const router = express.Router();

router
  .get("/notaKpop", notaKpopController.listaNotasKpop)
  .get("/notaKpop/relatorioKpop/:categoriaKpop", notaKpopController.somaDasNotasKpopDoParticipanteKpop)
  .post("/notaKpop", notaKpopController.cadastroNotasKpop)

  export default router