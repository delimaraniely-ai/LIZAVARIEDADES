const express = require("express");
const router = express.Router();
const tamanhoController = require("../controller/tamanho_controller.js");

router.post("/", tamanhoController.cadastrar);
router.get("/", tamanhoController.listar);
router.get("/:id", tamanhoController.buscarPorId);
router.put("/:id", tamanhoController.atualizar);
router.delete("/:id", tamanhoController.excluir);

module.exports = router;