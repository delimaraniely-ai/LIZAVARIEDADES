const express = require("express");

const router = express.Router();

const imagemProdutosController =
    require("../controller/imagem_produto_controller.js");

const upload =
    require("../config/upload.js");


//==========================================
// CADASTRAR IMAGEM
//==========================================

router.post(
    "/imagem-produto",
    upload.single("imagem"),
    imagemProdutosController.cadastrar
);


module.exports = router;