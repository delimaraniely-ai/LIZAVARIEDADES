// ======================================================
// CONTROLLER - PRODUTO
// ======================================================

const conexao = require("../conexao/conexao.js");


// ======================================================
// CADASTRAR PRODUTO
// ======================================================

function cadastrar(produto, callback) {

    const sql = `
        INSERT INTO Produto
        (
            nome,
            descricao,
            codigo,
            preco_antigo,
            preco_promocional,
            quantidade_estoque,
            ativo,
            Loja_idLoja,
            Marca_idMarca,
            Categoria_idCategoria
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        produto.nome,
        produto.descricao,
        produto.codigo,
        produto.preco_antigo,
        produto.preco_promocional || null,
        produto.quantidade_estoque,
        produto.ativo !== undefined ? produto.ativo : 1,
        produto.Loja_idLoja,
        produto.Marca_idMarca || null,
        produto.Categoria_idCategoria || null
    ];

    conexao.query(sql, valores, function (erro, resultado) {

        if (erro) {
            console.error("ERRO AO CADASTRAR PRODUTO:");
            console.error(erro);

            return callback(erro, null);
        }

        console.log("Produto cadastrado com sucesso!");

        callback(null, resultado);
    });
}


// ======================================================
// LISTAR PRODUTOS
// ======================================================

function listar(callback) {

    const sql = `
        SELECT
            p.idProduto,
            p.nome,
            p.descricao,
            p.codigo,
            p.preco_antigo,
            p.preco_promocional,
            p.quantidade_estoque,
            p.ativo,

            p.Loja_idLoja,

            p.Marca_idMarca,
            m.nome AS marca,

            p.Categoria_idCategoria,
            c.nome AS categoria

        FROM Produto p

        LEFT JOIN Marca m
            ON p.Marca_idMarca = m.idMarca

        LEFT JOIN Categoria c
            ON p.Categoria_idCategoria = c.idCategoria

        ORDER BY p.idProduto DESC
    `;

    conexao.query(sql, function (erro, resultados) {

        if (erro) {
            console.error("ERRO AO LISTAR PRODUTOS:");
            console.error(erro);

            return callback(erro, null);
        }

        callback(null, resultados);
    });
}


// ======================================================
// BUSCAR PRODUTO POR ID
// ======================================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT
            p.*,
            m.nome AS marca,
            c.nome AS categoria

        FROM Produto p

        LEFT JOIN Marca m
            ON p.Marca_idMarca = m.idMarca

        LEFT JOIN Categoria c
            ON p.Categoria_idCategoria = c.idCategoria

        WHERE p.idProduto = ?
    `;

    conexao.query(sql, [id], function (erro, resultado) {

        if (erro) {
            console.error("ERRO AO BUSCAR PRODUTO:");
            console.error(erro);

            return callback(erro, null);
        }

        callback(null, resultado);
    });
}


// ======================================================
// ATUALIZAR PRODUTO
// ======================================================

function atualizar(id, produto, callback) {

    const sql = `
        UPDATE Produto

        SET
            nome = ?,
            descricao = ?,
            codigo = ?,
            preco_antigo = ?,
            preco_promocional = ?,
            quantidade_estoque = ?,
            ativo = ?,
            Marca_idMarca = ?,
            Categoria_idCategoria = ?

        WHERE idProduto = ?
    `;

    const valores = [
        produto.nome,
        produto.descricao,
        produto.codigo,
        produto.preco_antigo,
        produto.preco_promocional || null,
        produto.quantidade_estoque,
        produto.ativo !== undefined ? produto.ativo : 1,
        produto.Marca_idMarca || null,
        produto.Categoria_idCategoria || null,
        id
    ];

    conexao.query(sql, valores, function (erro, resultado) {

        if (erro) {
            console.error("ERRO AO ATUALIZAR PRODUTO:");
            console.error(erro);

            return callback(erro, null);
        }

        callback(null, resultado);
    });
}


// ======================================================
// EXCLUIR PRODUTO
// ======================================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], function (erro, resultado) {

        if (erro) {
            console.error("ERRO AO EXCLUIR PRODUTO:");
            console.error(erro);

            return callback(erro, null);
        }

        callback(null, resultado);
    });
}


// ======================================================
// EXPORTAR
// ======================================================

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir
};