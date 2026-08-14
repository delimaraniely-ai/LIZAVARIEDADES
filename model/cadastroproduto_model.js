// ==================================================
// IMPORTAR CONEXÃO
// ==================================================

const conexao =
    require("../conexao/conexao.js");


// ==================================================
// CADASTRAR PRODUTO
// ==================================================

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


    conexao.query(

        sql,

        [
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
        ],

        callback

    );

}


// ==================================================
// LISTAR PRODUTOS
// ==================================================

function listar(callback) {

    const sql = `

        SELECT
            *

        FROM Produto

        ORDER BY idProduto DESC

    `;


    conexao.query(

        sql,

        callback

    );

}


// ==================================================
// BUSCAR POR ID
// ==================================================

function buscarPorId(
    idProduto,
    callback
) {

    const sql = `

        SELECT
            *

        FROM Produto

        WHERE idProduto = ?

    `;


    conexao.query(

        sql,

        [idProduto],

        callback

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


    conexao.query(

        sql,

        [

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

        ],

        callback

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

        callback

    );

}


// ==================================================
// EXPORTAR
// ==================================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir

};