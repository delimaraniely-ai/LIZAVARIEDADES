const express = require("express");
const multer = require("multer");

const router = express.Router();

const marcaController = require("../controller/marca_controller.js");


// Configuração para receber imagem em memória
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
});


router.post(
    "/",
    upload.single("logo"),
    marcaController.cadastrar
);


router.get(
    "/",
    marcaController.listar
);


router.get(
    "/:id",
    marcaController.buscarPorId
);


router.put(
    "/:id",
    upload.single("logo"),
    marcaController.atualizar
);


router.delete(
    "/:id",
    marcaController.excluir
);


module.exports = router;