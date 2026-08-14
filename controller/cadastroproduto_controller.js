// ==================================================
// IMPORTAR MODEL
// ==================================================

const produtoModel =
    require("../models/produto_model.js");


// ==================================================
// CADASTRAR PRODUTO
// ==================================================

function cadastrarProduto(req, res) {

    console.log("=================================");
    console.log("DADOS RECEBIDOS - PRODUTO");
    console.log(req.body);
    console.log("=================================");


    // ==============================================
    // RECEBER DADOS
    // ==============================================

    const produto = {

        nome: req.body.nome,

        descricao: req.body.descricao,

        codigo: req.body.codigo,

        preco_antigo:
            req.body.preco_antigo,

        preco_promocional:
            req.body.preco_promocional !== undefined &&
                req.body.preco_promocional !== null &&
                req.body.preco_promocional !== ""
                ? req.body.preco_promocional
                : null,

        quantidade_estoque:
            req.body.quantidade_estoque,

        ativo:
            req.body.ativo !== undefined
                ? req.body.ativo
                : true,

        Loja_idLoja:
            req.body.Loja_idLoja,

        Marca_idMarca:
            req.body.Marca_idMarca,

        Categoria_idCategoria:
            req.body.Categoria_idCategoria

    };


    // ==============================================
    // VALIDAR CAMPOS OBRIGATÓRIOS
    // ==============================================

    if (!produto.nome) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Digite o nome do produto."

        });

    }


    if (!produto.descricao) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Digite a descrição do produto."

        });

    }


    if (!produto.codigo) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Digite o código do produto."

        });

    }


    if (
        produto.preco_antigo === undefined ||
        produto.preco_antigo === null ||
        produto.preco_antigo === ""
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Digite o preço antigo."

        });

    }


    if (
        produto.quantidade_estoque === undefined ||
        produto.quantidade_estoque === null ||
        produto.quantidade_estoque === ""
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Digite a quantidade em estoque."

        });

    }


    if (!produto.Loja_idLoja) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Selecione uma loja."

        });

    }


    if (!produto.Marca_idMarca) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Selecione uma marca."

        });

    }


    if (!produto.Categoria_idCategoria) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Selecione uma categoria."

        });

    }


    // ==============================================
    // CADASTRAR NO BANCO
    // ==============================================

    produtoModel.cadastrar(

        produto,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro MySQL ao cadastrar produto:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao cadastrar produto.",

                    erro:
                        erro.message

                });

            }


            // ==========================================
            // SUCESSO
            // ==========================================

            console.log(
                "Produto cadastrado. ID:",
                resultado.insertId
            );


            return res.status(201).json({

                sucesso: true,

                mensagem:
                    "Produto cadastrado com sucesso!",

                idProduto:
                    resultado.insertId

            });

        }

    );

}


// ==================================================
// LISTAR PRODUTOS
// ==================================================

function listarProdutos(req, res) {

    produtoModel.listar(

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao listar produtos:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar produtos.",

                    erro:
                        erro.message

                });

            }


            return res.status(200).json({

                sucesso: true,

                produtos: resultado

            });

        }

    );

}


// ==================================================
// BUSCAR PRODUTO POR ID
// ==================================================

function buscarProdutoPorId(req, res) {

    const idProduto =
        req.params.id;


    produtoModel.buscarPorId(

        idProduto,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao buscar produto:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar produto.",

                    erro:
                        erro.message

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

                produto:
                    resultado[0]

            });

        }

    );

}


// ==================================================
// ATUALIZAR PRODUTO
// ==================================================

function atualizarProduto(req, res) {

    const idProduto =
        req.params.id;


    const produto = {

        nome:
            req.body.nome,

        descricao:
            req.body.descricao,

        codigo:
            req.body.codigo,

        preco_antigo:
            req.body.preco_antigo,

        preco_promocional:
            req.body.preco_promocional !== undefined &&
                req.body.preco_promocional !== null &&
                req.body.preco_promocional !== ""
                ? req.body.preco_promocional
                : null,

        quantidade_estoque:
            req.body.quantidade_estoque,

        ativo:
            req.body.ativo,

        Loja_idLoja:
            req.body.Loja_idLoja,

        Marca_idMarca:
            req.body.Marca_idMarca,

        Categoria_idCategoria:
            req.body.Categoria_idCategoria

    };


    produtoModel.atualizar(

        idProduto,

        produto,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao atualizar produto:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar produto.",

                    erro:
                        erro.message

                });

            }


            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Produto atualizado com sucesso!"

            });

        }

    );

}


// ==================================================
// EXCLUIR PRODUTO
// ==================================================

function excluirProduto(req, res) {

    const idProduto =
        req.params.id;


    produtoModel.excluir(

        idProduto,

        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao excluir produto:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir produto.",

                    erro:
                        erro.message

                });

            }


            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Produto excluído com sucesso!"

            });

        }

    );

}


// ==================================================
// EXPORTAR CONTROLLER
// ==================================================

module.exports = {

    cadastrarProduto,

    listarProdutos,

    buscarProdutoPorId,

    atualizarProduto,

    excluirProduto

};