import NaoEncontrado from "../erros/NaoEncontrado.js";
import{categoria} from "../models/index.js"

class categoriaController{
  static listaCategoria = async(req,res,next)=>{
    try {
      const categoriaResultados = await categoria.find();
      res.status(200).json(categoriaResultados);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastroCategoria = async (req,res,next)=>{
    try {

      const novaCategoria = new categoria(req.body);
      await novaCategoria.save();
      res.status(201).send(novaCategoria.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarCategotia = async (req, res, next) =>{
    try {
      const id = req.params.id;
      const categoriaResultado = await categoria.findOneAndUpdate({_id: id}, req.body);
      if(categoriaResultado !== null){
        res.status(200).send("Categoria atualizado com sucesso!");
      }else{
        next(new NaoEncontrado("Id da categoria não encontrada"))
      }
    } catch (erro) {
      next(erro);
    }
    
  };

  static deletarCategotia = async (req, res, next) =>{
    try {
      const id = req.params.id;
      const categoriaResultado = await categoria.findOneAndDelete({_id: id});
      if(categoriaResultado !== null){
        res.status(200).send("Categoria deletada!");
      }else{
        next(new NaoEncontrado("Id da categoria não encontrada"))
      }
    } catch (erro) {
      next(erro);
    }
    
  };
};

export default categoriaController;