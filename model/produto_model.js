const conexao = require("../conexao/conexao.js");

// ==================================================
// CADASTRAR PRODUTO
// ==================================================

function cadastrar(produto, callback) {

    const sql = `
        INSERT INTO Produto
        (
            nome,
            descricao,
            codigo,
            preco_antigo,
            preco_promocional,
            quantidade_estoque,
            ativo,
            Loja_idLoja,
            Marca_idMarca,
            Categoria_idCategoria
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.codigo,
            produto.preco_antigo,
            produto.preco_promocional,
            produto.quantidade_estoque,
            produto.ativo,
            produto.Loja_idLoja,
            produto.Marca_idMarca,
            produto.Categoria_idCategoria
        ],
        callback
    );
}


// ==================================================
// LISTAR PRODUTOS
// ==================================================

function listar(callback) {

    const sql = `
        SELECT
            Produto.*,
            Marca.nome AS marca,
            Categoria.nome AS categoria

        FROM Produto

        LEFT JOIN Marca
            ON Produto.Marca_idMarca = Marca.idMarca

        LEFT JOIN Categoria
            ON Produto.Categoria_idCategoria = Categoria.idCategoria

        ORDER BY Produto.idProduto DESC
    `;

    conexao.query(
        sql,
        callback
    );
}


// ==================================================
// BUSCAR PRODUTO POR ID
// ==================================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT
            Produto.*,
            Marca.nome AS marca,
            Categoria.nome AS categoria

        FROM Produto

        LEFT JOIN Marca
            ON Produto.Marca_idMarca = Marca.idMarca

        LEFT JOIN Categoria
            ON Produto.Categoria_idCategoria = Categoria.idCategoria

        WHERE Produto.idProduto = ?
    `;

    conexao.query(
        sql,
        [
            id
        ],
        callback
    );
}


// ==================================================
// ATUALIZAR PRODUTO
// ==================================================

function atualizar(id, produto, callback) {

    const sql = `
        UPDATE Produto

        SET
            nome = ?,
            descricao = ?,
            codigo = ?,
            preco_antigo = ?,
            preco_promocional = ?,
            quantidade_estoque = ?,
            ativo = ?,
            Loja_idLoja = ?,
            Marca_idMarca = ?,
            Categoria_idCategoria = ?

        WHERE idProduto = ?
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.codigo,
            produto.preco_antigo,
            produto.preco_promocional,
            produto.quantidade_estoque,
            produto.ativo,
            produto.Loja_idLoja,
            produto.Marca_idMarca,
            produto.Categoria_idCategoria,
            id
        ],
        callback
    );
}


// ==================================================
// EXCLUIR PRODUTO
// ==================================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(
        sql,
        [
            id
        ],
        callback
    );
}


// ==================================================
// EXPORTAR FUNÇÕES
// ==================================================

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir
};