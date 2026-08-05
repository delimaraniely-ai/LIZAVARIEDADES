//==========================================
// IMPORTA O MODEL
//==========================================

const cuponsHasCategoriaModel = require("../model/cupons_has_categoria_model.js");


//==========================================
// CADASTRAR RELAÇÃO CUPOM E CATEGORIA
//==========================================

function cadastrar(req, res) {

    const cupomCategoria = req.body;



    // Validação

    if (
        !cupomCategoria.Cupons_idCupons ||
        !cupomCategoria.Categoria_idCategoria
    ) {

        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe o cupom e a categoria."

        });

    }




    cuponsHasCategoriaModel.cadastrar(
        cupomCategoria,
        (erro, resultado) => {


            if (erro) {

                return res.status(500).json({

                    sucesso: false,
                    mensagem: "Erro ao cadastrar relação cupom e categoria."

                });

            }



            res.status(201).json({

                sucesso: true,
                mensagem: "Cupom vinculado à categoria com sucesso!",
                id: resultado.insertId

            });



        });



}





//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    cuponsHasCategoriaModel.listar((erro, resultado) => {


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



    cuponsHasCategoriaModel.buscarPorId(
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



        });



}





//==========================================
// ATUALIZAR RELAÇÃO
//==========================================

function atualizar(req, res) {


    const id = req.params.id;

    const cupomCategoria = req.body;




    cuponsHasCategoriaModel.atualizar(
        id,
        cupomCategoria,
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



        });



}





//==========================================
// EXCLUIR RELAÇÃO
//==========================================

function excluir(req, res) {


    const id = req.params.id;




    cuponsHasCategoriaModel.excluir(
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