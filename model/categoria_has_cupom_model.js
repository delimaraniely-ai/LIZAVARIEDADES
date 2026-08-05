const db = require("../conexao/conexao");

const CategoriaHasCupom = {


    listar: (callback) => {

        db.query(
            "SELECT * FROM categoria_has_cupom",
            callback
        );

    },


    buscarPorId: (id, callback) => {

        db.query(
            `
SELECT * FROM categoria_has_cupom
WHERE idcategoria_has_cupom=?
`,
            [id],
            callback
        );

    },


    inserir: (dados, callback) => {


        db.query(
            `
INSERT INTO categoria_has_cupom
(
Categoria_idCategoria,
Cupom_idCupom
)
VALUES (?,?)
`,
            [
                dados.Categoria_idCategoria,
                dados.Cupom_idCupom
            ],
            callback
        );


    },


    atualizar: (id, dados, callback) => {


        db.query(
            `
UPDATE categoria_has_cupom
SET
Categoria_idCategoria=?,
Cupom_idCupom=?

WHERE idcategoria_has_cupom=?
`,
            [
                dados.Categoria_idCategoria,
                dados.Cupom_idCupom,
                id
            ],
            callback
        );


    },


    excluir: (id, callback) => {

        db.query(
            `
DELETE FROM categoria_has_cupom
WHERE idcategoria_has_cupom=?
`,
            [id],
            callback
        );


    }


};


module.exports = CategoriaHasCupom;