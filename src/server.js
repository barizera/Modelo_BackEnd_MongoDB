import app from "./app.js";
import { conectarAoDatabase } from "./database/index.js";

const port = 3001;

app.listen(port, () => {
  conectarAoDatabase();
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
