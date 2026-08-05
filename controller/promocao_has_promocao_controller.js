//==========================================
// IMPORTA O MODEL
//==========================================

const promocaoHasProdutosModel = require("../model/promocao_has_produtos_model.js");


//==========================================
// CADASTRAR RELAÇÃO PROMOÇÃO E PRODUTO
//==========================================

function cadastrar(req, res) {

    const promocaoProduto = req.body;


    // Validação dos campos obrigatórios

    if (
        !promocaoProduto.PROMOCAO_IDPROMOCAO ||
        !promocaoProduto.PRODUTO_IDPRODUTO
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe a promoção e o produto."
        });

    }


    promocaoHasProdutosModel.cadastrar(
        promocaoProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar relação promoção e produto."
                });

            }


            return res.status(201).json({

                sucesso: true,
                mensagem: "Produto vinculado à promoção com sucesso!"

            });


        }
    );

}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    promocaoHasProdutosModel.listar((erro, resultado) => {


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


    promocaoHasProdutosModel.buscarPorId(
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

    const promocaoProduto = req.body;



    promocaoHasProdutosModel.atualizar(
        id,
        promocaoProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar relação."
                });

            }


            res.json({

                sucesso: true,
                mensagem: "Relação promoção e produto atualizada com sucesso."

            });


        }
    );


}



//==========================================
// EXCLUIR RELAÇÃO
//==========================================

function excluir(req, res) {


    const id = req.params.id;



    promocaoHasProdutosModel.excluir(
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