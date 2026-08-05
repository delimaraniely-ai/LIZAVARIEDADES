const db = require("../database/conexao.js");


// ==========================================
// LISTAR RELACIONAMENTOS PROMOÇÃO X PRODUTO
// ==========================================

exports.listar = (callback) => {


    const sql = `

        SELECT *

        FROM Promocao_has_Produtos

    `;


    db.query(sql, callback);


};



// ==========================================
// BUSCAR PRODUTOS DE UMA PROMOÇÃO
// ==========================================

exports.buscarPorPromocao = (idPromocao, callback) => {


    const sql = `

        SELECT *

        FROM Promocao_has_Produtos

        WHERE Promocao_idPromocao = ?

    `;


    db.query(sql,
        [
            idPromocao
        ],
        callback);


};



// ==========================================
// BUSCAR PROMOÇÕES DE UM PRODUTO
// ==========================================

exports.buscarPorProduto = (idProduto, callback) => {


    const sql = `

        SELECT *

        FROM Promocao_has_Produtos

        WHERE Produtos_idProdutos = ?

    `;


    db.query(sql,
        [
            idProduto
        ],
        callback);


};



// ==========================================
// CADASTRAR RELAÇÃO PROMOÇÃO X PRODUTO
// ==========================================

exports.cadastrar = (dados, callback) => {


    const sql = `

        INSERT INTO Promocao_has_Produtos

        (
            Promocao_idPromocao,
            Produtos_idProdutos
        )

        VALUES(?,?)

    `;


    db.query(sql,
        [

            dados.Promocao_idPromocao,
            dados.Produtos_idProdutos

        ],
        callback);


};



// ==========================================
// EXCLUIR RELAÇÃO
// ==========================================

exports.excluir = (dados, callback) => {


    const sql = `

        DELETE FROM Promocao_has_Produtos

        WHERE Promocao_idPromocao = ?

        AND Produtos_idProdutos = ?

    `;


    db.query(sql,
        [

            dados.Promocao_idPromocao,
            dados.Produtos_idProdutos

        ],
        callback);


};