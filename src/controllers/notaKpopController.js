import { notaKpop } from "../models/index.js";
import mongoose from "mongoose";

class notaKpopController {
  static listaNotasKpop = async(req,res,next)=>{
    try {
      const notasKpopResultados = await notaKpop.find().populate("participante").exec();
      res.status(200).json(notasKpopResultados);
    } catch (erro) {
      next(erro);     
    }
  };

  static cadastroNotasKpop = async (req,res,next)=>{
    try {
      const novoNotaKpop = new notaKpop(req.body);

      await novoNotaKpop.save();
      res.status(201).send(novoNotaKpop.toJSON());
    } catch (erro) {
      
      next(erro);
    }
  };

  static somaDasNotasKpopDoParticipanteKpop = async (req,res,next)=>{
    try {
      console.log("Início da função somaDasNotasKpopDoParticipanteKpop");
      const categoriaKpopSelecionada = req.params.categoriaKpop;
      const categoriaKpopObjectId = new mongoose.Types.ObjectId(categoriaKpopSelecionada);
      console.log("Categoria Kpop ObjectId:", categoriaKpopObjectId);
      const somaDasNotasKpop = await notaKpop.aggregate([
        {$lookup:{
          from: "participantekpops",
          localField: "participante",
          foreignField: "_id",
          as:"nomeParticipante"
         },
        },
        {$lookup:{
          from: "categoriakpops",
          localField: "categoria",
          foreignField: "_id",
          as:"nomeCategoria"
         }
         
        },
        
        {
          $unwind: "$nomeParticipante",
        },

        {  $unwind: "$nomeCategoria"
        },

        {
          $match: {
            "nomeCategoria._id": categoriaKpopObjectId,
          },
        },

        {$group:{
          _id:{Nome:"$nomeParticipante.nome",
          Personagem: "$nomeParticipante.personagem", 
          Categoria:"$nomeCategoria.nomeCategoria"},
          FaseVotacao: { $first: "$nomeParticipante.faseVotacao" },
          totalNota: {$sum: "$notaJurado"}
         }
        },

        {
          $project: {
            _id: 0,
            Nome: "$_id.Nome",
            Categoria: "$_id.Categoria",
            Personagem: "$_id.Personagem",
            FaseVotacao: 1,
            totalNota: 1,
          },
        },
        {
          $sort: { totalNota: -1 }, 
        },
      ]);
      console.log("Soma das Notas Kpop:", somaDasNotasKpop);
      res.status(200).json(somaDasNotasKpop)
    } catch (erro) {
      console.error("Erro em somaDasNotasKpopDoParticipanteKpop:", erro);
      next(erro);
    }
  }

};


export default notaKpopController;