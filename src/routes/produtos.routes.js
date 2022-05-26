import { Router } from "express";
import ProdutosControllers from "../controller/produtos.controller.js";

//a exportação por export const route, não funcionou. procurar com o professor se existe algo sobre isso na quinta.Ai importei por export default ao final do código mesmo.
const route = Router();
const produtosControllers = new ProdutosControllers();
//mesmo o listarTodosProdutos sendo function, não podemos utilizar os () ao fim dela.
route.get("/get-all", produtosControllers.listarTodosProdutos);
route.get("/get-by-id/:id", produtosControllers.listarProdutoPorId);
route.post("/create", produtosControllers.criarNovoProduto);
route.put("/update/:id", produtosControllers.atualizarProduto);
route.delete("/delete/:id", produtosControllers.excluirProduto);

export default route;
