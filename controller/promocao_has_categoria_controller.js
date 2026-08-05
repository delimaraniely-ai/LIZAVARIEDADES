//==========================================
// IMPORTA O MODEL
//==========================================

const promocaoHasCategoriaModel = require("../model/promocao_has_categoria");


//==========================================
// CADASTRAR RELAÇÃO PROMOÇÃO E CATEGORIA
//==========================================

function cadastrar(req, res) {


    const promocaoCategoria = req.body;



    // Validação dos campos obrigatórios

    if (
        !promocaoCategoria.PROMOCAO_IDPROMOCAO ||
        !promocaoCategoria.CATEGORIA_IDCATEGORIA
    ) {


        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe a promoção e a categoria."

        });


    }




    promocaoHasCategoriaModel.cadastrar(promocaoCategoria, (erro, resultado) => {



        if (erro) {


            return res.status(500).json({

                sucesso: false,
                mensagem: "Erro ao cadastrar relação promoção e categoria.",
                erro: erro

            });


        }




        return res.status(201).json({



            sucesso: true,

            mensagem: "Promoção vinculada à categoria com sucesso!",

            idPromocaoCategoria: resultado.insertId



        });



    });



}





//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {



    promocaoHasCategoriaModel.listar((erro, resultado) => {



        if (erro) {



            return res.status(500).json({


                sucesso: false,

                mensagem: "Erro ao listar relações promoção e categoria."


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



    promocaoHasCategoriaModel.buscarPorId(id, (erro, resultado) => {



        if (erro) {



            return res.status(500).json({


                sucesso: false,

                mensagem: "Erro ao buscar relação promoção e categoria."


            });



        }





        if (resultado.length === 0) {



            return res.status(404).json({


                sucesso: false,

                mensagem: "Relação promoção e categoria não encontrada."


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

    const promocaoCategoria = req.body;



    promocaoHasCategoriaModel.atualizar(id, promocaoCategoria, (erro, resultado) => {



        if (erro) {



            return res.status(500).json({


                sucesso: false,

                mensagem: "Erro ao atualizar relação promoção e categoria."


            });



        }





        res.json({



            sucesso: true,

            mensagem: "Relação promoção e categoria atualizada com sucesso."



        });



    });



}





//==========================================
// EXCLUIR RELAÇÃO
//==========================================

function excluir(req, res) {



    const id = req.params.id;



    promocaoHasCategoriaModel.excluir(id, (erro, resultado) => {



        if (erro) {



            return res.status(500).json({


                sucesso: false,

                mensagem: "Erro ao excluir relação promoção e categoria."


            });



        }





        res.json({



            sucesso: true,

            mensagem: "Relação promoção e categoria excluída com sucesso."



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