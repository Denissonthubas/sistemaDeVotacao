import NaoEncontrado from "../erros/NaoEncontrado.js";
import { participante } from "../models/index.js";

class participanteController {
  static listaParticipantes = async(req,res,next)=>{
    try {
      const participantesResultados = await participante.find().sort({ nome: 1 });
      res.status(200).json(participantesResultados);
    } catch (erro) {
      next(erro);      
    }
  };

  static cadastroParticipantes = async (req,res,next)=>{
    try {
      const novoParticipante = new participante(req.body);
      await novoParticipante.save();
      res.status(201).send(novoParticipante.toJSON());
    } catch (erro) {
      next(erro); 
    }
  };

  static atualizarParticipante = async (req,res,next)=>{
    try {
      const id = req.params.id
      const participanteResultado = await participante.findOneAndUpdate({_id: id}, req.body);
      if(participanteResultado !== null){
        res.status(200).send("Participante atualizado com sucesso!");
      }else{
        next(new NaoEncontrado("Id do participante não localizado"))
      }
    } catch (erro) {
      next(erro); 
    }
  };

  static deletarParticipante = async (req,res,next)=>{
    try {
      const id = req.params.id
      const participanteResultado = await participante.findOneAndDelete({_id: id})

      if(participanteResultado !== null){
        res.status(200).send("Participante deletado!");
      }else{
        next(new NaoEncontrado("Id do participante não localizado"))
      }
    } catch (erro) {
      next(erro);
    }
  }
};

export default participanteController;