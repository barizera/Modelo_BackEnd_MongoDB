import ProdutosServices from "../service/produtos.service.js";

const produtosServices = new ProdutosServices();

class ProdutosControllers {
  //getAll
  async listarTodosProdutos(req, res) {
    try {
      const todosProdutos = await produtosServices.listarTodosProdutos();
      res.send(todosProdutos);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  //getById
  async listarProdutoPorId(req, res) {
    //criar a variável do id, atravez da req recebida.
    const id = req.params.id;
    // criar variável do produtoSelecionado recebendo o service.function  lá no service e passando o id como parâmetro.
    const produtoSelecionado = await produtosServices.listarProdutosPorId({
      id,
    });
    //enviar o produtoSelecionado, variável que acabamos de colocar acima.
    res.send(produtoSelecionado);
  }

  async criarNovoProduto(req, res) {
    const { nome, descricao, foto } = req.body;

    try {
      const novoProduto = await produtosServices.criarNovoProduto({
        nome,
        descricao,
        foto,
      });
      res.status(201).send(novoProduto);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send("Empreendimento já cadastrado.");
      }
    }
  }

  async atualizarProduto(req, res) {
    const { nome, descricao, foto } = req.body;

    const id = req.params.id;

    try {
      const produtoAtualizado = await produtosServices.atualizarProduto({
        nome,
        descricao,
        foto,
        id,
      });

      res.send(produtoAtualizado);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send("Empreendimento já cadastrado.");
      }
    }
  }

  
  async excluirProduto(req, res) {
    const id = req.params.id;

    const produto = await produtosServices.excluirProduto({ id });

    res.status(200).send(produto);
  }
}

export default ProdutosControllers;
