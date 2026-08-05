const express = require("express");
const router = express.Router();


const controller = require("../controller/produtos_has_cores_controller.js");



// LISTAR
router.get("/", controller.listar);





// CADASTRAR
router.post("/", controller.cadastrar);


// EXCLUIR
router.delete("/", controller.excluir);



module.exports = router;