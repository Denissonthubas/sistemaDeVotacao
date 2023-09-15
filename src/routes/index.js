import express from "express";
import categoria from "./categoriaRoutes.js";
import jurado from "./juradoRoutes.js";
import participante from "./participanteRoutes.js";
import nota from "./notaRoutes.js";
import categoriaKpop from "./categoriaKpopRoutes.js"
import participanteKpop from "./participanteKpopRoutes.js"
import juradoKpop from "./juradoKpopRoutes.js"
import notaKpop from "./notaKpopRoutes.js"

const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).send({titulo: "Geek fest"});
  });

  router.use(
    express.json(),
    categoria,
    jurado,
    participante,
    nota,
    categoriaKpop,
    participanteKpop,
    juradoKpop,
    notaKpop
   
  );


export default router;