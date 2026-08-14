

const mysql = require("mysql2");
const conexao = mysql.createConnection({
    host: "altaria.proxy.rlwy.net",
    user: 'root',
    port: 31727,
    password: "kpqusEkZMGDrvEtRkUZUqaqbkQnTpJbQ", // senha do MySQL
    database: "railway"
});
conexao.connect((erro) => {

    if (erro) {
        console.log("Erro ao conectar:", erro);
        return;

    }
    console.log("Banco conectadeo com sucesso!");
});

module.exports = conexao;
