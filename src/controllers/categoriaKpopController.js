import { categoriaKpop } from "../models/index.js";


class categoriaKpopController {

  static listaCategoriaKpop = async(req,res,next)=>{
    try {
      const categoriaKpopResultados = await categoriaKpop.find();
      res.status(200).json(categoriaKpopResultados);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrocategoriaKpop = async (req,res,next)=>{
    try {

      const novaCategoriaKpop = new categoriaKpop(req.body);
      await novaCategoriaKpop.save();
      res.status(201).send(novaCategoriaKpop.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

};

export default categoriaKpopController;