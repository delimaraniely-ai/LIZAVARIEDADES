//==========================================
// IMPORTA O MODEL
//==========================================

const formaPagamentoModel = require("../model/formas_pagamento_model");


//==========================================
// CADASTRAR FORMA DE PAGAMENTO
//==========================================

function cadastrar(req, res) {

    const formaPagamento = req.body;


    // Validação dos campos obrigatórios

    if (
        !formaPagamento.nome ||
        !formaPagamento.link ||
        formaPagamento.ativo == null
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }



    formaPagamentoModel.cadastrar(
        formaPagamento,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar forma de pagamento."
                });

            }


            return res.status(201).json({

                sucesso: true,
                mensagem: "Forma de pagamento cadastrada com sucesso!",
                idFormaPagamento: resultado.insertId

            });


        }
    );


}



//==========================================
// LISTAR FORMAS DE PAGAMENTO
//==========================================

function listar(req, res) {


    formaPagamentoModel.listar((erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar formas de pagamento."
            });

        }


        res.json(resultado);


    });


}



//==========================================
// BUSCAR FORMA DE PAGAMENTO POR ID
//==========================================

function buscarPorId(req, res) {


    const id = req.params.id;



    formaPagamentoModel.buscarPorId(
        id,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao buscar forma de pagamento."
                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Forma de pagamento não encontrada."
                });

            }


            res.json(resultado[0]);


        }
    );


}



//==========================================
// ATUALIZAR FORMA DE PAGAMENTO
//==========================================

function atualizar(req, res) {


    const id = req.params.id;

    const formaPagamento = req.body;



    formaPagamentoModel.atualizar(
        id,
        formaPagamento,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar forma de pagamento."
                });

            }


            res.json({

                sucesso: true,
                mensagem: "Forma de pagamento atualizada com sucesso."

            });


        }
    );


}



//==========================================
// EXCLUIR FORMA DE PAGAMENTO
//==========================================

function excluir(req, res) {


    const id = req.params.id;



    formaPagamentoModel.excluir(
        id,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir forma de pagamento."
                });

            }


            res.json({

                sucesso: true,
                mensagem: "Forma de pagamento excluída com sucesso."

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