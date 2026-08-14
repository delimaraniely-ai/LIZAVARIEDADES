// ==========================================
// IMPORTA O MODEL
// ==========================================

const tamanhoModel = require("../model/tamanho_model.js");


// ==========================================
// CADASTRAR TAMANHO
// ==========================================

function cadastrar(req, res) {

    const tamanho = req.body;

    // Validação dos campos obrigatórios
    if (!tamanho.tm || tamanho.tm.trim() === "") {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o tamanho (tm)."
        });

    }

    tamanhoModel.cadastrar(tamanho, (erro, resultado) => {

        if (erro) {

            console.error("Erro ao cadastrar tamanho:", erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar tamanho."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Tamanho cadastrado com sucesso!",
            idTamanho: resultado.insertId

        });

    });
}


// ==========================================
// LISTAR TAMANHOS
// ==========================================

function listar(req, res) {

    tamanhoModel.listar((erro, resultado) => {

        if (erro) {

            console.error("Erro ao listar tamanhos:", erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar tamanhos."
            });

        }

        return res.status(200).json({
            sucesso: true,
            tamanhos: resultado
        });

    });
}


// ==========================================
// BUSCAR TAMANHO POR ID
// ==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    // Validação do ID
    if (!id || isNaN(id)) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "ID do tamanho inválido."
        });

    }

    tamanhoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.error("Erro ao buscar tamanho:", erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar tamanho."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Tamanho não encontrado."
            });

        }

        return res.status(200).json({
            sucesso: true,
            tamanho: resultado[0]
        });

    });
}


// ==========================================
// ATUALIZAR TAMANHO
// ==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const tamanho = req.body;

    // Validação do ID
    if (!id || isNaN(id)) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "ID do tamanho inválido."
        });

    }

    // Validação do tamanho
    if (!tamanho.tm || tamanho.tm.trim() === "") {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o tamanho (tm)."
        });

    }

    tamanhoModel.atualizar(
        id,
        tamanho,
        (erro, resultado) => {

            if (erro) {

                console.error("Erro ao atualizar tamanho:", erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar tamanho."
                });

            }

            if (resultado.affectedRows === 0) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Tamanho não encontrado."
                });

            }

            return res.status(200).json({

                sucesso: true,
                mensagem: "Tamanho atualizado com sucesso."

            });

        }
    );
}


// ==========================================
// EXCLUIR TAMANHO
// ==========================================

function excluir(req, res) {

    const id = req.params.id;

    // Validação do ID
    if (!id || isNaN(id)) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "ID do tamanho inválido."
        });

    }

    tamanhoModel.excluir(
        id,
        (erro, resultado) => {

            if (erro) {

                console.error("Erro ao excluir tamanho:", erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir tamanho."
                });

            }

            if (resultado.affectedRows === 0) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Tamanho não encontrado."
                });

            }

            return res.status(200).json({

                sucesso: true,
                mensagem: "Tamanho excluído com sucesso."

            });

        }
    );
}


// ==========================================
// EXPORTAÇÃO
// ==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};