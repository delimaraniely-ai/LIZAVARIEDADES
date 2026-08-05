const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar
// =========================

function cadastrar(dados, callback) {

    const sql = `
        INSERT INTO Avaliacao_has_Produtos
        (
            Avaliacao_idAvaliacao,
            Produto_idProduto
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            dados.Avaliacao_idAvaliacao,
            dados.Produto_idProduto
        ],
        callback
    );
}

// =========================
// Listar
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Avaliacao_has_Produtos
    `;

    conexao.query(sql, callback);
}

// =========================
// Buscar
// =========================

function buscar(avaliacaoId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM Avaliacao_has_Produtos
        WHERE Avaliacao_idAvaliacao = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            avaliacaoId,
            produtoId
        ],
        callback
    );
}

// =========================
// Atualizar
// =========================

function atualizar(
    avaliacaoIdAntiga,
    produtoIdAntigo,
    dados,
    callback
) {

    const sql = `
        UPDATE Avaliacao_has_Produtos
        SET
            Avaliacao_idAvaliacao = ?,
            Produto_idProduto = ?
        WHERE
            Avaliacao_idAvaliacao = ?
        AND
            Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            dados.Avaliacao_idAvaliacao,
            dados.Produto_idProduto,
            avaliacaoIdAntiga,
            produtoIdAntigo
        ],
        callback
    );
}

// =========================
// Excluir
// =========================

function excluir(avaliacaoId, produtoId, callback) {

    const sql = `
        DELETE FROM Avaliacao_has_Produtos
        WHERE Avaliacao_idAvaliacao = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            avaliacaoId,
            produtoId
        ],
        callback
    );
}

module.exports = {

    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir

};