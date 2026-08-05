const express = require("express");
const router = express.Router();


const controller = require("../controller/carrinho_controller.js");



// listar

router.get("/",
    controller.listar);


// carrinho do cliente

router.get("/cliente/:idCliente",
    controller.buscarPorId);


// adicionar produto

router.post("/",
    controller.cadastrar);


// atualizar quantidade

router.put("/:id",
    controller.atualizar);


// remover produto

router.delete("/:id",
    controller.excluir);



module.exports = router;