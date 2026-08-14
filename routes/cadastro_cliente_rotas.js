const conexao = require("../conexao/conexao.js");


// ======================================================
// CADASTRAR CLIENTE
// ======================================================

function cadastrar(cliente, callback) {

    const sql = `
        INSERT INTO Cliente
        (
            nome,
            cpf,
            dataNascimento,
            telefone,
            email,
            senha
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;


    conexao.query(
        sql,
        [
            cliente.nome,
            cliente.cpf,
            cliente.dataNascimento,
            cliente.telefone,
            cliente.email,
            cliente.senha
        ],
        callback
    );

}


// ======================================================
// LISTAR CLIENTES
// ======================================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cliente
        ORDER BY idCliente DESC
    `;


    conexao.query(
        sql,
        callback
    );

}


// ======================================================
// BUSCAR CLIENTE POR ID
// ======================================================

function buscarPorId(idCliente, callback) {

    const sql = `
        SELECT *
        FROM Cliente
        WHERE idCliente = ?
    `;


    conexao.query(
        sql,
        [
            idCliente
        ],
        callback
    );

}


// ======================================================
// ATUALIZAR CLIENTE
// ======================================================

function atualizar(
    idCliente,
    cliente,
    callback
) {

    const sql = `
        UPDATE Cliente
        SET
            nome = ?,
            cpf = ?,
            dataNascimento = ?,
            telefone = ?,
            email = ?,
            senha = ?
        WHERE idCliente = ?
    `;


    conexao.query(
        sql,
        [

            cliente.nome,

            cliente.cpf,

            cliente.dataNascimento,

            cliente.telefone,

            cliente.email,

            cliente.senha,

            idCliente

        ],
        callback
    );

}


// ======================================================
// EXCLUIR CLIENTE
// ======================================================

function excluir(
    idCliente,
    callback
) {

    const sql = `
        DELETE FROM Cliente
        WHERE idCliente = ?
    `;


    conexao.query(
        sql,
        [
            idCliente
        ],
        callback
    );

}


// ======================================================
// EXPORTAR
// ======================================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir

}; const conexao = require("../conexao/conexao.js");


// ======================================================
// CADASTRAR CLIENTE
// ======================================================

function cadastrar(cliente, callback) {

    const sql = `
        INSERT INTO Cliente
        (
            nome,
            cpf,
            dataNascimento,
            telefone,
            email,
            senha
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;


    conexao.query(
        sql,
        [
            cliente.nome,
            cliente.cpf,
            cliente.dataNascimento,
            cliente.telefone,
            cliente.email,
            cliente.senha
        ],
        callback
    );

}


// ======================================================
// LISTAR CLIENTES
// ======================================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cliente
        ORDER BY idCliente DESC
    `;


    conexao.query(
        sql,
        callback
    );

}


// ======================================================
// BUSCAR CLIENTE POR ID
// ======================================================

function buscarPorId(idCliente, callback) {

    const sql = `
        SELECT *
        FROM Cliente
        WHERE idCliente = ?
    `;


    conexao.query(
        sql,
        [
            idCliente
        ],
        callback
    );

}


// ======================================================
// ATUALIZAR CLIENTE
// ======================================================

function atualizar(
    idCliente,
    cliente,
    callback
) {

    const sql = `
        UPDATE Cliente
        SET
            nome = ?,
            cpf = ?,
            dataNascimento = ?,
            telefone = ?,
            email = ?,
            senha = ?
        WHERE idCliente = ?
    `;


    conexao.query(
        sql,
        [

            cliente.nome,

            cliente.cpf,

            cliente.dataNascimento,

            cliente.telefone,

            cliente.email,

            cliente.senha,

            idCliente

        ],
        callback
    );

}


// ======================================================
// EXCLUIR CLIENTE
// ======================================================

function excluir(
    idCliente,
    callback
) {

    const sql = `
        DELETE FROM Cliente
        WHERE idCliente = ?
    `;


    conexao.query(
        sql,
        [
            idCliente
        ],
        callback
    );

}


// ======================================================
// EXPORTAR
// ======================================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir

};