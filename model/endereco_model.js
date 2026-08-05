const db = require("../conexao/conexao");


// ==========================================
// LISTAR TODOS OS ENDEREÇOS
// ==========================================

exports.listar = (callback) => {

    const sql = `
        SELECT * FROM Endereco
    `;

    db.query(sql, callback);

};



// ==========================================
// BUSCAR ENDEREÇO PELO ID
// ==========================================

exports.buscarPorId = (id, callback) => {

    const sql = `

        SELECT * FROM Endereco
        WHERE idEndereco = ?

    `;

    db.query(sql, [id], callback);

};



// ==========================================
// BUSCAR ENDEREÇOS DO CLIENTE
// ==========================================

exports.buscarPorCliente = (idCliente, callback) => {


    const sql = `

        SELECT 
            Endereco.*

        FROM Endereco

        INNER JOIN Endereco_has_Clientes

        ON Endereco.idEndereco = Endereco_has_Clientes.Endereco_idEndereco

        WHERE Endereco_has_Clientes.Cliente_idCliente = ?

    `;


    db.query(sql, [idCliente], callback);


};



// ==========================================
// CADASTRAR ENDEREÇO
// ==========================================

exports.cadastrar = (dados, callback) => {


    const sql = `

        INSERT INTO Endereco

        (
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            complemento
        )

        VALUES(?,?,?,?,?,?,?)

    `;


    db.query(sql,
        [

            dados.cep,
            dados.rua,
            dados.numero,
            dados.bairro,
            dados.cidade,
            dados.estado,
            dados.complemento

        ],
        callback);


};



// ==========================================
// ATUALIZAR ENDEREÇO
// ==========================================

exports.atualizar = (id, dados, callback) => {


    const sql = `

        UPDATE Endereco SET

            cep = ?,
            rua = ?,
            numero = ?,
            bairro = ?,
            cidade = ?,
            estado = ?,
            complemento = ?

        WHERE idEndereco = ?

    `;


    db.query(sql,
        [

            dados.cep,
            dados.rua,
            dados.numero,
            dados.bairro,
            dados.cidade,
            dados.estado,
            dados.complemento,
            id

        ],
        callback);


};



// ==========================================
// EXCLUIR ENDEREÇO
// ==========================================

exports.excluir = (id, callback) => {


    const sql = `

        DELETE FROM Endereco
        WHERE idEndereco = ?

    `;


    db.query(sql, [id], callback);


};