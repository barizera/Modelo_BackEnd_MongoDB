import Produtos from "../model/produtos.model.js";

import mongoose from "mongoose";

const verificarIdDoProdutomiddleware = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: "ID inválido!" });
  }

  const produto = await Produtos.findById(id);

  if (!produto) {
    return res.status(404).send("Produto não encontrado.");
  }

  next();
};

export default verificarIdDoProdutomiddleware;
