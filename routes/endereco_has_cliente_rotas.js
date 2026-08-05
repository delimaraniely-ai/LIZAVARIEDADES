const express = require("express");
const router = express.Router();


const controller = require("../controller/endereco_has_clientes_controller.js");



// LISTAR
router.get("/", controller.listar);


// BUSCAR POR CLIENTE
router.get("/cliente/:idCliente", controller.buscarPorId);





// CADASTRAR RELAÇÃO
router.post("/", controller.cadastrar);


// EXCLUIR RELAÇÃO
router.delete("/", controller.excluir);



module.exports = router;