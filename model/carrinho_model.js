const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Carrinho
// =========================

function cadastrar(carrinho, callback) {

    const sql = `
        INSERT INTO Carrinho
        (
            Cliente_idCliente,
            quantidade_produto,
            preco_total
        )
        VALUES (?, ?, ?)
    `;


    conexao.query(
        sql,
        [
            carrinho.Cliente_idCliente,
            carrinho.quantidade_produto,
            carrinho.preco_total
        ],
        callback
    );
}



// =========================
// Listar Carrinhos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Carrinho
    `;


    conexao.query(sql, callback);
}



// =========================
// Buscar Carrinho por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Carrinho
        WHERE idCarrinho = ?
    `;


    conexao.query(
        sql,
        [id],
        callback
    );
}



// =========================
// Atualizar Carrinho
// =========================

function atualizar(id, carrinho, callback) {

    const sql = `
        UPDATE Carrinho
        SET
            Cliente_idCliente = ?,
            quantidade_produto = ?,
            preco_total = ?
        WHERE idCarrinho = ?
    `;


    conexao.query(
        sql,
        [
            carrinho.Cliente_idCliente,
            carrinho.quantidade_produto,
            carrinho.preco_total,
            id
        ],
        callback
    );
}



// =========================
// Excluir Carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Carrinho
        WHERE idCarrinho = ?
    `;


    conexao.query(
        sql,
        [id],
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