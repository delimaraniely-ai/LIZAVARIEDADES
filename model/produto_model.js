
const db = require("../conexao/conexao");

const Produto = {


    listar: (callback) => {


        const sql = `

SELECT 
produto.*,
marca.nome AS marca

FROM produto

LEFT JOIN marca
ON produto.marca_idmarca = marca.idmarca

`;

        db.query(sql, callback);


    },


    buscarPorId: (id, callback) => {


        db.query(
            `
SELECT * FROM produto
WHERE idproduto=?
`,
            [id],
            callback
        );


    },


    inserir: (dados, callback) => {


        const sql = `

INSERT INTO produto
(
nome,
descricao,
preco,
estoque,
imagem,
marca_idmarca
)

VALUES (?,?,?,?,?,?)

`;


        db.query(sql, [

            dados.nome,
            dados.descricao,
            dados.preco,
            dados.estoque,
            dados.imagem,
            dados.marca_idmarca

        ], callback);



    },


    atualizar: (id, dados, callback) => {


        const sql = `

UPDATE produto SET

nome=?,
descricao=?,
preco=?,
estoque=?,
imagem=?,
marca_idmarca=?

WHERE idproduto=?

`;


        db.query(sql, [

            dados.nome,
            dados.descricao,
            dados.preco,
            dados.estoque,
            dados.imagem,
            dados.marca_idmarca,
            id

        ], callback);



    },


    excluir: (id, callback) => {


        db.query(
            `
DELETE FROM produto
WHERE idproduto=?
`,
            [id],
            callback
        );


    }



};


module.exports = Produto;