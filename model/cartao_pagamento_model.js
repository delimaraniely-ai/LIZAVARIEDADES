const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Cartão
// =========================

function cadastrar(cartao_pagamento, callback) {

    const sql = `
        INSERT INTO Cartao_Pagamentos
        (
            numero,
            data_vencimento,
            cvc,
            cpf,
            nome_proprietario,
            nome_identificacao,
            bandeira
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;


    conexao.query(
        sql,
        [
            cartao_pagamento.numero,
            cartao_pagamento.data_vencimento,
            cartao_pagamento.cvc,
            cartao_pagamento.cpf,
            cartao_pagamento.nome_proprietario,
            cartao_pagamento.nome_identificacao,
            cartao_pagamento.bandeira
        ],
        callback
    );
}



// =========================
// Listar Cartões
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cartao_Pagamentos
    `;


    conexao.query(sql, callback);
}



// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cartao_Pagamentos
        WHERE idCartao_Pagamentos = ?
    `;


    conexao.query(
        sql,
        [id],
        callback
    );
}



// =========================
// Buscar por CPF
// =========================

function buscarPorCpf(cpf, callback) {

    const sql = `
        SELECT *
        FROM Cartao_Pagamentos
        WHERE cpf = ?
    `;


    conexao.query(
        sql,
        [cpf],
        callback
    );
}



// =========================
// Atualizar Cartão
// =========================

function atualizar(id, cartao_pagamento, callback) {

    const sql = `
        UPDATE Cartao_Pagamentos
        SET
            numero = ?,
            data_vencimento = ?,
            cvc = ?,
            cpf = ?,
            nome_proprietario = ?,
            nome_identificacao = ?,
            bandeira = ?
        WHERE idCartao_Pagamentos = ?
    `;


    conexao.query(
        sql,
        [
            cartao_pagamento.numero,
            cartao_pagamento.data_vencimento,
            cartao_pagamento.cvc,
            cartao_pagamento.cpf,
            cartao_pagamento.nome_proprietario,
            cartao_pagamento.nome_identificacao,
            cartao_pagamento.bandeira,
            id
        ],
        callback
    );
}



// =========================
// Excluir Cartão
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cartao_Pagamentos
        WHERE idCartao_Pagamentos = ?
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
    buscarPorCpf,
    atualizar,
    excluir

};