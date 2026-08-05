const express = require("express");
const router = express.Router();


const controller = require("../controller/avaliacao_has_produtos_produtos_controller");



// listar avaliações

router.get("/",
    controller.listar);


// avaliações do produto

router.get("/produto/:idProduto",
    controller.buscar);


// cadastrar

router.post("/",
    controller.cadastrar);


// atualizar

router.put("/:id",
    controller.atualizar);


// excluir

router.delete("/:id",
    controller.excluir);



module.exports = router;