const express = require("express");

const router = express.Router();


// ======================================================
// IMPORTAR CONTROLLER
// ======================================================

const enderecoController = require("../controllers/endereco_controller.js");


// ======================================================
// CADASTRAR
// POST /enderecos
// ======================================================

router.post(
    "/",
    enderecoController.cadastrarEndereco
);


// ======================================================
// LISTAR
// GET /enderecos
// ======================================================

router.get(
    "/",
    enderecoController.listarEnderecos
);


// ======================================================
// BUSCAR POR ID
// GET /enderecos/1
// ======================================================

router.get(
    "/:id",
    enderecoController.buscarEnderecoPorId
);


// ======================================================
// ATUALIZAR
// PUT /enderecos/1
// ======================================================

router.put(
    "/:id",
    enderecoController.atualizarEndereco
);


// ======================================================
// EXCLUIR
// DELETE /enderecos/1
// ======================================================

router.delete(
    "/:id",
    enderecoController.excluirEndereco
);


// ======================================================
// EXPORTAR
// ======================================================

module.exports = router;