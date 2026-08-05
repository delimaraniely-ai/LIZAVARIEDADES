const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Pedido
// =========================

function cadastrar(pedidos, callback) {

    const sql = `
        INSERT INTO Pedidos
        (
            data_validade,
            nota_fiscal,
            data_entrega,
            status_entrega
        )
        VALUES (?, ?, ?, ?)
    `;


    conexao.query(
        sql,
        [
            pedidos.data_validade,
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega
        ],
        callback
    );
}



// =========================
// Listar Pedidos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Pedidos
    `;


    conexao.query(
        sql,
        callback
    );
}



// =========================
// Buscar Pedido por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Pedidos
        WHERE idpedidos = ?
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
// Atualizar Pedido
// =========================

function atualizar(id, pedidos, callback) {

    const sql = `
        UPDATE Pedidos
        SET
            data_validade = ?,
            nota_fiscal = ?,
            data_entrega = ?,
            status_entrega = ?
        WHERE idpedidos = ?
    `;


    conexao.query(
        sql,
        [
            pedidos.data_validade,
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega,
            id
        ],
        callback
    );
}



// =========================
// Excluir Pedido
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Pedidos
        WHERE idpedidos = ?
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