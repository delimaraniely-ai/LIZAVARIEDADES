const express = require("express");
const router = express.Router();


const controller = require("../controller/imagem_produtos_controller");



// listar imagens
router.get("/", controller.listar);





// buscar id
router.get("/:id",
    controller.buscarPorId);


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