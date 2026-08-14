const conexao = require("../conexao/conexao.js");


// ==================================================
// CADASTRAR CLIENTE
// ==================================================

function cadastrar(cliente, callback) {

    const sql = `
        INSERT INTO Cliente
        (
            nome,
            cpf,
            dataNascimento,
            email,
            telefone
        )
        VALUES (?, ?, ?, ?, ?)
    `;


    conexao.query(

        sql,

        [
            cliente.nome,
            cliente.cpf,
            cliente.dataNascimento,
            cliente.email,
            cliente.telefone
        ],

        callback

    );

}


// ==================================================
// LISTAR CLIENTES
// ==================================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cliente
    `;


    conexao.query(

        sql,

        callback

    );

}


// ==================================================
// BUSCAR CLIENTE POR ID
// ==================================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cliente
        WHERE idCliente = ?
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
// ATUALIZAR CLIENTE
// ==================================================

function atualizar(id, cliente, callback) {

    const sql = `
        UPDATE Cliente
        SET
            nome = ?,
            cpf = ?,
            dataNascimento = ?,
            email = ?,
            telefone = ?
        WHERE idCliente = ?
    `;


    conexao.query(

        sql,

        [
            cliente.nome,
            cliente.cpf,
            cliente.dataNascimento,
            cliente.email,
            cliente.telefone,
            id
        ],

        callback

    );

}


// ==================================================
// EXCLUIR CLIENTE
// ==================================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cliente
        WHERE idCliente = ?
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
// EXPORTAR
// ==================================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};