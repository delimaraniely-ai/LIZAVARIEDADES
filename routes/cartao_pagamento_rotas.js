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
const Cartao_pagamentoController = require("../controller/carato_pagamento_controller.js");

router.post("/", Cartao_pagamentoController.cadastrar);

router.get("/", Cartao_pagamentoController.listar);

router.get("/:id", Cartao_pagamentoController.buscarPorId);

router.put("/:id", Cartao_pagamentoController.atualizar);

router.delete("/:id", Cartao_pagamentoController.excluir);

module.exports = router;