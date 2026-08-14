const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Imagem Produto
// =========================

function cadastrar(imagem_produto, callback) {

    const sql = `
        INSERT INTO Imagem_Produtos
        (
            arquivo,
            Produto_idProduto
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.Produto_idProduto
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
        FROM Imagem_Produtos
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
        FROM Imagem_Produtos
        WHERE idImagem_Produtos = ?
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
        UPDATE Imagem_Produtos
        SET
            arquivo = ?,
            Produto_idProduto = ?
        WHERE idImagem_Produtos = ?
    `;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.Produto_idProduto,
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
        DELETE FROM Imagem_Produtos
        WHERE idImagem_Produtos = ?
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
// Exportar
// =========================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};