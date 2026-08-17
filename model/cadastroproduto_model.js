// ==================================================
// IMPORTAR CONEXÃO
// ==================================================

const conexao = require("../conexao/conexao.js");


// ==================================================
// CADASTRAR PRODUTO
// ==================================================

function cadastrar(produto, callback) {

    const sql = `
        INSERT INTO Produto (
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

        produto.preco_promocional,

        produto.quantidade_estoque,

        produto.ativo,

        produto.Loja_idLoja,

        produto.Marca_idMarca,

        produto.Categoria_idCategoria

    ];


    console.log("=================================");
    console.log("SQL - CADASTRAR PRODUTO");
    console.log("Valores:", valores);
    console.log("=================================");


    conexao.query(
        sql,
        valores,
        function (erro, resultado) {

            if (erro) {

                console.error(
                    "ERRO NO INSERT DO PRODUTO:"
                );

                console.error(erro);

                return callback(
                    erro,
                    null
                );

            }


            console.log(
                "Produto inserido no banco."
            );

            console.log(
                "ID:",
                resultado.insertId
            );


            callback(
                null,
                resultado
            );

        }
    );

}


// ==================================================
// LISTAR PRODUTOS
// ==================================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Produto
        ORDER BY idProduto DESC
    `;


    conexao.query(
        sql,
        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao listar produtos:",
                    erro
                );

                return callback(
                    erro,
                    null
                );

            }


            callback(
                null,
                resultado
            );

        }
    );

}


// ==================================================
// BUSCAR PRODUTO POR ID
// ==================================================

function buscarPorId(
    idProduto,
    callback
) {

    const sql = `
        SELECT *
        FROM Produto
        WHERE idProduto = ?
    `;


    conexao.query(

        sql,

        [idProduto],

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao buscar produto:",
                    erro
                );

                return callback(
                    erro,
                    null
                );

            }


            callback(
                null,
                resultado
            );

        }

    );

}


// ==================================================
// ATUALIZAR PRODUTO
// ==================================================

function atualizar(
    idProduto,
    produto,
    callback
) {

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
            Loja_idLoja = ?,
            Marca_idMarca = ?,
            Categoria_idCategoria = ?
        WHERE idProduto = ?
    `;


    const valores = [

        produto.nome,

        produto.descricao,

        produto.codigo,

        produto.preco_antigo,

        produto.preco_promocional,

        produto.quantidade_estoque,

        produto.ativo,

        produto.Loja_idLoja,

        produto.Marca_idMarca,

        produto.Categoria_idCategoria,

        idProduto

    ];


    conexao.query(

        sql,

        valores,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao atualizar produto:",
                    erro
                );

                return callback(
                    erro,
                    null
                );

            }


            callback(
                null,
                resultado
            );

        }

    );

}


// ==================================================
// EXCLUIR PRODUTO
// ==================================================

function excluir(
    idProduto,
    callback
) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
    `;


    conexao.query(

        sql,

        [idProduto],

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao excluir produto:",
                    erro
                );

                return callback(
                    erro,
                    null
                );

            }


            callback(
                null,
                resultado
            );

        }

    );

}


// ==================================================
// EXPORTAR FUNÇÕES
// ==================================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir

};