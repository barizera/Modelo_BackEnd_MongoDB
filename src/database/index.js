//começar importando o mongoose
import mongoose from "mongoose";

//é o que puxa o acesso ao database. NÃO PODE ESQUECER!!!!
const { connect } = mongoose;

//LEMBRAR DE EXPORTAR PARA PODER UTILIZAR NO SERVER.JS
export const conectarAoDatabase = () => {
  connect("mongodb://localhost:27017/produtos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("MONGO DB CONECTADO");
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
};
