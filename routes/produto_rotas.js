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
const produtoController = require("../controller/produto_controller.js");

router.post("/", produtoController.cadastrar);

router.get("/", produtoController.listar);

router.get("/:id", produtoController.buscarPorId);

router.put("/:id", produtoController.atualizar);

router.delete("/:id", produtoController.excluir);

module.exports = router;