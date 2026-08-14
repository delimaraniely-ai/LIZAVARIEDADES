const express = require("express");

const router = express.Router();

const produtoController =
    require("../controllers/produto_controller.js");


// ======================================================
// CADASTRAR
// ======================================================

router.post(
    "/produtos",
    produtoController.cadastrar
);


// ======================================================
// LISTAR
// ======================================================

router.get(
    "/produtos",
    produtoController.listar
);


// ======================================================
// BUSCAR POR ID
// ======================================================

router.get(
    "/produtos/:idProduto",
    produtoController.buscarPorId
);


// ======================================================
// ATUALIZAR
// ======================================================

router.put(
    "/produtos/:idProduto",
    produtoController.atualizar
);


// ======================================================
// EXCLUIR
// ======================================================

router.delete(
    "/produtos/:idProduto",
    produtoController.excluir
);


module.exports = router;