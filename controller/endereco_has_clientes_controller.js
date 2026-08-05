//==========================================
// IMPORTA O MODEL
//==========================================

const enderecoHasClientesModel = require("../model/endereco_has_clientes_model.js");


//==========================================
// CADASTRAR RELAÇÃO ENDEREÇO E CLIENTE
//==========================================

function cadastrar(req, res) {

    const enderecoCliente = req.body;


    // Validação dos campos obrigatórios

    if (
        !enderecoCliente.endereco_idEndereco ||
        !enderecoCliente.cliente_idCliente
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o endereço e o cliente."
        });

    }


    enderecoHasClientesModel.cadastrar(
        enderecoCliente,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar relação endereço e cliente."
                });

            }


            return res.status(201).json({

                sucesso: true,
                mensagem: "Endereço vinculado ao cliente com sucesso!"

            });


        }
    );


}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    enderecoHasClientesModel.listar((erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar relações."
            });

        }


        res.json(resultado);


    });


}



//==========================================
// BUSCAR RELAÇÃO POR ID
//==========================================

function buscarPorId(req, res) {


    const id = req.params.id;



    enderecoHasClientesModel.buscarPorId(
        id,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao buscar relação."
                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Relação não encontrada."
                });

            }


            res.json(resultado[0]);


        }
    );


}



//==========================================
// ATUALIZAR RELAÇÃO
//==========================================

function atualizar(req, res) {


    const id = req.params.id;

    const enderecoCliente = req.body;



    enderecoHasClientesModel.atualizar(
        id,
        enderecoCliente,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar relação."
                });

            }


            res.json({

                sucesso: true,
                mensagem: "Relação atualizada com sucesso."

            });


        }
    );


}



//==========================================
// EXCLUIR RELAÇÃO
//==========================================

function excluir(req, res) {


    const id = req.params.id;



    enderecoHasClientesModel.excluir(
        id,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir relação."
                });

            }


            res.json({

                sucesso: true,
                mensagem: "Relação excluída com sucesso."

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