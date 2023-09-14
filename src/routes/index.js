import express from "express";
import categoria from "./categoriaRoutes.js";
import jurado from "./juradoRoutes.js";
import participante from "./participanteRoutes.js";
import nota from "./notaRoutes.js";


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


   
  );


export default router;