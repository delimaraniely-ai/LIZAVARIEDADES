const produtoModel =
    require("../models/produto_model.js");


// ======================================================
// BUSCAR PRODUTO POR ID
// ======================================================

function buscarPorId(req, res) {

    const idProduto =
        req.params.idProduto;


    if (!idProduto) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "ID do produto não informado."

        });

    }


    produtoModel.buscarPorId(

        idProduto,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao buscar produto:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar produto."

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                produto: resultado[0]

            });

        }

    );

}


module.exports = {

    buscarPorId

};