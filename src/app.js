import  produtosRoute from "./route/produtos.routes.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Olá dev");
});

app.use("/produto", produtosRoute);

export default app;
