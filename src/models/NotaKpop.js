import mongoose from "mongoose";

const notaKpopSchema = mongoose.Schema(
  {
    id:{
      type: String
    },
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "participanteKpop",
      required: [true,"A categoria é obrigatória"]
    },
    participante:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"participanteKpop",
      required: [true,"O participante é obrigatório"]
    },
    jurado:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "juradoKpop",
      required: [true,"O jurado é obrigatório"]
    },
    notaJurado: {
      type: Number,
      required: [true, ,"A nota é obrigatória"],
      min:[0,"Nota deve está entre 0 e 10. Valor fornecido: {VALUE} "],
      max:[10, "Nota deve está entre 0 e 10. Valor fornecido: {VALUE}"]
    },
    faseVotacao:{
      type: Number,
    }
    
  }
);

const notaKpop = mongoose.model("notaKpop", notaKpopSchema);

export default notaKpop;