//==========================================
// IMPORTA O MODEL
//==========================================

const clienteModel = require("../model/cliente_model.js");


//==========================================
// CADASTRAR CLIENTE
//==========================================

function cadastrar(req, res) {

    const cliente = req.body;


    //==========================================
    // VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS
    //==========================================

    if (
        !cliente.nome ||
        !cliente.cpf ||
        !cliente.dataNascimento ||
        !cliente.email ||
        !cliente.telefone
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Preencha todos os campos obrigatórios."

        });

    }


    //==========================================
    // CADASTRAR NO MODEL
    //==========================================

    clienteModel.cadastrar(

        cliente,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao cadastrar cliente:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao cadastrar cliente.",

                    erro: erro.message

                });

            }


            //==========================================
            // RETORNO DE SUCESSO
            //==========================================

            return res.status(201).json({

                sucesso: true,

                mensagem: "Cliente cadastrado com sucesso!",

                idCliente: resultado.insertId

            });

        }

    );

}


//==========================================
// LISTAR CLIENTES
//==========================================

function listar(req, res) {

    clienteModel.listar(

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao listar clientes:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao listar clientes."

                });

            }


            return res.status(200).json({

                sucesso: true,

                clientes: resultado

            });

        }

    );

}


//==========================================
// BUSCAR CLIENTE POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;


    clienteModel.buscarPorId(

        id,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao buscar cliente:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao buscar cliente."

                });

            }


            //==========================================
            // CLIENTE NÃO ENCONTRADO
            //==========================================

            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Cliente não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                cliente: resultado[0]

            });

        }

    );

}


//==========================================
// ATUALIZAR CLIENTE
//==========================================

function atualizar(req, res) {

    const id = req.params.id;

    const cliente = req.body;


    //==========================================
    // VALIDAÇÃO
    //==========================================

    if (
        !cliente.nome ||
        !cliente.cpf ||
        !cliente.dataNascimento ||
        !cliente.email ||
        !cliente.telefone
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Preencha todos os campos obrigatórios."

        });

    }


    clienteModel.atualizar(

        id,

        cliente,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao atualizar cliente:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao atualizar cliente."

                });

            }


            //==========================================
            // VERIFICAR SE EXISTE
            //==========================================

            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Cliente não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem: "Cliente atualizado com sucesso."

            });

        }

    );

}


//==========================================
// EXCLUIR CLIENTE
//==========================================

function excluir(req, res) {

    const id = req.params.id;


    clienteModel.excluir(

        id,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao excluir cliente:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao excluir cliente."

                });

            }


            //==========================================
            // VERIFICAR SE EXISTE
            //==========================================

            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Cliente não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem: "Cliente excluído com sucesso."

            });

        }

    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir

};