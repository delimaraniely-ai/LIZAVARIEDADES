//==========================================
// IMPORTA O MODEL
//==========================================

const cuponsHasProdutosModel = require("../model/cupons_has_produtos");


//==========================================
// CADASTRAR RELAÇÃO CUPOM E PRODUTO
//==========================================

function cadastrar(req, res) {

    const cupomProduto = req.body;


    // Validação dos campos obrigatórios

    if (
        !cupomProduto.cupons_idcupons ||
        !cupomProduto.produto_idproduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }


    cuponsHasProdutosModel.cadastrar(cupomProduto, (erro, resultado) => {


        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar relação cupom e produto."
            });

        }


        return res.status(201).json({

            sucesso: true,
            mensagem: "Cupom vinculado ao produto com sucesso!"

        });


    });

}



//==========================================
// LISTAR RELAÇÕES
//==========================================

function listar(req, res) {


    cuponsHasProdutosModel.listar((erro, resultado) => {


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


    cuponsHasProdutosModel.buscarPorId(id, (erro, resultado) => {


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

    const cupomProduto = req.body;



    cuponsHasProdutosModel.atualizar(
        id,
        cupomProduto,
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


    const id = req.params.id;



    cuponsHasProdutosModel.excluir(id, (erro, resultado) => {


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