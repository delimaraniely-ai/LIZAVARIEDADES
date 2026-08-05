const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Tamanho Produto
// =========================

function cadastrar(tamanho_has_produto, callback) {

    const sql = `
        INSERT INTO TAMANHO_HAS_PRODUTOS
        (
            TAMANHO_IDTAMANHO,
            Produto_IDPRODUTO
        )
        VALUES (?, ?)
    `;


    conexao.query(
        sql,
        [
            tamanho_has_produto.TAMANHO_IDTAMANHO,
            tamanho_has_produto.Produto_IDPRODUTO
        ],
        callback
    );
}



// =========================
// Listar Tamanhos dos Produtos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM TAMANHO_HAS_PRODUTOS
    `;


    conexao.query(
        sql,
        callback
    );
}



// =========================
// Buscar Relação
// =========================

function buscar(tamanhoId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM TAMANHO_HAS_PRODUTOS
        WHERE TAMANHO_IDTAMANHO = ?
        AND Produto_IDPRODUTO = ?
    `;


    conexao.query(
        sql,
        [
            tamanhoId,
            produtoId
        ],
        callback
    );
}



// =========================
// Atualizar Relação
// =========================

function atualizar(
    tamanhoIdAntigo,
    produtoIdAntigo,
    tamanho_has_produto,
    callback
) {

    const sql = `
        UPDATE TAMANHO_HAS_PRODUTOS
        SET
            TAMANHO_IDTAMANHO = ?,
            Produto_IDPRODUTO = ?
        WHERE TAMANHO_IDTAMANHO = ?
        AND Produto_IDPRODUTO = ?
    `;


    conexao.query(
        sql,
        [
            tamanho_has_produto.TAMANHO_IDTAMANHO,
            tamanho_has_produto.Produto_IDPRODUTO,
            tamanhoIdAntigo,
            produtoIdAntigo
        ],
        callback
    );
}



// =========================
// Excluir Relação
// =========================

function excluir(tamanhoId, produtoId, callback) {

    const sql = `
        DELETE FROM TAMANHO_HAS_PRODUTOS
        WHERE TAMANHO_IDTAMANHO = ?
        AND Produto_IDPRODUTO = ?
    `;


    conexao.query(
        sql,
        [
            tamanhoId,
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