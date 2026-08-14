const conexao = require("../conexao/conexao.js");


// ======================================================
// CADASTRAR FAVORITO
// ======================================================

function cadastrar(favorito, callback) {

    const sql = `
        INSERT INTO Favorito
        (
            Cliente_idCliente,
            Produto_idProduto
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            favorito.Cliente_idCliente,
            favorito.Produto_idProduto
        ],
        callback
    );
}


// ======================================================
// LISTAR FAVORITOS DO CLIENTE
// ======================================================

function listarPorCliente(idCliente, callback) {

    const sql = `
        SELECT
            f.idFavorito,
            p.idProduto,
            p.nome,
            p.descricao,
            p.codigo,
            p.preco_antigo,
            p.preco_promocional,
            p.quantidade_estoque,
            p.ativo
        FROM Favorito f

        INNER JOIN Produto p
            ON p.idProduto = f.Produto_idProduto

        WHERE f.Cliente_idCliente = ?

        ORDER BY f.idFavorito DESC
    `;

    conexao.query(
        sql,
        [idCliente],
        callback
    );
}


// ======================================================
// BUSCAR FAVORITO
// ======================================================

function buscar(idCliente, idProduto, callback) {

    const sql = `
        SELECT *
        FROM Favorito

        WHERE Cliente_idCliente = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            idCliente,
            idProduto
        ],
        callback
    );
}


// ======================================================
// EXCLUIR FAVORITO
// ======================================================

function excluir(idCliente, idProduto, callback) {

    const sql = `
        DELETE FROM Favorito

        WHERE Cliente_idCliente = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            idCliente,
            idProduto
        ],
        callback
    );
}


// ======================================================
// EXPORTAR
// ======================================================

module.exports = {

    cadastrar,
    listarPorCliente,
    buscar,
    excluir

};