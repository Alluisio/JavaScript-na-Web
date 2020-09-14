const customExpress = require("./config/custom-express");
const Tabelas = require("./infraestrutura/database/tabelas");

const app = customExpress();
Tabelas.init();

app.listen(7070, () => {
  console.log("Servidor rodando na porta 7070");
});
