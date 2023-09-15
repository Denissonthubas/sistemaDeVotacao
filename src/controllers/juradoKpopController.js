import { juradoKpop } from "../models/index.js";

class juradoKpopController {
  static listaJuradosKpop = async(req,res,next)=>{
    try {
      const juradosKpopResultados = await juradoKpop.find().populate("categoria").exec();
      res.status(200).json(juradosKpopResultados);
    } catch (erro) {
      next(erro);      
    }
  };

  static cadastroJuradosKpop = async (req,res,next)=>{
    try {
      const novoJuradoKpop = new juradoKpop(req.body);
      await novoJuradoKpop.save();
      res.status(201).send(novoJuradoKpop.toJSON());
    } catch (erro) {
      next(erro); 
    }
  };

};

export default juradoKpopController;