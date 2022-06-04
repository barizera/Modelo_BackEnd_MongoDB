import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProdutosSchema = new Schema(
  {
    nome: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
  },
  { versionKey: false }
);

const Produtos = model("produtoscollection", ProdutosSchema);

export default Produtos;
