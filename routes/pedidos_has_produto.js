const express = require("express");
const router = express.Router();


const controller = require("../controller/pedidos_has_produtos_controller.js");



// LISTAR
router.get("/", controller.listar);





// CADASTRAR
router.post("/", controller.cadastrar);


// ATUALIZAR QUANTIDADE
router.put("/", controller.atualizar);


// EXCLUIR
router.delete("/", controller.excluir);



module.exports = router;