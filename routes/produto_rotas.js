```javascript
// ==================================================
// ROTAS DE PRODUTOS
// ==================================================
//
// Neste arquivo são definidas as rotas relacionadas
// aos produtos e cada rota é associada a uma função
// do ProdutoController.
//
// Rotas disponíveis:
//
// POST   /produtos       -> Cadastrar um novo produto
// GET    /produtos       -> Listar todos os produtos
// GET    /produtos/:id   -> Buscar um produto pelo ID
// PUT    /produtos/:id   -> Atualizar um produto pelo ID
// DELETE /produtos/:id   -> Excluir um produto pelo ID
// ==================================================


// ==================================================
// IMPORTAR EXPRESS
// ==================================================

const express = require("express");


// ==================================================
// CRIAR ROUTER
// ==================================================

const router = express.Router();


// ==================================================
// IMPORTAR CONTROLLER DE PRODUTO
// ==================================================

const produtoController = require("../controller/produto_controller.js");


// ==================================================
// CADASTRAR PRODUTO
// ==================================================
// POST /produtos

router.post(
    "/",
    produtoController.cadastrar
);


// ==================================================
// LISTAR PRODUTOS
// ==================================================
// GET /produtos

router.get(
    "/",
    produtoController.listar
);


// ==================================================
// BUSCAR PRODUTO POR ID
// ==================================================
// GET /produtos/:id

router.get(
    "/:id",
    produtoController.buscarPorId
);


// ==================================================
// ATUALIZAR PRODUTO
// ==================================================
// PUT /produtos/:id

router.put(
    "/:id",
    produtoController.atualizar
);


// ==================================================
// EXCLUIR PRODUTO
// ==================================================
// DELETE /produtos/:id

router.delete(
    "/:id",
    produtoController.excluir
);


// ==================================================
// EXPORTAR ROTAS
// ==================================================

module.exports = router;
```
