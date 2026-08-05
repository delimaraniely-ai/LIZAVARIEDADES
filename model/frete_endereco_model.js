const db = require("../conexao/conexao");


// ==========================================
// LISTAR RELACIONAMENTOS FRETE X ENDEREÇO
// ==========================================

exports.listar = (callback) => {


    const sql = `

        SELECT *

        FROM Frete_has_Endereco

    `;


    db.query(sql, callback);


};



// ==========================================
// BUSCAR FRETES DE UM ENDEREÇO
// ==========================================

exports.buscarPorEndereco = (idEndereco, callback) => {


    const sql = `

        SELECT *

        FROM Frete_has_Endereco

        WHERE Endereco_idEndereco = ?

    `;


    db.query(sql,
        [
            idEndereco
        ],
        callback);


};



// ==========================================
// BUSCAR ENDEREÇOS DE UM FRETE
// ==========================================

exports.buscarPorFrete = (idFrete, callback) => {


    const sql = `

        SELECT *

        FROM Frete_has_Endereco

        WHERE Frete_idfrete = ?

    `;


    db.query(sql,
        [
            idFrete
        ],
        callback);


};



// ==========================================
// CADASTRAR RELAÇÃO FRETE X ENDEREÇO
// ==========================================

exports.cadastrar = (dados, callback) => {


    const sql = `

        INSERT INTO Frete_has_Endereco

        (
            Frete_idfrete,
            Endereco_idEndereco
        )

        VALUES(?,?)

    `;


    db.query(sql,
        [

            dados.Frete_idfrete,
            dados.Endereco_idEndereco

        ],
        callback);


};



// ==========================================
// EXCLUIR RELAÇÃO
// ==========================================

exports.excluir = (dados, callback) => {


    const sql = `

        DELETE FROM Frete_has_Endereco

        WHERE Frete_idfrete = ?

        AND Endereco_idEndereco = ?

    `;


    db.query(sql,
        [

            dados.Frete_idfrete,
            dados.Endereco_idEndereco

        ],
        callback);


};