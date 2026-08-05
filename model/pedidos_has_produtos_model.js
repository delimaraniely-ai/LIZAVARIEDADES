const db = require("../conexao/conexao");


// ==========================================
// LISTAR RELACIONAMENTOS PEDIDOS X PRODUTOS
// ==========================================

exports.listar = (callback) => {


    const sql = `

        SELECT *

        FROM Pedidos_has_Produtos

    `;


    db.query(sql, callback);


};



// ==========================================
// BUSCAR PRODUTOS DE UM PEDIDO
// ==========================================

exports.buscarPorPedido = (idPedido, callback) => {


    const sql = `

        SELECT *

        FROM Pedidos_has_Produtos

        WHERE Pedidos_idPedidos = ?

    `;


    db.query(sql,
        [
            idPedido
        ],
        callback);


};



// ==========================================
// BUSCAR PEDIDOS DE UM PRODUTO
// ==========================================

exports.buscarPorProduto = (idProduto, callback) => {


    const sql = `

        SELECT *

        FROM Pedidos_has_Produtos

        WHERE Produtos_idProdutos = ?

    `;


    db.query(sql,
        [
            idProduto
        ],
        callback);


};



// ==========================================
// CADASTRAR PRODUTO NO PEDIDO
// ==========================================

exports.cadastrar = (dados, callback) => {


    const sql = `

        INSERT INTO Pedidos_has_Produtos

        (
            Pedidos_idPedidos,
            Produtos_idProdutos,
            quantidade
        )

        VALUES(?,?,?)

    `;


    db.query(sql,
        [

            dados.Pedidos_idPedidos,
            dados.Produtos_idProdutos,
            dados.quantidade

        ],
        callback);


};



// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================

exports.atualizar = (dados, callback) => {


    const sql = `

        UPDATE Pedidos_has_Produtos

        SET quantidade = ?

        WHERE Pedidos_idPedidos = ?

        AND Produtos_idProdutos = ?

    `;


    db.query(sql,
        [

            dados.quantidade,
            dados.Pedidos_idPedidos,
            dados.Produtos_idProdutos

        ],
        callback);


};



// ==========================================
// EXCLUIR PRODUTO DO PEDIDO
// ==========================================

exports.excluir = (dados, callback) => {


    const sql = `

        DELETE FROM Pedidos_has_Produtos

        WHERE Pedidos_idPedidos = ?

        AND Produtos_idProdutos = ?

    `;


    db.query(sql,
        [

            dados.Pedidos_idPedidos,
            dados.Produtos_idProdutos

        ],
        callback);


};
