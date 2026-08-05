const db = require("../conexao/conexao");

const AvaliacaoHasProdutos = {

    listar: (callback) => {
        const sql = `
            SELECT * FROM avaliacao_has_produtos
        `;

        db.query(sql, callback);
    },


    buscarPorId: (id, callback) => {

        const sql = `
            SELECT * FROM avaliacao_has_produtos
            WHERE idavaliacao_has_produtos = ?
        `;

        db.query(sql, [id], callback);
    },


    inserir: (dados, callback) => {

        const sql = `
            INSERT INTO avaliacao_has_produtos
            (
                Avaliacao_idAvaliacao,
                Produtos_idProdutos
            )
            VALUES (?,?)
        `;

        db.query(sql, [
            dados.Avaliacao_idAvaliacao,
            dados.Produtos_idProdutos
        ], callback);

    },


    atualizar: (id, dados, callback) => {

        const sql = `
            UPDATE avaliacao_has_produtos
            SET 
            Avaliacao_idAvaliacao = ?,
            Produtos_idProdutos = ?
            WHERE idavaliacao_has_produtos = ?
        `;

        db.query(sql, [
            dados.Avaliacao_idAvaliacao,
            dados.Produtos_idProdutos,
            id
        ], callback);

    },


    excluir: (id, callback) => {

        const sql = `
            DELETE FROM avaliacao_has_produtos
            WHERE idavaliacao_has_produtos = ?
        `;

        db.query(sql, [id], callback);

    }

};


module.exports = AvaliacaoHasProdutos;