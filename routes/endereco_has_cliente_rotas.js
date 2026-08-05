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
const endereco_has_clienteController = require("../controller/endereco_has_clientecontroller.js");

router.post("/", endereco_has_clienteController.cadastrar);

router.get("/", endereco_has_clienteController.listar);

router.get("/:id", endereco_has_clienteController.buscarPorId);

router.put("/:id", endereco_has_clienteController.atualizar);

router.delete("/:id", endereco_has_clienteController.excluir);

module.exports = router;