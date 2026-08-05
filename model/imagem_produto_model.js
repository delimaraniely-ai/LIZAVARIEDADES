const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Imagem Produto
// =========================

function cadastrar(imagem_produto, callback) {

    const sql = `
        INSERT INTO IMAGEM_PRODUTOS
        (
            arquivo,
            PRODUTOID_PRODUTO
        )
        VALUES (?, ?)
    `;


    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.PRODUTOID_PRODUTO
        ],
        callback
    );
}



// =========================
// Listar Imagens
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM IMAGEM_PRODUTOS
    `;


    conexao.query(
        sql,
        callback
    );
}



// =========================
// Buscar Imagem por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM IMAGEM_PRODUTOS
        WHERE idimagem_produtos = ?
    `;


    conexao.query(
        sql,
        [
            id
        ],
        callback
    );
}



// =========================
// Atualizar Imagem Produto
// =========================

function atualizar(id, imagem_produto, callback) {

    const sql = `
        UPDATE IMAGEM_PRODUTOS
        SET
            arquivo = ?,
            PRODUTOID_PRODUTO = ?
        WHERE idimagem_produtos = ?
    `;


    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.PRODUTOID_PRODUTO,
            id
        ],
        callback
    );
}



// =========================
// Excluir Imagem Produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM IMAGEM_PRODUTOS
        WHERE idimagem_produtos = ?
    `;


    conexao.query(
        sql,
        [
            id
        ],
        callback
    );
}



module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};