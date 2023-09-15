import NaoEncontrado from "../erros/NaoEncontrado.js"
import { nota } from "../models/index.js";
import mongoose from "mongoose";

class notaController {
  static listaNotas = async(req,res,next)=>{
    try {
      const notasResultados = await nota.find().populate("participante").exec();
      res.status(200).json(notasResultados);
    } catch (erro) {
      next(erro);     
    }
  };

  static cadastroNotas = async (req,res,next)=>{
    try {
      const novoNota = new nota(req.body);
      await novoNota.save();
      res.status(201).send(novoNota.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarNota = async (req,res,next)=>{
    try {
      const id = req.params.id
      const notaResultado = await nota.findOneAndUpdate({_id: id}, req.body);
      if(notaResultado !== null){
        res.status(200).send({message:"Nota atualizada com sucesso!"});
      }else{
        next(new NaoEncontrado("Id da nota não localizado"))
      }
    } catch (erro) {
      next(erro);
    }
  };

  static deletarNota = async (req,res,next)=>{
    try {
      const id = req.params.id
      const notaResultado = await notaKpop.findOneAndDelete({_id: id})

      if(notaResultado !== null){
        res.status(200).send({message:"Nota deletada!"});
      }else{
        next(new NaoEncontrado("Id da nota não localizado"))
      }
    } catch (erro) {
      next(erro);
    }
  }

  static somaDasNotasDoParticipante = async (req,res,next)=>{
    try {

      const categoriaSelecionada = req.params.categoria;
      const categoriaObjectId = new mongoose.Types.ObjectId(categoriaSelecionada);
      const somaDasNotas = await nota.aggregate([
        {$lookup:{
          from: "participantes",
          localField: "participante",
          foreignField: "_id",
          as:"nomeParticipante"
         },
        },
        {$lookup:{
          from: "categorias",
          localField: "categoria",
          foreignField: "_id",
          as:"nomeCategoria"
         }
        },
        {
          $unwind: "$nomeParticipante"
        },

        {  $unwind: "$nomeCategoria"
        },

        {
          $match: {
            "nomeCategoria._id": categoriaObjectId,
          },
        },

        {$group:{
          _id:{Nome:"$nomeParticipante.nome",Personagem: "$nomeParticipante.personagem", Categoria:"$nomeCategoria.nomeCategoria"},
          totalNota: {$sum: "$notaJurado"}
         }
        },

        {
          $project: {
            _id: 0,
            Nome: "$_id.Nome",
            Categoria: "$_id.Categoria",
            Personagem: "$_id.Personagem",
            totalNota: 1,
          },
        },
        {
          $sort: { totalNota: -1 }, 
        },
      ])
      res.status(200).json(somaDasNotas)
    } catch (erro) {
      console.log(erro)
      next(erro);
    }
  }
};

export default notaController;