//==========================================
// IMPORTA O MODEL
//==========================================

const categoriaHasCuponsModel = require("../model/categoria_has_cupom_model");



//==========================================
// CADASTRAR RELAÇÃO CATEGORIA E CUPOM
//==========================================

function cadastrar(req, res) {


    const categoriaCupom = req.body;



    if (
        !categoriaCupom.categoria_idCategoria ||
        !categoriaCupom.cupom_idCupom
    ) {

        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe a categoria e o cupom."

        });

    }



    categoriaHasCuponsModel.cadastrar(
        categoriaCupom,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao vincular cupom à categoria."

                });

            }



            res.status(201).json({

                sucesso: true,
                mensagem: "Cupom vinculado à categoria com sucesso!"

            });


        }
    );

}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    categoriaHasCuponsModel.listar(
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


    const categoria = req.params.categoria;

    const cupom = req.params.cupom;



    categoriaHasCuponsModel.buscarPorId(
        categoria,
        cupom,
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


    const categoriaAntiga = req.params.categoria;

    const cupomAntigo = req.params.cupom;


    const categoriaCupom = req.body;



    categoriaHasCuponsModel.atualizar(
        categoriaAntiga,
        cupomAntigo,
        categoriaCupom,
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


    const categoria = req.params.categoria;

    const cupom = req.params.cupom;



    categoriaHasCuponsModel.excluir(
        categoria,
        cupom,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao excluir relação."

                });

            }



            res.json({

                sucesso: true,
                mensagem: "Cupom removido da categoria com sucesso."

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
