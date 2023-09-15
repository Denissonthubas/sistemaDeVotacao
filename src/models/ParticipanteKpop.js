import mongoose from "mongoose";

const participanteKpopSchema = mongoose.Schema(
  {
    id: {
      type: String
    },
    nome:{
      type: String,
      require:[true, "Nome do(a) paticipante é obrigatorio"]
    },
    telefone: {
      type: Number
    },
    cpf:{
      type: Number
    },
    categoria:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoriaKpop",
      required: [true, "A categoria é obrigatória"]
    },
    faseVotacao:{
      type: Number
    }

  }
);

const participanteKpop = mongoose.model("participanteKpop", participanteKpopSchema);

export default participanteKpop;