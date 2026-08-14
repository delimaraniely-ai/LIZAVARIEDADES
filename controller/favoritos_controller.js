const favoritoModel = require("../models/favorito_model.js");


// ======================================================
// CADASTRAR FAVORITO
// ======================================================

function cadastrar(req, res) {

    const {

        Cliente_idCliente,
        Produto_idProduto

    } = req.body;


    // ------------------------------------------
    // VALIDAR
    // ------------------------------------------

    if (
        !Cliente_idCliente ||
        !Produto_idProduto
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Cliente e produto são obrigatórios."

        });

    }


    // ------------------------------------------
    // VERIFICAR SE JÁ EXISTE
    // ------------------------------------------

    favoritoModel.buscar(

        Cliente_idCliente,

        Produto_idProduto,

        (erro, resultado) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao verificar favorito."

                });

            }


            if (resultado.length > 0) {

                return res.status(400).json({

                    sucesso: false,

                    mensagem:
                        "Este produto já está nos favoritos."

                });

            }


            // ------------------------------------------
            // CADASTRAR
            // ------------------------------------------

            favoritoModel.cadastrar(

                {
                    Cliente_idCliente,
                    Produto_idProduto
                },

                (erro, resultado) => {

                    if (erro) {

                        console.error(erro);

                        return res.status(500).json({

                            sucesso: false,

                            mensagem:
                                "Erro ao adicionar produto aos favoritos."

                        });

                    }


                    return res.status(201).json({

                        sucesso: true,

                        mensagem:
                            "Produto adicionado aos favoritos.",

                        idFavorito:
                            resultado.insertId

                    });

                }

            );

        }

    );

}


// ======================================================
// LISTAR FAVORITOS
// ======================================================

function listarPorCliente(req, res) {

    const idCliente =
        req.params.idCliente;


    if (!idCliente) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "ID do cliente não informado."

        });

    }


    favoritoModel.listarPorCliente(

        idCliente,

        (erro, resultado) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar favoritos."

                });

            }


            return res.status(200).json({

                sucesso: true,

                favoritos: resultado

            });

        }

    );

}


// ======================================================
// VERIFICAR FAVORITO
// ======================================================

function verificar(req, res) {

    const idCliente =
        req.params.idCliente;

    const idProduto =
        req.params.idProduto;


    if (
        !idCliente ||
        !idProduto
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Cliente e produto são obrigatórios."

        });

    }


    favoritoModel.buscar(

        idCliente,

        idProduto,

        (erro, resultado) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao verificar favorito."

                });

            }


            return res.status(200).json({

                sucesso: true,

                favorito:
                    resultado.length > 0

            });

        }

    );

}


// ======================================================
// EXCLUIR FAVORITO
// ======================================================

function excluir(req, res) {

    const idCliente =
        req.params.idCliente;

    const idProduto =
        req.params.idProduto;


    if (
        !idCliente ||
        !idProduto
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Cliente e produto são obrigatórios."

        });

    }


    favoritoModel.excluir(

        idCliente,

        idProduto,

        (erro, resultado) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao remover favorito."

                });

            }


            if (resultado.affectedRows === 0) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Favorito não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Produto removido dos favoritos."

            });

        }

    );

}


// ======================================================
// EXPORTAR
// ======================================================

module.exports = {

    cadastrar,
    listarPorCliente,
    verificar,
    excluir

};