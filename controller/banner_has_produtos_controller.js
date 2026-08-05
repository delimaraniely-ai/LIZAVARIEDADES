//==========================================
// IMPORTA O MODEL
//==========================================

const bannerHasProdutosModel = require("../model/banner_has_produtos_model.js");



//==========================================
// CADASTRAR RELAÇÃO BANNER E PRODUTO
//==========================================

function cadastrar(req, res) {


    const bannerProduto = req.body;



    if (
        !bannerProduto.BANNER_IDBANNER ||
        !bannerProduto.Produto_IDPRODUTO
    ) {

        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe o banner e o produto."

        });

    }



    bannerHasProdutosModel.cadastrar(
        bannerProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao vincular produto ao banner."

                });

            }



            res.status(201).json({

                sucesso: true,
                mensagem: "Produto vinculado ao banner com sucesso!"

            });


        }
    );

}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    bannerHasProdutosModel.listar(
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao listar vínculos."

                });

            }



            res.json(resultado);


        }
    );

}



//==========================================
// BUSCAR POR BANNER E PRODUTO
//==========================================

function buscarPorId(req, res) {


    const banner = req.params.banner;

    const produto = req.params.produto;



    bannerHasProdutosModel.buscarPorId(
        banner,
        produto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao buscar vínculo."

                });

            }



            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,
                    mensagem: "Vínculo não encontrado."

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


    const bannerAntigo = req.params.banner;

    const produtoAntigo = req.params.produto;


    const bannerProduto = req.body;



    bannerHasProdutosModel.atualizar(
        bannerAntigo,
        produtoAntigo,
        bannerProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao atualizar vínculo."

                });

            }



            res.json({

                sucesso: true,
                mensagem: "Vínculo atualizado com sucesso."

            });


        }
    );

}



//==========================================
// EXCLUIR RELAÇÃO
//==========================================

function excluir(req, res) {


    const banner = req.params.banner;

    const produto = req.params.produto;



    bannerHasProdutosModel.excluir(
        banner,
        produto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao excluir vínculo."

                });

            }



            res.json({

                sucesso: true,
                mensagem: "Vínculo excluído com sucesso."

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