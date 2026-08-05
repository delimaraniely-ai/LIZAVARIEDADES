//==========================================
// IMPORTA O MODEL
//==========================================

const avaliacaoHasProdutosModel = require("../model/avaliacao_produto_model");



//==========================================
// CADASTRAR RELAÇÃO AVALIAÇÃO E PRODUTO
//==========================================

function cadastrar(req, res) {


    const avaliacaoProduto = req.body;


    if (
        !avaliacaoProduto.AVALIACAO_IDAVALIACAO ||
        !avaliacaoProduto.Produto_IDPRODUTO
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe a avaliação e o produto."
        });

    }



    avaliacaoHasProdutosModel.cadastrar(
        avaliacaoProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao vincular avaliação ao produto."
                });

            }


            res.status(201).json({

                sucesso: true,
                mensagem: "Avaliação vinculada ao produto com sucesso."

            });


        }
    );

}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    avaliacaoHasProdutosModel.listar(
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao listar avaliações dos produtos."
                });

            }


            res.json(resultado);


        }
    );

}



//==========================================
// BUSCAR RELAÇÃO
//==========================================

function buscar(req, res) {


    const avaliacaoId = req.params.avaliacaoId;

    const produtoId = req.params.produtoId;



    avaliacaoHasProdutosModel.buscar(
        avaliacaoId,
        produtoId,
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
                    mensagem: "Avaliação do produto não encontrada."

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


    const avaliacaoAntiga = req.params.avaliacaoId;

    const produtoAntigo = req.params.produtoId;


    const avaliacaoProduto = req.body;



    avaliacaoHasProdutosModel.atualizar(
        avaliacaoAntiga,
        produtoAntigo,
        avaliacaoProduto,
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


    const avaliacaoId = req.params.avaliacaoId;

    const produtoId = req.params.produtoId;



    avaliacaoHasProdutosModel.excluir(
        avaliacaoId,
        produtoId,
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
    buscar,
    atualizar,
    excluir

};