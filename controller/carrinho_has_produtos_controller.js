//==========================================
// IMPORTA O MODEL
//==========================================

const carrinhoHasProdutosModel = require("../model/carrinho_has_produtos_model.js");



//==========================================
// CADASTRAR RELAÇÃO CARRINHO E PRODUTO
//==========================================

function cadastrar(req, res) {


    const carrinhoProduto = req.body;



    if (
        !carrinhoProduto.CARRINHO_IDCARRINHO ||
        !carrinhoProduto.Produto_IDPRODUTO
    ) {

        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe o carrinho e o produto."

        });

    }



    carrinhoHasProdutosModel.cadastrar(
        carrinhoProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao vincular produto ao carrinho."

                });

            }



            res.status(201).json({

                sucesso: true,
                mensagem: "Produto vinculado ao carrinho com sucesso!"

            });


        }
    );

}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    carrinhoHasProdutosModel.listar(
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao listar relações."

                });

            }



            res.json(resultado);


        }
    );

}



//==========================================
// BUSCAR RELAÇÃO
//==========================================

function buscarPorId(req, res) {


    const carrinho = req.params.carrinho;

    const produto = req.params.produto;



    carrinhoHasProdutosModel.buscarPorId(
        carrinho,
        produto,
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


    const carrinhoAntigo = req.params.carrinho;

    const produtoAntigo = req.params.produto;


    const carrinhoProduto = req.body;



    carrinhoHasProdutosModel.atualizar(
        carrinhoAntigo,
        produtoAntigo,
        carrinhoProduto,
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


    const carrinho = req.params.carrinho;

    const produto = req.params.produto;



    carrinhoHasProdutosModel.excluir(
        carrinho,
        produto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao excluir relação."

                });

            }



            res.json({

                sucesso: true,
                mensagem: "Produto removido do carrinho com sucesso."

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