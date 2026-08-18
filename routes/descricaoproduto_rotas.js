const express = require("express");

const router = express.Router();

const produtoController = require(
    "../controllers/produto_controller.js"
);


// ======================================================
// CADASTRAR PRODUTO
// POST /produtos
// ======================================================

router.post(
    "/produtos",
    produtoController.cadastrar
);


// ======================================================
// LISTAR PRODUTOS
// GET /produtos
// ======================================================

router.get(
    "/produtos",
    produtoController.listar
);


// ======================================================
// BUSCAR PRODUTO POR ID
// GET /produtos/:idProduto
// ======================================================

router.get(
    "/produtos/:idProduto",
    produtoController.buscarPorId
);


// ======================================================
// ATUALIZAR PRODUTO
// PUT /produtos/:idProduto
// ======================================================

router.put(
    "/produtos/:idProduto",
    produtoController.atualizar
);


// ======================================================
// EXCLUIR PRODUTO
// DELETE /produtos/:idProduto
// ======================================================

router.delete(
    "/produtos/:idProduto",
    produtoController.excluir
);


module.exports = router;