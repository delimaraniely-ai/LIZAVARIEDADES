const db = require("../conexao/conexao");


const CarrinhoHasProdutos = {


    listar: (callback) => {

        db.query(
            "SELECT * FROM carrinho_has_produtos",
            callback
        );

    },


    buscarPorId: (id, callback) => {

        const sql = `
    SELECT * FROM carrinho_has_produtos
    WHERE idcarrinho_has_produtos = ?
    `;

        db.query(sql, [id], callback);

    },


    inserir: (dados, callback) => {


        const sql = `
INSERT INTO carrinho_has_produtos
(
Carrinho_idCarrinho,
Produtos_idProdutos,
quantidade
)
VALUES (?,?,?)
`;


        db.query(sql, [
            dados.Carrinho_idCarrinho,
            dados.Produtos_idProdutos,
            dados.quantidade

        ], callback);


    },


    atualizar: (id, dados, callback) => {


        const sql = `

UPDATE carrinho_has_produtos
SET
Carrinho_idCarrinho=?,
Produtos_idProdutos=?,
quantidade=?

WHERE idcarrinho_has_produtos=?

`;


        db.query(sql, [
            dados.Carrinho_idCarrinho,
            dados.Produtos_idProdutos,
            dados.quantidade,
            id

        ], callback);


    },


    excluir: (id, callback) => {

        db.query(
            `
DELETE FROM carrinho_has_produtos
WHERE idcarrinho_has_produtos=?
`,
            [id],
            callback
        );


    }


};


module.exports = CarrinhoHasProdutos;