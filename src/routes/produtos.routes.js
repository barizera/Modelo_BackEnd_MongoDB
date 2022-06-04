import { Router } from "express";
import ProdutosControllers from "../controller/produtos.controller.js";
import verificarDadosDoProdutoMiddleware from "../middleware/verificarDadosDoProduto.middleware.js";
import verificarIdDoProdutomiddleware from "../middleware/verificarIdDoProduto.middleware.js";

//a exportação por export const route, não funcionou. procurar com o professor se existe algo sobre isso na quinta.Ai importei por export default ao final do código mesmo.
const route = Router();
const produtosControllers = new ProdutosControllers();
//mesmo o listarTodosProdutos sendo function, não podemos utilizar os () ao fim dela.
route.get("/todos-produtos", produtosControllers.listarTodosProdutos);
route.get(
  "/produto/:id",
  verificarIdDoProdutomiddleware,
  produtosControllers.listarProdutoPorId
);
route.post(
  "/criar-produto",
  verificarDadosDoProdutoMiddleware,
  produtosControllers.criarNovoProduto
);
route.put(
  "/atualizar-produto/:id",
  verificarIdDoProdutomiddleware,
  produtosControllers.atualizarProduto
);
route.delete(
  "/deletar-produto/:id",
  verificarIdDoProdutomiddleware,
  produtosControllers.excluirProduto
);

export default route;
