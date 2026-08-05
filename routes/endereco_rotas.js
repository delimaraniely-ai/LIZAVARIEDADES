const express = require("express");
const router = express.Router();

const enderecoController = require("../controller/endereco_controller.js");


// LISTAR
router.get("/", enderecoController.listar);


// BUSCAR POR ID
router.get("/:id", enderecoController.buscarPorId);





// CADASTRAR
router.post("/", enderecoController.cadastrar);


// ATUALIZAR
router.put("/:id", enderecoController.atualizar);


// EXCLUIR
router.delete("/:id", enderecoController.excluir);



module.exports = router;