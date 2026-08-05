const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Cor
// =========================

function cadastrar(cores, callback) {

    const sql = `
        INSERT INTO Cores
        (
            nome,
            codigo_cor
        )
        VALUES (?, ?)
    `;


    conexao.query(
        sql,
        [
            cores.nome,
            cores.codigo_cor
        ],
        callback
    );
}



// =========================
// Listar Cores
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cores
    `;


    conexao.query(
        sql,
        callback
    );
}



// =========================
// Buscar Cor por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cores
        WHERE idCores = ?
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
// Atualizar Cor
// =========================

function atualizar(id, cores, callback) {

    const sql = `
        UPDATE Cores
        SET
            nome = ?,
            codigo_cor = ?
        WHERE idCores = ?
    `;


    conexao.query(
        sql,
        [
            cores.nome,
            cores.codigo_cor,
            id
        ],
        callback
    );
}



// =========================
// Excluir Cor
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cores
        WHERE idCores = ?
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