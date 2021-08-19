const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello");
});
app.get("/raul/:anos", (req, res) => {
  const anos = req.params.anos;
  return res.send(`Eu nasci a ${anos} anos atrás`);
});
app.get("/viagem/:cidade?", (req, res) => {
  const cidade = req.params.cidade;
  if (cidade) {
    return res.send(`Eu viajei para ${cidade}`);
  }
  return res.send(`Eu não viajei para nenhum canto`);
});

app.get("/lanche/:bebida/:comida?", (req, res) => {
  const bebida = req.params.bebida;
  const comida = req.params.comida;
  if (comida) {
    return res.send(`Eu tomei ${bebida} e comi ${comida}`);
  }
  return res.send(`Eu tomei ${bebida} `);
});
app.get("/:nickname", (req, res) => {
  const nickname = req.params.nickname;
  return res.send(`Acessar ${nickname} `);
});

app.listen(port, () => {
  console.log("Servidor rodando");
});
