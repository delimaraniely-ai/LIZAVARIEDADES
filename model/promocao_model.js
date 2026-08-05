const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Promoção
// =========================

function cadastrar(promocao, callback) {

    const sql = `
        INSERT INTO Promocao
        (
            data_inicio,
            data_final,
            valor_promocao,
            nome
        )
        VALUES (?, ?, ?, ?)
    `;


    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome
        ],
        callback
    );
}



// =========================
// Listar Promoções
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Promocao
    `;


    conexao.query(
        sql,
        callback
    );
}



// =========================
// Buscar Promoção por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Promocao
        WHERE idpromocao = ?
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
// Atualizar Promoção
// =========================

function atualizar(id, promocao, callback) {

    const sql = `
        UPDATE Promocao
        SET
            data_inicio = ?,
            data_final = ?,
            valor_promocao = ?,
            nome = ?
        WHERE idpromocao = ?
    `;


    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome,
            id
        ],
        callback
    );
}



// =========================
// Excluir Promoção
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Promocao
        WHERE idpromocao = ?
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