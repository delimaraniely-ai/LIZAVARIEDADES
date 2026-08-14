// ==================================================
// IMPORTAR MODEL
// ==================================================

const clienteModel = require("../models/cliente_model.js");


// ==================================================
// CADASTRAR CLIENTE
// ==================================================

function cadastrarCliente(req, res) {

    // ==============================================
    // RECEBER DADOS DO FRONT-END
    // ==============================================

    const cliente = {

        nome: req.body.nome,

        cpf: req.body.cpf,

        dataNascimento: req.body.dataNascimento,

        telefone: req.body.telefone,

        email: req.body.email,

        senha: req.body.senha

    };


    // ==============================================
    // VALIDAR CAMPOS OBRIGATÓRIOS
    // ==============================================

    if (
        !cliente.nome ||
        !cliente.cpf ||
        !cliente.dataNascimento ||
        !cliente.telefone ||
        !cliente.email ||
        !cliente.senha
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    // ==============================================
    // CADASTRAR CLIENTE
    // ==============================================

    clienteModel.cadastrar(

        cliente,

        function (erro, resultado) {

            // ==========================================
            // VERIFICAR ERRO
            // ==========================================

            if (erro) {

                console.error(
                    "Erro ao cadastrar cliente:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao cadastrar cliente.",

                    erro: erro.message

                });

            }


            // ==========================================
            // RETORNAR SUCESSO
            // ==========================================

            return res.status(201).json({

                sucesso: true,

                mensagem:
                    "Cliente cadastrado com sucesso!",

                idCliente:
                    resultado.insertId

            });

        }

    );

}


// ==================================================
// LISTAR CLIENTES
// ==================================================

function listarClientes(req, res) {

    clienteModel.listar(

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao listar clientes:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar clientes."

                });

            }


            return res.status(200).json({

                sucesso: true,

                clientes: resultado

            });

        }

    );

}


// ==================================================
// BUSCAR CLIENTE POR ID
// ==================================================

function buscarClientePorId(req, res) {

    const idCliente = req.params.id;


    clienteModel.buscarPorId(

        idCliente,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao buscar cliente:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar cliente."

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Cliente não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                cliente: resultado[0]

            });

        }

    );

}


// ==================================================
// ATUALIZAR CLIENTE
// ==================================================

function atualizarCliente(req, res) {

    const idCliente = req.params.id;


    const cliente = {

        nome: req.body.nome,

        cpf: req.body.cpf,

        dataNascimento:
            req.body.dataNascimento,

        telefone:
            req.body.telefone,

        email:
            req.body.email,

        senha:
            req.body.senha

    };


    // ==============================================
    // VALIDAR CAMPOS
    // ==============================================

    if (
        !cliente.nome ||
        !cliente.cpf ||
        !cliente.dataNascimento ||
        !cliente.telefone ||
        !cliente.email
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    // ==============================================
    // ATUALIZAR CLIENTE
    // ==============================================

    clienteModel.atualizar(

        idCliente,

        cliente,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao atualizar cliente:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar cliente.",

                    erro: erro.message

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Cliente não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Cliente atualizado com sucesso!"

            });

        }

    );

}


// ==================================================
// EXCLUIR CLIENTE
// ==================================================

function excluirCliente(req, res) {

    const idCliente = req.params.id;


    clienteModel.excluir(

        idCliente,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao excluir cliente:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir cliente.",

                    erro: erro.message

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Cliente não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Cliente excluído com sucesso!"

            });

        }

    );

}


// ==================================================
// EXPORTAR CONTROLLERS
// ==================================================

module.exports = {

    cadastrarCliente,

    listarClientes,

    buscarClientePorId,

    atualizarCliente,

    excluirCliente

};