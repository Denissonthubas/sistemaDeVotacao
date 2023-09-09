import NaoEncontrado from "../erros/NaoEncontrado.js";
import { jurado } from "../models/index.js";

class juradoController {
  static listaJurados = async(req,res,next)=>{
    try {
      const juradosResultados = await jurado.find().populate("categoria").exec();
      res.status(200).json(juradosResultados);
    } catch (erro) {
      next(erro);      
    }
  };

  static cadastroJurados = async (req,res,next)=>{
    try {
      const novoJurado = new jurado(req.body);
      await novoJurado.save();
      res.status(201).send(novoJurado.toJSON());
    } catch (erro) {
      next(erro); 
    }
  };

  static atualizarJurado = async (req,res,next)=>{
    try {
      const id = req.params.id
      const juradoResultado = await jurado.findOneAndUpdate({_id: id}, req.body);
      if(juradoResultado !== null){
        res.status(200).send("Jurado atualizado com sucesso!");
      }else{
        next(new NaoEncontrado("Id do jurado não localizado"))
      }
    } catch (erro) {
      next(erro);
    }
  };

  static deletarJurado = async (req,res,next)=>{
    try {
      const id = req.params.id
      const juradoResultado = await jurado.findOneAndDelete({_id: id})

      if(juradoResultado !== null){
        res.status(200).send("Jurado atualizado com sucesso!");
      }else{
        next(new NaoEncontrado("Id do jurado não localizado"))
      }
    } catch (erro) {
      next(erro);
    }
  }
};

export default juradoController;