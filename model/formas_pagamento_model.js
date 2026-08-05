const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Forma Pagamento
// =========================

function cadastrar(formas_pagamento, callback) {

    const sql = `
        INSERT INTO Forma_Pagamento
        (
            nome,
            link,
            ativo
        )
        VALUES (?, ?, ?)
    `;


    conexao.query(
        sql,
        [
            formas_pagamento.nome,
            formas_pagamento.link,
            formas_pagamento.ativo
        ],
        callback
    );
}



// =========================
// Listar Formas Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Forma_Pagamento
    `;


    conexao.query(
        sql,
        callback
    );
}



// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Forma_Pagamento
        WHERE idForma_Pagamento = ?
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
// Atualizar Forma Pagamento
// =========================

function atualizar(id, formas_pagamento, callback) {

    const sql = `
        UPDATE Forma_Pagamento
        SET
            nome = ?,
            link = ?,
            ativo = ?
        WHERE idForma_Pagamento = ?
    `;


    conexao.query(
        sql,
        [
            formas_pagamento.nome,
            formas_pagamento.link,
            formas_pagamento.ativo,
            id
        ],
        callback
    );
}



// =========================
// Excluir Forma Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Forma_Pagamento
        WHERE idForma_Pagamento = ?
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