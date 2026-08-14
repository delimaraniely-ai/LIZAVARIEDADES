const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Tamanho
// =========================

function cadastrar(tamanho, callback) {

    const sql = `
        INSERT INTO Tamanho
        (
            tm
        )
        VALUES (?)
    `;


    conexao.query(
        sql,
        [
            tamanho.tm
        ],
        callback
    );
}



// =========================
// Listar Tamanhos
// =========================

function listar(callback) {

    const sql = `
        select * from tamanho
    `;


    conexao.query(
        sql,
        callback
    );
}



// =========================
// Buscar Tamanho por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Tamanho
        WHERE idTamanho = ?
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
// Atualizar Tamanho
// =========================

function atualizar(id, tamanho, callback) {

    const sql = `
        UPDATE Tamanho
        SET
            tm = ?
        WHERE idTamanho = ?
    `;


    conexao.query(
        sql,
        [
            tamanho.tm,
            id
        ],
        callback
    );
}



// =========================
// Excluir Tamanho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Tamanho
        WHERE idTamanho = ?
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