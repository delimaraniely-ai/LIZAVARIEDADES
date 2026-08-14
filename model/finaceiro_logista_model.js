const conexao = require("../conexao/conexao.js");

// ======================================================
// RESUMO FINANCEIRO DA LOJA
// ======================================================

function resumo(idLoja, callback) {

    const sql = `
        SELECT

            COUNT(DISTINCT p.idpedidos) AS total_pedidos,

            COALESCE(
                SUM(
                    php.quantidade * pr.preco_antigo
                ),
                0
            ) AS faturamento

        FROM Pedidos p

        INNER JOIN Pedidos_has_Produtos php
            ON php.Pedidos_idpedidos = p.idpedidos

        INNER JOIN Produto pr
            ON pr.idProduto = php.Produto_idProduto

        WHERE pr.Loja_idLoja = ?
    `;

    conexao.query(
        sql,
        [idLoja],
        callback
    );
}


// ======================================================
// LISTAR PEDIDOS DA LOJA
// ======================================================

function listarPedidos(idLoja, callback) {

    const sql = `
        SELECT DISTINCT

            p.idpedidos,
            p.data_validade,
            p.data_entrega,
            p.status_entrega,

            COALESCE(
                (
                    SELECT SUM(
                        php2.quantidade * pr2.preco_antigo
                    )

                    FROM Pedidos_has_Produtos php2

                    INNER JOIN Produto pr2
                        ON pr2.idProduto =
                           php2.Produto_idProduto

                    WHERE php2.Pedidos_idpedidos =
                          p.idpedidos

                    AND pr2.Loja_idLoja = ?
                ),
                0
            ) AS valor_pedido

        FROM Pedidos p

        INNER JOIN Pedidos_has_Produtos php
            ON php.Pedidos_idpedidos =
               p.idpedidos

        INNER JOIN Produto pr
            ON pr.idProduto =
               php.Produto_idProduto

        WHERE pr.Loja_idLoja = ?

        ORDER BY p.idpedidos DESC
    `;

    conexao.query(
        sql,
        [idLoja, idLoja],
        callback
    );
}


// ======================================================
// PEDIDO POR ID
// ======================================================

function buscarPedido(idPedido, idLoja, callback) {

    const sql = `
        SELECT

            p.idpedidos,
            p.data_validade,
            p.data_entrega,
            p.status_entrega,

            COALESCE(
                SUM(
                    php.quantidade *
                    pr.preco_antigo
                ),
                0
            ) AS valor_pedido

        FROM Pedidos p

        INNER JOIN Pedidos_has_Produtos php
            ON php.Pedidos_idpedidos =
               p.idpedidos

        INNER JOIN Produto pr
            ON pr.idProduto =
               php.Produto_idProduto

        WHERE p.idpedidos = ?

        AND pr.Loja_idLoja = ?

        GROUP BY

            p.idpedidos,
            p.data_validade,
            p.data_entrega,
            p.status_entrega
    `;

    conexao.query(
        sql,
        [idPedido, idLoja],
        callback
    );
}


// ======================================================
// EXPORTAR
// ======================================================

module.exports = {

    resumo,
    listarPedidos,
    buscarPedido

};