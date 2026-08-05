//==========================================
// IMPORTA O MODEL
//==========================================

const pedidosHasProdutosModel = require("../model/pedidos_has_produtos_model.js");


//==========================================
// CADASTRAR RELAÇÃO PEDIDO E PRODUTO
//==========================================

function cadastrar(req, res) {


    const pedidoProduto = req.body;



    // Validação dos campos obrigatórios

    if (
        !pedidoProduto.Pedidos_idPedidos ||
        !pedidoProduto.Produto_idProduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o pedido e o produto."
        });

    }



    pedidosHasProdutosModel.cadastrar(
        pedidoProduto,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar relação pedido e produto."
                });

            }



            return res.status(201).json({

                sucesso: true,
                mensagem: "Produto vinculado ao pedido com sucesso!",
                idPedidosProduto: resultado.insertId

            });


        }
    );


}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    pedidosHasProdutosModel.listar((erro, resultado) => {


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



    pedidosHasProdutosModel.buscarPorId(
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

    const pedidoProduto = req.body;



    pedidosHasProdutosModel.atualizar(
        id,
        pedidoProduto,
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



    pedidosHasProdutosModel.excluir(
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