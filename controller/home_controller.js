const produtoModel =
    require("../models/produto_model.js");


// ======================================================
// LISTAR PRODUTOS
// GET /produtos
// ======================================================

function listar(req, res) {

    produtoModel.listar(
        (erro, resultados) => {

            if (erro) {

                console.error(
                    "Erro ao listar produtos:",
                    erro
                );

                return res.status(500).json({

                    mensagem:
                        "Erro ao listar produtos.",

                    erro: erro.message

                });

            }


            return res.status(200).json({

                produtos: resultados

            });

        }
    );

}



// ======================================================
// BUSCAR PRODUTO POR ID
// GET /produtos/:id
// ======================================================

function buscarPorId(req, res) {

    const idProduto =
        req.params.id;


    if (!idProduto) {

        return res.status(400).json({

            mensagem:
                "ID do produto não informado."

        });

    }


    produtoModel.buscarPorId(
        idProduto,
        (erro, resultados) => {

            if (erro) {

                console.error(
                    "Erro ao buscar produto:",
                    erro
                );

                return res.status(500).json({

                    mensagem:
                        "Erro ao buscar produto.",

                    erro: erro.message

                });

            }


            if (
                resultados.length === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                produto:
                    resultados[0]

            });

        }
    );

}



// ======================================================
// CADASTRAR
// POST /produtos
// ======================================================

function cadastrar(req, res) {

    const produto =
        req.body;


    if (!produto.nome) {

        return res.status(400).json({

            mensagem:
                "Nome do produto é obrigatório."

        });

    }


    if (!produto.descricao) {

        return res.status(400).json({

            mensagem:
                "Descrição do produto é obrigatória."

        });

    }


    if (!produto.codigo) {

        return res.status(400).json({

            mensagem:
                "Código do produto é obrigatório."

        });

    }


    produtoModel.cadastrar(
        produto,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao cadastrar produto:",
                    erro
                );

                return res.status(500).json({

                    mensagem:
                        "Erro ao cadastrar produto.",

                    erro: erro.message

                });

            }


            return res.status(201).json({

                mensagem:
                    "Produto cadastrado com sucesso.",

                idProduto:
                    resultado.insertId

            });

        }
    );

}



// ======================================================
// ATUALIZAR
// PUT /produtos/:id
// ======================================================

function atualizar(req, res) {

    const idProduto =
        req.params.id;

    const produto =
        req.body;


    produtoModel.atualizar(
        idProduto,
        produto,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao atualizar produto:",
                    erro
                );

                return res.status(500).json({

                    mensagem:
                        "Erro ao atualizar produto.",

                    erro: erro.message

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                mensagem:
                    "Produto atualizado com sucesso."

            });

        }
    );

}



// ======================================================
// EXCLUIR
// DELETE /produtos/:id
// ======================================================

function excluir(req, res) {

    const idProduto =
        req.params.id;


    produtoModel.excluir(
        idProduto,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao excluir produto:",
                    erro
                );

                return res.status(500).json({

                    mensagem:
                        "Erro ao excluir produto.",

                    erro: erro.message

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                mensagem:
                    "Produto excluído com sucesso."

            });

        }
    );

}



// ======================================================
// EXPORTAR
// ======================================================

module.exports = {

    listar,
    buscarPorId,
    cadastrar,
    atualizar,
    excluir

};