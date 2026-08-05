const db = require("../database/conexao.js");


// ==========================================
// LISTAR RELACIONAMENTOS
// ==========================================

exports.listar = (callback) => {

    const sql = `

        SELECT * 
        FROM Endereco_has_Clientes

    `;

    db.query(sql, callback);

};



// ==========================================
// BUSCAR ENDEREÇOS DE UM CLIENTE
// ==========================================

exports.buscarPorCliente = (idCliente, callback) => {


    const sql = `

        SELECT *

        FROM Endereco_has_Clientes

        WHERE Cliente_idCliente = ?

    `;


    db.query(sql, [idCliente], callback);


};



// ==========================================
// BUSCAR CLIENTES DE UM ENDEREÇO
// ==========================================

exports.buscarPorEndereco = (idEndereco, callback) => {


    const sql = `

        SELECT *

        FROM Endereco_has_Clientes

        WHERE Endereco_idEndereco = ?

    `;


    db.query(sql, [idEndereco], callback);


};



// ==========================================
// CADASTRAR RELAÇÃO CLIENTE X ENDEREÇO
// ==========================================

exports.cadastrar = (dados, callback) => {


    const sql = `

        INSERT INTO Endereco_has_Clientes

        (
            Endereco_idEndereco,
            Cliente_idCliente
        )

        VALUES(?,?)

    `;


    db.query(sql,
        [

            dados.Endereco_idEndereco,
            dados.Cliente_idCliente

        ],
        callback);


};



// ==========================================
// EXCLUIR RELAÇÃO
// ==========================================

exports.excluir = (dados, callback) => {


    const sql = `

        DELETE FROM Endereco_has_Clientes

        WHERE Endereco_idEndereco = ?

        AND Cliente_idCliente = ?

    `;


    db.query(sql,
        [

            dados.Endereco_idEndereco,
            dados.Cliente_idCliente

        ],
        callback);


};