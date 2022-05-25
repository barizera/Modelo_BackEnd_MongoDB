import { Router } from "express";
import ProdutosControllers from "../controller/produtos.controller.js";

//a exportação por export const route, não funcionou. procurar com o professor se existe algo sobre isso na quinta.Ai importei por export default ao final do código mesmo.
const route = Router();
const produtosControllers = new ProdutosControllers();

route.get("/getAll", produtosControllers.listarTodosProdutos());
route.get("/getById", produtosControllers.listarProdutoPorId());
route.post("/create", produtosControllers.criarNovoProduto());
// route.put("");

export default route;
