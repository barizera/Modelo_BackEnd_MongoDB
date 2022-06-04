import Produtos from "../model/produtos.model.js";

class ProdutosServices {
  async listarTodosProdutos() {
    const produtos = await Produtos.find();

    return produtos;
  }

  async listarProdutosPorId({ id }) {
    const protudoSelecionado = await Produtos.findById(id);

    return protudoSelecionado;
  }

  async criarNovoProduto({ nome, descricao, foto }) {
    const novoProduto = {
      nome,
      descricao,
      foto,
    };

    const produto = await Produtos.create(novoProduto);
    return produto;
  }
  // async por ser assíncrona, os parâmetros dentro de {} para poder receber em qualquer ordem os dados.
  async atualizarProduto({ nome, descricao, foto, id }) {
    //passamos o id, porque vamos precisar dele no updateOne e no findById.
    // criar uma variável para poder guardar os dados novos.
    const produtoAtualizado = {
      nome,
      descricao,
      foto,
      id, //ficar de olho na aula para ver se precisa passar esse ID no atualizar.
    };

    // updateOne passando 2 parâmetros, o primeiro é o localizador, o segundo é o que vai ser atualizado dentro do objeto encontrado pelo primeiro parâmetro.
    await Produtos.updateOne({ _id: id }, produtoAtualizado);
    //Após a atualização, chamamos o produto novo pelo findById e retornamos ele.
    const produto = await Produtos.findById(id);

    return produto;
  }

  async excluirProduto({ id }) {
    //buscar e deletar o produto pelo id passado.
    const produto = await Produtos.findByIdAndDelete(id);
    return produto;
  }
}

export default ProdutosServices;
