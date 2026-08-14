const express = require("express");

const router = express.Router();

const favoritoController =
    require("../controllers/favorito_controller.js");


// ======================================================
// CADASTRAR FAVORITO
// ======================================================

router.post(
    "/favoritos",
    favoritoController.cadastrar
);


// ======================================================
// LISTAR FAVORITOS DO CLIENTE
// ======================================================

router.get(
    "/favoritos/cliente/:idCliente",
    favoritoController.listarPorCliente
);


// ======================================================
// VERIFICAR SE PRODUTO É FAVORITO
// ======================================================

router.get(
    "/favoritos/cliente/:idCliente/produto/:idProduto",
    favoritoController.verificar
);


// ======================================================
// REMOVER FAVORITO
// ======================================================

router.delete(
    "/favoritos/cliente/:idCliente/produto/:idProduto",
    favoritoController.excluir
);


// ======================================================
// EXPORTAR
// ======================================================

module.exports = router;