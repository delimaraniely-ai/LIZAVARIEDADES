//==========================================
// IMPORTA O MODEL
//==========================================

const freteEnderecoModel = require("../model/frete_endereco_model.js");


//==========================================
// CADASTRAR RELAÇÃO FRETE E ENDEREÇO
//==========================================

function cadastrar(req, res) {

    const freteEndereco = req.body;


    // Validação dos campos obrigatórios

    if (
        !freteEndereco.frete_idfrete ||
        !freteEndereco.endereco_idEndereco
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o frete e o endereço."
        });

    }


    freteEnderecoModel.cadastrar(
        freteEndereco,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar relação frete e endereço."
                });

            }


            return res.status(201).json({

                sucesso: true,
                mensagem: "Frete vinculado ao endereço com sucesso!",
                idFreteEndereco: resultado.insertId

            });


        }
    );


}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    freteEnderecoModel.listar((erro, resultado) => {


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



    freteEnderecoModel.buscarPorId(
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

    const freteEndereco = req.body;



    freteEnderecoModel.atualizar(
        id,
        freteEndereco,
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



    freteEnderecoModel.excluir(
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