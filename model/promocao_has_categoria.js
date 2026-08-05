const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Cupom Produto
// =========================

function cadastrar(cupons_has_produtos, callback) {

    const sql = `
        INSERT INTO CUPONS_HAS_PRODUTOS
        (
            CUPONS_IDCUPONS,
            Produto_IDPRODUTO
        )
        VALUES (?, ?)
    `;


    conexao.query(
        sql,
        [
            cupons_has_produtos.CUPONS_IDCUPONS,
            cupons_has_produtos.Produto_IDPRODUTO
        ],
        callback
    );
}



// =========================
// Listar Relações
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM CUPONS_HAS_PRODUTOS
    `;


    conexao.query(
        sql,
        callback
    );
}



// =========================
// Buscar Cupom Produto
// =========================

function buscar(cupomId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM CUPONS_HAS_PRODUTOS
        WHERE CUPONS_IDCUPONS = ?
        AND Produto_IDPRODUTO = ?
    `;


    conexao.query(
        sql,
        [
            cupomId,
            produtoId
        ],
        callback
    );
}



// =========================
// Atualizar Relação
// =========================

function atualizar(
    cupomIdAntigo,
    produtoIdAntigo,
    cupons_has_produtos,
    callback
) {

    const sql = `
        UPDATE CUPONS_HAS_PRODUTOS
        SET
            CUPONS_IDCUPONS = ?,
            Produto_IDPRODUTO = ?
        WHERE CUPONS_IDCUPONS = ?
        AND Produto_IDPRODUTO = ?
    `;


    conexao.query(
        sql,
        [
            cupons_has_produtos.CUPONS_IDCUPONS,
            cupons_has_produtos.Produto_IDPRODUTO,
            cupomIdAntigo,
            produtoIdAntigo
        ],
        callback
    );
}



// =========================
// Excluir Relação
// =========================

function excluir(cupomId, produtoId, callback) {

    const sql = `
        DELETE FROM CUPONS_HAS_PRODUTOS
        WHERE CUPONS_IDCUPONS = ?
        AND Produto_IDPRODUTO = ?
    `;


    conexao.query(
        sql,
        [
            cupomId,
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