// ======================================================
// IMPORTAR MODEL
// ======================================================

const enderecoModel = require("../models/endereco_model.js");


// ======================================================
// CADASTRAR ENDEREÇO
// ======================================================

function cadastrarEndereco(req, res) {

    const endereco = {

        cep: req.body.cep,

        logradouro: req.body.logradouro,

        numero: req.body.numero,

        complemento: req.body.complemento || "",

        bairro: req.body.bairro,

        cidade: req.body.cidade,

        estado: req.body.estado

    };


    // ==================================================
    // VALIDAR CAMPOS
    // ==================================================

    if (
        !endereco.cep ||
        !endereco.logradouro ||
        !endereco.numero ||
        !endereco.bairro ||
        !endereco.cidade ||
        !endereco.estado
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Preencha todos os campos obrigatórios."

        });

    }


    // ==================================================
    // CADASTRAR
    // ==================================================

    enderecoModel.cadastrar(

        endereco,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao cadastrar endereço:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao cadastrar endereço.",

                    erro: erro.message

                });

            }


            return res.status(201).json({

                sucesso: true,

                mensagem: "Endereço cadastrado com sucesso!",

                idEndereco: resultado.insertId

            });

        }

    );

}


// ======================================================
// LISTAR ENDEREÇOS
// ======================================================

function listarEnderecos(req, res) {

    enderecoModel.listar(

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao listar endereços:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao listar endereços."

                });

            }


            return res.status(200).json({

                sucesso: true,

                enderecos: resultado

            });

        }

    );

}


// ======================================================
// BUSCAR ENDEREÇO POR ID
// ======================================================

function buscarEnderecoPorId(req, res) {

    const idEndereco = req.params.id;


    enderecoModel.buscarPorId(

        idEndereco,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao buscar endereço:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao buscar endereço."

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Endereço não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                endereco: resultado[0]

            });

        }

    );

}


// ======================================================
// ATUALIZAR ENDEREÇO
// ======================================================

function atualizarEndereco(req, res) {

    const idEndereco = req.params.id;


    const endereco = {

        idEndereco: idEndereco,

        cep: req.body.cep,

        logradouro: req.body.logradouro,

        numero: req.body.numero,

        complemento: req.body.complemento || "",

        bairro: req.body.bairro,

        cidade: req.body.cidade,

        estado: req.body.estado

    };


    if (
        !endereco.cep ||
        !endereco.logradouro ||
        !endereco.numero ||
        !endereco.bairro ||
        !endereco.cidade ||
        !endereco.estado
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Preencha todos os campos obrigatórios."

        });

    }


    enderecoModel.atualizar(

        endereco,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao atualizar endereço:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao atualizar endereço."

                });

            }


            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Endereço não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem: "Endereço atualizado com sucesso!"

            });

        }

    );

}


// ======================================================
// EXCLUIR ENDEREÇO
// ======================================================

function excluirEndereco(req, res) {

    const idEndereco = req.params.id;


    enderecoModel.excluir(

        idEndereco,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao excluir endereço:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao excluir endereço."

                });

            }


            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Endereço não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem: "Endereço excluído com sucesso!"

            });

        }

    );

}


// ======================================================
// EXPORTAR
// ======================================================

module.exports = {

    cadastrarEndereco,

    listarEnderecos,

    buscarEnderecoPorId,

    atualizarEndereco,

    excluirEndereco

};