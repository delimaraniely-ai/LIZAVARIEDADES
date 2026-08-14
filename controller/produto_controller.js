
//==========================================
// IMPORTA O MODEL
//==========================================

const produtoModel = require("../model/produto_model.js");



//==========================================
// CADASTRAR PRODUTO
//==========================================

function cadastrar(req, res) {

    const produto = req.body;


    //==========================================
    // VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS
    //==========================================

    if (
        !produto.nome ||
        !produto.descricao ||
        !produto.codigo ||
        produto.preco_antigo == null ||
        produto.preco_promocional == null ||
        produto.quantidade_estoque == null ||
        produto.Loja_idLoja == null ||
        produto.Marca_idMarca == null ||
        produto.Categoria_idCategoria == null
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Preencha todos os campos obrigatórios."

        });

    }


    //==========================================
    // CADASTRAR NO BANCO
    //==========================================

    produtoModel.cadastrar(produto, (erro, resultado) => {

        if (erro) {

            console.error("Erro ao cadastrar produto:", erro);

            return res.status(500).json({

                sucesso: false,

                mensagem: "Erro ao cadastrar produto.",

                erro: erro.message

            });

        }


        return res.status(201).json({

            sucesso: true,

            mensagem: "Produto cadastrado com sucesso!",

            idProduto: resultado.insertId

        });

    });

}



//==========================================
// LISTAR PRODUTOS
//==========================================

function listar(req, res) {

    produtoModel.listar((erro, resultado) => {

        if (erro) {

            console.error("Erro ao listar produtos:", erro);

            return res.status(500).json({

                sucesso: false,

                mensagem: "Erro ao listar produtos.",

                erro: erro.message

            });

        }


        return res.status(200).json({

            sucesso: true,

            produtos: resultado

        });

    });

}



//==========================================
// BUSCAR PRODUTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;


    //==========================================
    // VERIFICAR ID
    //==========================================

    if (!id) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "ID do produto não informado."

        });

    }


    //==========================================
    // BUSCAR NO BANCO
    //==========================================

    produtoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.error("Erro ao buscar produto:", erro);

            return res.status(500).json({

                sucesso: false,

                mensagem: "Erro ao buscar produto.",

                erro: erro.message

            });

        }


        //==========================================
        // PRODUTO NÃO ENCONTRADO
        //==========================================

        if (resultado.length === 0) {

            return res.status(404).json({

                sucesso: false,

                mensagem: "Produto não encontrado."

            });

        }


        return res.status(200).json({

            sucesso: true,

            produto: resultado[0]

        });

    });

}



//==========================================
// ATUALIZAR PRODUTO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;

    const produto = req.body;


    //==========================================
    // VERIFICAR ID
    //==========================================

    if (!id) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "ID do produto não informado."

        });

    }


    //==========================================
    // VALIDAÇÃO DOS CAMPOS
    //==========================================

    if (
        !produto.nome ||
        !produto.descricao ||
        !produto.codigo ||
        produto.preco_antigo == null ||
        produto.preco_promocional == null ||
        produto.quantidade_estoque == null ||
        produto.Loja_idLoja == null ||
        produto.Marca_idMarca == null ||
        produto.Categoria_idCategoria == null
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Preencha todos os campos obrigatórios."

        });

    }


    //==========================================
    // ATUALIZAR NO BANCO
    //==========================================

    produtoModel.atualizar(id, produto, (erro, resultado) => {

        if (erro) {

            console.error("Erro ao atualizar produto:", erro);

            return res.status(500).json({

                sucesso: false,

                mensagem: "Erro ao atualizar produto.",

                erro: erro.message

            });

        }


        //==========================================
        // VERIFICAR SE EXISTE PRODUTO
        //==========================================

        if (resultado.affectedRows === 0) {

            return res.status(404).json({

                sucesso: false,

                mensagem: "Produto não encontrado."

            });

        }


        return res.status(200).json({

            sucesso: true,

            mensagem: "Produto atualizado com sucesso."

        });

    });

}



//==========================================
// EXCLUIR PRODUTO
//==========================================

function excluir(req, res) {

    const id = req.params.id;


    //==========================================
    // VERIFICAR ID
    //==========================================

    if (!id) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "ID do produto não informado."

        });

    }


    //==========================================
    // EXCLUIR DO BANCO
    //==========================================

    produtoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            console.error("Erro ao excluir produto:", erro);

            return res.status(500).json({

                sucesso: false,

                mensagem: "Erro ao excluir produto.",

                erro: erro.message

            });

        }


        //==========================================
        // VERIFICAR SE EXISTE PRODUTO
        //==========================================

        if (resultado.affectedRows === 0) {

            return res.status(404).json({

                sucesso: false,

                mensagem: "Produto não encontrado."

            });

        }


        return res.status(200).json({

            sucesso: true,

            mensagem: "Produto excluído com sucesso."

        });

    });

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

