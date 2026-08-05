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
const imagem_produtoController = require("../controller/imagem_produto_controller.js");

router.post("/", imagem_produtoController.cadastrar);

router.get("/", imagem_produtoController.listar);

router.get("/:id", imagem_produtoController.buscarPorId);

router.put("/:id", imagem_produtoController.atualizar);

router.delete("/:id", imagem_produtoController.excluir);

module.exports = router;