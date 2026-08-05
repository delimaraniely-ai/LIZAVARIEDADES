const db = require("../conexao/conexao");


// ==========================================
// LISTAR RELACIONAMENTOS PRODUTO X CORES
// ==========================================

exports.listar = (callback) => {


    const sql = `

        SELECT *

        FROM Produtos_has_Cores

    `;


    db.query(sql, callback);


};



// ==========================================
// BUSCAR CORES DE UM PRODUTO
// ==========================================

exports.buscarPorProduto = (idProduto, callback) => {


    const sql = `

        SELECT *

        FROM Produtos_has_Cores

        WHERE Produtos_idProdutos = ?

    `;


    db.query(sql,
        [
            idProduto
        ],
        callback);


};



// ==========================================
// BUSCAR PRODUTOS DE UMA COR
// ==========================================

exports.buscarPorCor = (idCor, callback) => {


    const sql = `

        SELECT *

        FROM Produtos_has_Cores

        WHERE Cores_idCores = ?

    `;


    db.query(sql,
        [
            idCor
        ],
        callback);


};



// ==========================================
// CADASTRAR RELAÇÃO PRODUTO X COR
// ==========================================

exports.cadastrar = (dados, callback) => {


    const sql = `

        INSERT INTO Produtos_has_Cores

        (
            Produtos_idProdutos,
            Cores_idCores
        )

        VALUES(?,?)

    `;


    db.query(sql,
        [

            dados.Produtos_idProdutos,
            dados.Cores_idCores

        ],
        callback);


};



// ==========================================
// EXCLUIR RELAÇÃO
// ==========================================

exports.excluir = (dados, callback) => {


    const sql = `

        DELETE FROM Produtos_has_Cores

        WHERE Produtos_idProdutos = ?

        AND Cores_idCores = ?

    `;


    db.query(sql,
        [

            dados.Produtos_idProdutos,
            dados.Cores_idCores

        ],
        callback);


};