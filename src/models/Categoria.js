import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema(
  {
    id:{type: String},
    nomeCategoria: {
      type: String,
      required:[true,"Nome da categoria é obrigatorio"]
    }
  }
);

const categoria = mongoose.model("categoria",categoriaSchema);

export default categoria;