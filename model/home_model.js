const conexao = require("../conexao/conexao.js");


// ======================================================
// LISTAR TODOS OS PRODUTOS
// ======================================================

function listar(callback) {

    const sql = `
        SELECT
            p.idProduto,
            p.nome,
            p.descricao,
            p.codigo,
            p.preco_antigo,
            p.preco_promocional,
            p.quantidade_estoque,
            p.ativo,
            p.Loja_idLoja,
            p.Marca_idMarca,
            p.Categoria_idCategoria,

            m.nome AS marca,
            c.nome AS categoria

        FROM Produto p

        LEFT JOIN Marca m
            ON p.Marca_idMarca = m.idMarca

        LEFT JOIN Categoria c
            ON p.Categoria_idCategoria = c.idCategoria

        ORDER BY p.idProduto DESC
    `;

    conexao.query(sql, callback);
}



// ======================================================
// BUSCAR PRODUTO POR ID
// ======================================================

function buscarPorId(idProduto, callback) {

    const sql = `
        SELECT
            p.idProduto,
            p.nome,
            p.descricao,
            p.codigo,
            p.preco_antigo,
            p.preco_promocional,
            p.quantidade_estoque,
            p.ativo,
            p.Loja_idLoja,
            p.Marca_idMarca,
            p.Categoria_idCategoria,

            m.nome AS marca,
            c.nome AS categoria

        FROM Produto p

        LEFT JOIN Marca m
            ON p.Marca_idMarca = m.idMarca

        LEFT JOIN Categoria c
            ON p.Categoria_idCategoria = c.idCategoria

        WHERE p.idProduto = ?
    `;

    conexao.query(
        sql,
        [idProduto],
        callback
    );
}



// ======================================================
// CADASTRAR PRODUTO
// ======================================================

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



// ======================================================
// ATUALIZAR PRODUTO
// ======================================================

function atualizar(
    idProduto,
    produto,
    callback
) {

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
            idProduto
        ],
        callback
    );
}



// ======================================================
// EXCLUIR PRODUTO
// ======================================================

function excluir(
    idProduto,
    callback
) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(
        sql,
        [idProduto],
        callback
    );
}



// ======================================================
// EXPORTAR
// ======================================================

module.exports = {

    listar,
    buscarPorId,
    cadastrar,
    atualizar,
    excluir

};