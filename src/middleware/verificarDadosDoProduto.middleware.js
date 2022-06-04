const verificarDadosDoProdutoMiddleware = (req, res, next) => {
  const { nome, descricao, foto } = req.body;

  if (!nome || !descricao || !foto) {
    return res.status(422).send("Dados imcompletos");
  }
  next();
};

export default verificarDadosDoProdutoMiddleware;
