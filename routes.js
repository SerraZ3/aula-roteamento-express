const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello");
});

routes.get("/raul/:anos", (req, res) => {
  /**Também pode ser feito da seguinte forma:
   *
   * const anos = req.params.anos;
   *
   * Mas assim, poupamos alguns caracteres de código
   */
  const { anos } = req.params;

  return res.send(`Eu nasci a ${anos} anos atrás`);
});

routes.get("/viagem/:cidade?", (req, res) => {
  const { cidade } = req.params;

  if (cidade) {
    return res.send(`Eu viajei para ${cidade}`);
  }

  return res.send(`Eu não viajei para nenhum canto`);
});

routes.get("/lanche/:bebida/:comida?", (req, res) => {
  const { bebida, comida } = req.params;

  if (comida) {
    return res.send(`Eu tomei ${bebida} e comi ${comida}`);
  }

  return res.send(`Eu tomei ${bebida} `);
});

routes.get("/:nickname", (req, res) => {
  const { nickname } = req.params;

  return res.send(`Acessar ${nickname} `);
});

module.exports = routes;
