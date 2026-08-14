// ======================================================
// IMPORTAR EXPRESS
// ======================================================

const express = require("express");


// ======================================================
// CRIAR ROUTER
// ======================================================

const router = express.Router();


// ======================================================
// IMPORTAR CONTROLLER
// ======================================================

const produtoController =
    require("../controllers/produto_controller.js");


// ======================================================
// CADASTRAR PRODUTO
// POST /produtos
// ======================================================

router.post(
    "/",
    produtoController.cadastrarProduto
);


// ======================================================
// LISTAR PRODUTOS
// GET /produtos
// ======================================================

router.get(
    "/",
    produtoController.listarProdutos
);


// ======================================================
// BUSCAR PRODUTO POR ID
// GET /produtos/:id
// ======================================================

router.get(
    "/:id",
    produtoController.buscarProdutoPorId
);


// ======================================================
// ATUALIZAR PRODUTO
// PUT /produtos/:id
// ======================================================

router.put(
    "/:id",
    produtoController.atualizarProduto
);


// ======================================================
// EXCLUIR PRODUTO
// DELETE /produtos/:id
// ======================================================

router.delete(
    "/:id",
    produtoController.excluirProduto
);


// ======================================================
// EXPORTAR
// ======================================================

module.exports = router;