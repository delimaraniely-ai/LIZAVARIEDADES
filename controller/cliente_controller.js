//==========================================
// IMPORTA O MODEL
//==========================================

const clienteModel = require("../model/usuario_model.js");


//==========================================
// CADASTRAR CLIENTE
//==========================================

function cadastrar(req, res) {

    const cliente = req.body;


    // Caso não informe loja, usa loja padrão
    if (!cliente.Loja_idLoja) {
        cliente.Loja_idLoja = 1;
    }


    // Validação dos campos obrigatórios

    if (
        !cliente.nome ||
        !cliente.cpf ||
        !cliente.telefone ||
        !cliente.email ||
        !cliente.senha ||
        !cliente.data_nascimento
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }



    // Verifica email existente

    clienteModel.buscarPorEmail(cliente.email, (erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar cliente."
            });

        }



        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "E-mail já cadastrado."
            });

        }



        // Cadastro

        clienteModel.cadastrar(cliente, (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cliente."
                });

            }



            res.status(201).json({

                sucesso: true,
                mensagem: "Cliente cadastrado com sucesso!",
                idCliente: resultado.insertId

            });


        });


    });


}




//==========================================
// LISTAR CLIENTES
//==========================================

function listar(req, res) {


    clienteModel.listar((erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar clientes."
            });

        }


        res.json(resultado);


    });


}




//==========================================
// BUSCAR CLIENTE POR ID
//==========================================

function buscarPorId(req, res) {


    const id = req.params.id;


    clienteModel.buscarPorId(id, (erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cliente."
            });

        }



        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cliente não encontrado."
            });

        }



        res.json(resultado[0]);


    });


}




//==========================================
// ATUALIZAR CLIENTE
//==========================================

function atualizar(req, res) {


    const id = req.params.id;

    const cliente = req.body;



    clienteModel.atualizar(id, cliente, (erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cliente."
            });

        }



        res.json({

            sucesso: true,
            mensagem: "Cliente atualizado com sucesso."

        });



    });



}




//==========================================
// EXCLUIR CLIENTE
//==========================================

function excluir(req, res) {


    const id = req.params.id;



    clienteModel.excluir(id, (erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cliente."
            });

        }



        res.json({

            sucesso: true,
            mensagem: "Cliente excluído com sucesso."

        });


    });


}





//==========================================
// LOGIN CLIENTE
//==========================================

function login(req, res) {


    const { email, senha } = req.body;



    clienteModel.buscarPorEmail(email, (erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro interno no servidor."
            });

        }



        if (resultado.length === 0) {

            return res.status(401).json({

                sucesso: false,
                mensagem: "E-mail ou senha inválidos."

            });

        }



        const cliente = resultado[0];



        if (cliente.senha !== senha) {


            return res.status(401).json({

                sucesso: false,
                mensagem: "E-mail ou senha inválidos."

            });


        }



        res.json({

            sucesso: true,

            mensagem: "Login realizado com sucesso!",


            cliente: {

                idCliente: cliente.idCliente,
                nome: cliente.nome,
                email: cliente.email,
                telefone: cliente.telefone,
                cpf: cliente.cpf,
                Loja_idLoja: cliente.Loja_idLoja

            }


        });



    });



}





//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir,
    login

};