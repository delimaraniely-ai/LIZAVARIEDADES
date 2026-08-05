const db = require("../database/conexao.js");


// ==========================================
// LISTAR TODOS OS CLIENTES
// ==========================================

exports.listar = (callback) => {

    const sql = `
        SELECT * FROM Cliente
    `;

    db.query(sql, callback);

};



// ==========================================
// BUSCAR CLIENTE PELO ID
// ==========================================

exports.buscarPorId = (id, callback) => {

    const sql = `
        SELECT * FROM Cliente
        WHERE idCliente = ?
    `;

    db.query(sql, [id], callback);

};



// ==========================================
// BUSCAR CLIENTE PELO EMAIL (LOGIN)
// ==========================================

exports.buscarEmail = (email, callback) => {

    const sql = `
        SELECT * FROM Cliente
        WHERE email = ?
    `;

    db.query(sql, [email], callback);

};



// ==========================================
// LOGIN CLIENTE
// ==========================================

exports.login = (email, senha, callback) => {

    const sql = `
        SELECT * FROM Cliente
        WHERE email = ?
        AND senha = ?
    `;


    db.query(sql,
        [
            email,
            senha
        ],
        callback);

};



// ==========================================
// CADASTRAR CLIENTE
// ==========================================

exports.cadastrar = (dados, callback) => {


    const sql = `

        INSERT INTO Cliente
        (
            nome,
            cpf,
            telefone,
            email,
            senha
        )

        VALUES(?,?,?,?,?)

    `;


    db.query(sql,
        [
            dados.nome,
            dados.cpf,
            dados.telefone,
            dados.email,
            dados.senha
        ],
        callback);


};



// ==========================================
// ATUALIZAR CLIENTE
// ==========================================

exports.atualizar = (id, dados, callback) => {


    const sql = `

        UPDATE Cliente SET

            nome = ?,
            cpf = ?,
            telefone = ?,
            email = ?,
            senha = ?

        WHERE idCliente = ?

    `;


    db.query(sql,
        [

            dados.nome,
            dados.cpf,
            dados.telefone,
            dados.email,
            dados.senha,
            id

        ],
        callback);


};



// ==========================================
// EXCLUIR CLIENTE
// ==========================================

exports.excluir = (id, callback) => {


    const sql = `

        DELETE FROM Cliente
        WHERE idCliente = ?

    `;


    db.query(sql, [id], callback);


};