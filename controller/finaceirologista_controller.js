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
            ) AS faturamento,

            COALESCE(
                SUM(
                    php.quantidade *
                    (
                        pr.preco_antigo - pr.preco_promocional
                    )
                ),
                0
            ) AS lucro

        FROM Pedidos p

        INNER JOIN Pedidos_has_Produtos php
            ON php.Pedidos_idpedidos = p.idpedidos

        INNER JOIN Produto pr
            ON pr.idProduto = php.Produto_idProduto

        WHERE pr.Loja_idLoja = ?
    `;

    conexao.query(sql, [idLoja], (erro, resultado) => {

        if (erro) {

            console.error(
                "Erro ao buscar resumo financeiro:",
                erro
            );

            return callback(erro, null);
        }

        const dados = resultado[0] || {};

        const totalPedidos =
            Number(dados.total_pedidos) || 0;

        const faturamento =
            Number(dados.faturamento) || 0;

        const lucro =
            Number(dados.lucro) || 0;

        const ticketMedio =
            totalPedidos > 0
                ? faturamento / totalPedidos
                : 0;

        callback(null, {

            total_pedidos: totalPedidos,

            faturamento: faturamento,

            ticket_medio: ticketMedio,

            lucro: lucro

        });

    });
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
                        php2.quantidade *
                        pr2.preco_antigo
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
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao listar pedidos financeiros:",
                    erro
                );

                return callback(erro, null);
            }

            callback(null, resultado);

        }
    );
}


// ======================================================
// BUSCAR PEDIDO POR ID
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
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao buscar pedido financeiro:",
                    erro
                );

                return callback(erro, null);
            }

            callback(null, resultado);

        }
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