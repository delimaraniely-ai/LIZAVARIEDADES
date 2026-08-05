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
const avaliacao_produtos_has_produtosController = require("../controller/avaliacao_has_produtos_produtos_controller");

router.post("/", avaliacao_produtos_has_produtosController.cadastrar);

router.get("/", avaliacao_produtos_has_produtosController.listar);

router.get("/:id", avaliacao_produtos_has_produtosController.buscar);

router.put("/:id", avaliacao_produtos_has_produtosController.atualizar);

router.delete("/:id", avaliacao_produtos_has_produtosController.excluir);

module.exports = router;