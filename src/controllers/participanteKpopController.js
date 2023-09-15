import { participanteKpop } from "../models/index.js";

class participanteKpopController {
  static listaParticipantesKpop = async(req,res,next)=>{
    try {
      const participantesKpopResultados = await participanteKpop.find().sort({ nome: 1 });
      res.status(200).json(participantesKpopResultados);
    } catch (erro) {
      next(erro);      
    }
  };

  static cadastroParticipantesKpop = async (req,res,next)=>{
    try {
      const novoParticipanteKpop = new participanteKpop(req.body);
      await novoParticipanteKpop.save();
      res.status(201).send(novoParticipanteKpop.toJSON());
    } catch (erro) {
      next(erro); 
    }
  };
};

export default participanteKpopController;