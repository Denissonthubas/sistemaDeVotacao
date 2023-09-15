import mongoose from "mongoose";

const categoriaKpopSchema = mongoose.Schema(
  {
    id:{type:String},
    nomeCategoria:{
      type: String,
      required:[true, "Nome da categoria é obrigatorio"]
    }
  }
);

const categoriaKpop = mongoose.model("categoriaKpop", categoriaKpopSchema);

export default categoriaKpop;