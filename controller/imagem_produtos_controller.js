//==========================================
// IMPORTA O MODEL
//==========================================

const imagemProdutosModel = require("../model/imagem_produto_model");


//==========================================
// CADASTRAR IMAGEM DO PRODUTO
//==========================================

function cadastrar(req, res) {

    const Produto_idProduto = req.body.Produto_idProduto;

    // Arquivo enviado pelo FormData
    const arquivo = req.file;


    //==========================================
    // VERIFICAR ARQUIVO
    //==========================================

    if (!arquivo) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Selecione uma imagem."

        });

    }


    //==========================================
    // VERIFICAR PRODUTO
    //==========================================

    if (!Produto_idProduto) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Informe o produto."

        });

    }


    //==========================================
    // CRIAR OBJETO
    //==========================================

    const imagem = {

        arquivo: arquivo.filename,

        Produto_idProduto: Number(Produto_idProduto)

    };


    console.log("Imagem que será cadastrada:", imagem);


    //==========================================
    // CADASTRAR NO BANCO
    //==========================================

    imagemProdutosModel.cadastrar(
        imagem,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao cadastrar imagem:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao cadastrar imagem do produto.",

                    erro: erro.message

                });

            }


            return res.status(201).json({

                sucesso: true,

                mensagem:
                    "Imagem cadastrada com sucesso!",

                idImagem:
                    resultado.insertId,

                arquivo:
                    arquivo.filename

            });

        }
    );

}


//==========================================
// LISTAR IMAGENS
//==========================================

function listar(req, res) {

    imagemProdutosModel.listar(
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao listar imagens:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao listar imagens.",

                    erro: erro.message

                });

            }


            return res.status(200).json({

                sucesso: true,

                imagens: resultado

            });

        }
    );

}


//==========================================
// BUSCAR IMAGEM POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;


    if (!id) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "ID da imagem não informado."

        });

    }


    imagemProdutosModel.buscarPorId(
        id,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao buscar imagem:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao buscar imagem.",

                    erro: erro.message

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Imagem não encontrada."

                });

            }


            return res.status(200).json({

                sucesso: true,

                imagem: resultado[0]

            });

        }
    );

}


//==========================================
// ATUALIZAR IMAGEM
//==========================================

function atualizar(req, res) {

    const id = req.params.id;

    const Produto_idProduto =
        req.body.Produto_idProduto;

    const arquivo =
        req.file;


    if (!id) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "ID da imagem não informado."

        });

    }


    if (!Produto_idProduto) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Informe o produto."

        });

    }


    const imagem = {

        Produto_idProduto:
            Number(Produto_idProduto),

        arquivo:
            arquivo
                ? arquivo.filename
                : req.body.arquivo

    };


    imagemProdutosModel.atualizar(
        id,
        imagem,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao atualizar imagem:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao atualizar imagem.",

                    erro: erro.message

                });

            }


            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Imagem não encontrada."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Imagem atualizada com sucesso."

            });

        }
    );

}


//==========================================
// EXCLUIR IMAGEM
//==========================================

function excluir(req, res) {

    const id = req.params.id;


    if (!id) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "ID da imagem não informado."

        });

    }


    imagemProdutosModel.excluir(
        id,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao excluir imagem:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao excluir imagem.",

                    erro: erro.message

                });

            }


            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Imagem não encontrada."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Imagem excluída com sucesso."

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