import mongoose from "mongoose";

const juradoKpopSchema = mongoose.Schema(
  {
    id:{
      type: String
    },
    nomeJurado: {
      type: String,
      required: [true, "Nome do Jurado(a) é obrigatorio"]
    },
    email:{
      type: String
    },
    categoria:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoria",
      required: [true, "A categoria é obrigatória"]
    }
  }
);

const juradoKpop = mongoose.model("juradoKpop", juradoKpopSchema);

export default juradoKpop;