import express from "express"
import juradoKpopController from "../controllers/juradoKpopController.js"

const router = express.Router();

router
  .get("/juradoKpop", juradoKpopController.listaJuradosKpop)
  .post("/juradoKpop", juradoKpopController.cadastroJuradosKpop)

  export default router;

