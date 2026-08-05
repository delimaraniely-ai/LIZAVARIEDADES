const { BrotliDecompress } = require("node:zlib");
const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cliente
// =========================

function cadastrar(banner_has_produto, callback) {

    const sql = `INSERT INTO Cliente
        ( banner_loja_idloja,produto_idproduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            banner_has_produto.banner_loja_idloja,
            banner_has_produto.produto_idproduto,

        ],
        callback
    );

}

// =========================
// Listar Clientes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM banner_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM banner_has_produto
        WHERE idbanner_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM banner_has_produto
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);


}
// =========================
// Atualizar Cliente
// =========================

function atualizar(id, banner_has_produto, callback) {

    const sql = `
        UPDATE banner_has_produto
        SET

            banner_loja_idloja = ?,
            produto_idproduto = ?,
            

        WHERE idbanner_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            banner_has_produto.banner_loja_idloja,
            banner_has_produto.produto_idproduto,

        ],
        callback
    );

} const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar
// =========================

function cadastrar(bannerHasProduto, callback) {

    const sql = `
        INSERT INTO Banner_has_Produtos
        (
            Banner_idBanner,
            Produto_idProduto
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            bannerHasProduto.Banner_idBanner,
            bannerHasProduto.Produto_idProduto
        ],
        callback
    );
}

// =========================
// Listar
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Banner_has_Produtos
    `;

    conexao.query(sql, callback);
}

// =========================
// Buscar
// =========================

function buscar(bannerId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM Banner_has_Produtos
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            bannerId,
            produtoId
        ],
        callback
    );
}

// =========================
// Atualizar
// =========================

function atualizar(
    bannerIdAntigo,
    produtoIdAntigo,
    bannerHasProduto,
    callback
) {

    const sql = `
        UPDATE Banner_has_Produtos
        SET
            Banner_idBanner = ?,
            Produto_idProduto = ?
        WHERE
            Banner_idBanner = ?
        AND
            Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            bannerHasProduto.Banner_idBanner,
            bannerHasProduto.Produto_idProduto,
            bannerIdAntigo,
            produtoIdAntigo
        ],
        callback
    );
}

// =========================
// Excluir
// =========================

function excluir(bannerId, produtoId, callback) {

    const sql = `
        DELETE FROM Banner_has_Produtos
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            bannerId,
            produtoId
        ],
        callback
    );
}

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
};

// =========================
// Excluir Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM banner_has_produto
        WHERE idbanner_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    excluir

};