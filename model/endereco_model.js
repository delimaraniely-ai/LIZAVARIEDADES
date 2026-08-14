const conexao = require("../conexao/conexao.js");


// ======================================================
// CADASTRAR ENDEREÇO
// ======================================================

function cadastrar(endereco, callback) {

    const sql = `
        INSERT INTO Endereco
        (
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            endereco.cep,
            endereco.logradouro,
            endereco.numero,
            endereco.complemento,
            endereco.bairro,
            endereco.cidade,
            endereco.estado
        ],
        callback
    );
}


// ======================================================
// LISTAR ENDEREÇOS
// ======================================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Endereco
        ORDER BY idEndereco DESC
    `;

    conexao.query(
        sql,
        callback
    );
}


// ======================================================
// BUSCAR POR ID
// ======================================================

function buscarPorId(idEndereco, callback) {

    const sql = `
        SELECT *
        FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(
        sql,
        [idEndereco],
        callback
    );
}


// ======================================================
// ATUALIZAR ENDEREÇO
// ======================================================

function atualizar(endereco, callback) {

    const sql = `
        UPDATE Endereco
        SET
            cep = ?,
            logradouro = ?,
            numero = ?,
            complemento = ?,
            bairro = ?,
            cidade = ?,
            estado = ?
        WHERE idEndereco = ?
    `;

    conexao.query(
        sql,
        [
            endereco.cep,
            endereco.logradouro,
            endereco.numero,
            endereco.complemento,
            endereco.bairro,
            endereco.cidade,
            endereco.estado,
            endereco.idEndereco
        ],
        callback
    );
}


// ======================================================
// EXCLUIR ENDEREÇO
// ======================================================

function excluir(idEndereco, callback) {

    const sql = `
        DELETE FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(
        sql,
        [idEndereco],
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