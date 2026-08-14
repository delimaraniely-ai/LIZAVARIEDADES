const conexao =
    require("../conexao/conexao.js");


// ======================================================
// BUSCAR PRODUTO POR ID
// ======================================================

function buscarPorId(idProduto, callback) {

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

            m.idMarca,
            m.nome AS nomeMarca,

            c.idCategoria,
            c.nome AS nomeCategoria,

            l.idLoja,
            l.nome AS nomeLoja

        FROM Produto p

        LEFT JOIN Marca m
            ON p.Marca_idMarca = m.idMarca

        LEFT JOIN Categoria c
            ON p.Categoria_idCategoria = c.idCategoria

        LEFT JOIN Loja l
            ON p.Loja_idLoja = l.idLoja

        WHERE p.idProduto = ?

    `;


    conexao.query(

        sql,

        [idProduto],

        callback

    );

}


module.exports = {

    buscarPorId

};