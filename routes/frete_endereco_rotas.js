const express = require("express");
const router = express.Router();


const controller = require("../controller/frete_endereco_controller.js");



// LISTAR
router.get("/", controller.listar);





// CADASTRAR
router.post("/", controller.cadastrar);


// EXCLUIR
router.delete("/", controller.excluir);



module.exports = router;