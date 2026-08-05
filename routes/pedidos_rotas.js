const express = require("express");
const router = express.Router();


const controller = require("../controller/pedidos_controler");



// listar pedidos

router.get("/",
    controller.listar);


// buscar pedido

router.get("/:id",
    controller.buscarPorId);





// cadastrar pedido

router.post("/",
    controller.cadastrar);


// atualizar pedido

router.put("/:id",
    controller.atualizar);


// excluir

router.delete("/:id",
    controller.excluir);



module.exports = router;