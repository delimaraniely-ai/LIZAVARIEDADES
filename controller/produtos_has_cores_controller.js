//==========================================
// IMPORTA O MODEL
//==========================================

const produtosHasCoresModel = require("../model/produtos_has_cores_model.js");


//==========================================
// CADASTRAR RELAÇÃO PRODUTO E CORES
//==========================================

function cadastrar(req, res) {


    const produtoCores = req.body;


    // Validação dos campos obrigatórios

    if (
        !produtoCores.PRODUTO_IDPRODUTO ||
        !produtoCores.CORES_IDCORES
    ) {


        return res.status(400).json({

            sucesso: false,
            mensagem: "Informe o produto e a cor."

        });


    }



    produtosHasCoresModel.cadastrar(produtoCores, (erro, resultado) => {



        if (erro) {


            return res.status(500).json({

                sucesso: false,
                mensagem: "Erro ao cadastrar relação produto e cores.",
                erro: erro

            });


        }



        return res.status(201).json({


            sucesso: true,

            mensagem: "Cor vinculada ao produto com sucesso!",

            idProdutoCor: resultado.insertId


        });



    });



}




//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {



    produtosHasCoresModel.listar((erro, resultado) => {



        if (erro) {


            return res.status(500).json({

                sucesso: false,

                mensagem: "Erro ao listar relações produto e cores."

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



    produtosHasCoresModel.buscarPorId(id, (erro, resultado) => {



        if (erro) {


            return res.status(500).json({

                sucesso: false,

                mensagem: "Erro ao buscar relação produto e cores."

            });


        }




        if (resultado.length === 0) {


            return res.status(404).json({

                sucesso: false,

                mensagem: "Relação produto e cor não encontrada."

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

    const produtoCores = req.body;



    produtosHasCoresModel.atualizar(id, produtoCores, (erro, resultado) => {



        if (erro) {



            return res.status(500).json({

                sucesso: false,

                mensagem: "Erro ao atualizar relação produto e cores."

            });



        }




        res.json({


            sucesso: true,

            mensagem: "Relação produto e cor atualizada com sucesso."


        });



    });



}





//==========================================
// EXCLUIR RELAÇÃO
//==========================================

function excluir(req, res) {



    const id = req.params.id;



    produtosHasCoresModel.excluir(id, (erro, resultado) => {



        if (erro) {



            return res.status(500).json({


                sucesso: false,

                mensagem: "Erro ao excluir relação produto e cores."


            });



        }




        res.json({



            sucesso: true,

            mensagem: "Relação produto e cor excluída com sucesso."



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