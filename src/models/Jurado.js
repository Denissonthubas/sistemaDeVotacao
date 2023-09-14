import mongoose from "mongoose";

const juradoSchema = mongoose.Schema(
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
    // categoria:{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "categoria",
    //   required: [true, "A categoria é obrigatória"]
    // }
  }
);

const jurado = mongoose.model("jurado", juradoSchema);

export default jurado;