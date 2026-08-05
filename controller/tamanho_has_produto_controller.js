//==========================================
// IMPORTA O MODEL
//==========================================

const tamanhoHasProdutosModel = require("../model/tamanho_has_produtos_model.js");


//==========================================
// CADASTRAR RELAÇÃO TAMANHO E PRODUTO
//==========================================

function cadastrar(req, res) {

    const tamanhoProduto = req.body;


    // Validação dos campos obrigatórios

    if (
        !tamanhoProduto.TAMANHO_IDTAMANHO ||
        !tamanhoProduto.PRODUTO_IDPRODUTO
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o tamanho e o produto."
        });

    }


    tamanhoHasProdutosModel.cadastrar(
        tamanhoProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar relação tamanho e produto."
                });

            }


            return res.status(201).json({

                sucesso: true,
                mensagem: "Tamanho vinculado ao produto com sucesso!"

            });


        }
    );


}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    tamanhoHasProdutosModel.listar((erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar relações tamanho e produto."
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



    tamanhoHasProdutosModel.buscarPorId(
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
                    mensagem: "Relação tamanho e produto não encontrada."
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

    const tamanhoProduto = req.body;



    tamanhoHasProdutosModel.atualizar(
        id,
        tamanhoProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar relação."
                });

            }


            res.json({

                sucesso: true,
                mensagem: "Relação tamanho e produto atualizada com sucesso."

            });


        }
    );


}



//==========================================
// EXCLUIR RELAÇÃO
//==========================================

function excluir(req, res) {


    const id = req.params.id;



    tamanhoHasProdutosModel.excluir(
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