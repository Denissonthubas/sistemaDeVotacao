import express  from "express";
import categoriaKpopController from "../controllers/categoriaKpopController.js";


const router = express.Router();

router
  .get("/categoriaKpop",categoriaKpopController.listaCategoriaKpop)
  .post("/categoriaKpop", categoriaKpopController.cadastrocategoriaKpop)



  export default router;