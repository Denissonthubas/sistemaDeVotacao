import mongoose from "mongoose";

const participanteSchema = mongoose.Schema(
  {
    id: {
      type: String
    },
    nome:{
      type: String,
      require:[true, "Nome do(a) paticipante é obrigatorio"]
    },
    personagem: {
      type: String,
      require:[true, "Nome do(a) personagem é obrigatorio"]
    },
    telefone: {
      type: Number
    },
    cpf:{
      type: Number
    },
    categoria:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoria",
      required: [true, "A categoria é obrigatória"]
    }

  }
);

const participante = mongoose.model("participante", participanteSchema);

export default participante;