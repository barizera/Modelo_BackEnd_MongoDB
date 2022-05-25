import  produtosRoute from "./routes/produtos.routes.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Olá dev");
});

app.use("/produtos", produtosRoute);

export default app;
