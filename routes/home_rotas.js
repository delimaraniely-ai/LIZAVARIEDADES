const express = require("express");

const router =
    express.Router();

const produtoController =
    require("../controllers/produto_controller.js");


// ======================================================
// LISTAR TODOS
// GET /produtos
// ======================================================

router.get(
    "/produtos",
    produtoController.listar
);


// ======================================================
// BUSCAR POR ID
// GET /produtos/:id
// ======================================================

router.get(
    "/produtos/:id",
    produtoController.buscarPorId
);


// ======================================================
// CADASTRAR
// POST /produtos
// ======================================================

router.post(
    "/produtos",
    produtoController.cadastrar
);


// ======================================================
// ATUALIZAR
// PUT /produtos/:id
// ======================================================

router.put(
    "/produtos/:id",
    produtoController.atualizar
);


// ======================================================
// EXCLUIR
// DELETE /produtos/:id
// ======================================================

router.delete(
    "/produtos/:id",
    produtoController.excluir
);


module.exports = router;