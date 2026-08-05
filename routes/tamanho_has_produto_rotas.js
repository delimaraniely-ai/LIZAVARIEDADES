const express = require("express");
const router = express.Router();


const controller = require("../controller/tamanho_has_produto_controller");



// LISTAR
router.get("/", controller.listar);





// CADASTRAR
router.post("/", controller.cadastrar);


// EXCLUIR
router.delete("/", controller.excluir);



module.exports = router;