const db = require("../conexao/conexao");

const Marca = {

    listar: (callback) => {
        db.query(
            "SELECT * FROM marca",
            callback
        );
    },

    buscarPorId: (id, callback) => {
        db.query(
            `
            SELECT * FROM marca
            WHERE idmarca = ?
            `,
            [id],
            callback
        );
    },

    inserir: (dados, callback) => {
        db.query(
            `
            INSERT INTO marca
            (
                nome,
                logo
            )
            VALUES (?, ?)
            `,
            [
                dados.nome,
                dados.logo
            ],
            callback
        );
    },

    atualizar: (id, dados, callback) => {
        db.query(
            `
            UPDATE marca
            SET
                nome = ?,
                logo = ?
            WHERE idmarca = ?
            `,
            [
                dados.nome,
                dados.logo,
                id
            ],
            callback
        );
    },

    excluir: (id, callback) => {
        db.query(
            `
            DELETE FROM marca
            WHERE idmarca = ?
            `,
            [id],
            callback
        );
    }

};

module.exports = Marca;