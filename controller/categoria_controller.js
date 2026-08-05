//==========================================
// IMPORTA O MODEL
//==========================================

const categoriaModel = require("../model/categoria_model.js");



//==========================================
// CADASTRAR CATEGORIA
//==========================================

function cadastrar(req, res) {


    const categoria = req.body;



    if (!categoria.nome) {

        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe o nome da categoria."

        });

    }



    categoriaModel.cadastrar(
        categoria,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao cadastrar categoria."

                });

            }



            res.status(201).json({

                sucesso: true,
                mensagem: "Categoria cadastrada com sucesso!",
                idCategoria: resultado.insertId

            });


        }
    );

}



//==========================================
// LISTAR CATEGORIAS
//==========================================

function listar(req, res) {


    categoriaModel.listar(
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao listar categorias."

                });

            }



            res.json(resultado);


        }
    );

}



//==========================================
// BUSCAR CATEGORIA POR ID
//==========================================

function buscarPorId(req, res) {


    const id = req.params.id;



    categoriaModel.buscarPorId(
        id,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao buscar categoria."

                });

            }



            if (resultado.length === 0) {

                return res.status(404).json({

                    sucesso: false,
                    mensagem: "Categoria não encontrada."

                });

            }



            res.json(resultado[0]);


        }
    );

}



//==========================================
// ATUALIZAR CATEGORIA
//==========================================

function atualizar(req, res) {


    const id = req.params.id;

    const categoria = req.body;



    if (!categoria.nome) {

        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe o nome da categoria."

        });

    }



    categoriaModel.atualizar(
        id,
        categoria,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao atualizar categoria."

                });

            }



            res.json({

                sucesso: true,
                mensagem: "Categoria atualizada com sucesso."

            });


        }
    );

}



//==========================================
// EXCLUIR CATEGORIA
//==========================================

function excluir(req, res) {


    const id = req.params.id;



    categoriaModel.excluir(
        id,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao excluir categoria."

                });

            }



            res.json({

                sucesso: true,
                mensagem: "Categoria excluída com sucesso."

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