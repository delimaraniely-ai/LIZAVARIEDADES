// nesse arquivo, definimos as rotas relacionadas aos clientes e associamos cada rota a uma função do ClienteController. As rotas são:
// POST /clientes: para cadastrar um novo cliente.
// GET /clientes: para listar todos os clientes.
// GET /clientes/:id: para buscar um cliente específico pelo ID.
// PUT /clientes/:id: para atualizar as informações de um cliente específico pelo ID.
// DELETE /clientes/:id: para excluir um cliente específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos clientes.
const produto_has_coresController = require("../controller/produto_has_corescontroller.js");

router.post("/", produto_has_coresController.cadastrar);

router.get("/", produto_has_coresController.listar);

router.get("/:id", produto_has_coresController.buscarPorId);

router.put("/:id", produto_has_coresController.atualizar);

router.delete("/:id", produto_has_coresController.excluir);

module.exports = router;