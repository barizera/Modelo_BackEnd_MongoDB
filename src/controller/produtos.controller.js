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

  //create
  //no create, precisamos passar os dados que vieram da req, para guardar na variável que vamos criar para fazer o create.
  async criarNovoProduto(req, res) {
    const { nome, descricao, foto } = req.body;
    //variavel que vai guardar os dados para enviar o novo produto através do service.funçãoDeCriarProduto
    const novoProduto = await produtosServices.criarNovoProduto({
      nome,
      descricao,
      foto,
    });

    res.status(201).send(novoProduto);
  }
  //Update - quase mesma idéia do create, porém no update, a gente tem que criar a variável para ler o id, e passar no produto atualizado
  async atualizarProduto(req, res) {
    // desconstruindo o objeto para buscar as requisições do body, semprecisar criar 3 querys.
    const { nome, descricao, foto } = req.body;
    // recebendo o id para poder acessar onde vamos atualizar.
    const id = req.params.id;
    // criando o objeto que vai receber os dados que vieram do req.body.
    const produtoAtualizado = await produtosServices.atualizarProduto({
      nome,
      descricao,
      foto,
      id,
    });

    res.send(produtoAtualizado);
  }

  //delete - pegar o id, e depois utilizar na function de deletar do service
  async excluirProduto(req, res) {
    const idDeletar = req.params.id;

    const produto = await produtosServices.excluirProduto(idDeletar);
    res.status(200).send("Produto deletado com sucesso!");
  }
}

export default ProdutosControllers;
