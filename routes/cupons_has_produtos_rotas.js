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
const cupons_has_produtoscontroller = require("../controller/cupons_has_produto_controller.js");

router.post("/", cupons_has_produtoscontroller.cadastrar);

router.get("/", cupons_has_produtoscontroller.listar);

router.get("/:id", cupons_has_produtoscontroller.buscarPorId);

router.put("/:id", cupons_has_produtoscontroller.atualizar);

router.delete("/:id", cupons_has_produtoscontroller.excluir);

module.exports = router;