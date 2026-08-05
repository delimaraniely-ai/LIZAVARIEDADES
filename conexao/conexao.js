

const mysql = require("mysql2");
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "", // senha do MySQL
    database: "Lizavariedades"
});
conexao.connect((erro) => {

    if (erro) {
        console.log("Erro ao conectar:", erro);
        return;

    }
    console.log("Banco conectadeo com sucesso!");
});

module.exports = conexao;
