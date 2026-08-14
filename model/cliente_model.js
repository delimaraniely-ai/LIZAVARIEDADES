// =====================================================
// FORMULÁRIO DE CADASTRO
// =====================================================

const form = document.getElementById("formCadastro");

const nome = document.getElementById("nome");

const cpf = document.getElementById("cpf");

const dataNascimento =
    document.getElementById("dataNascimento");

const email = document.getElementById("email");

const telefone =
    document.getElementById("telefone");


// =====================================================
// EVENTO SUBMIT
// =====================================================

form.addEventListener("submit", async (event) => {

    event.preventDefault();


    // =================================================
    // VALIDAR FORMULÁRIO
    // =================================================

    if (!validarFormulario()) {

        return;

    }


    // =================================================
    // MONTAR DADOS
    // =================================================

    const dados = {

        nome: nome.value.trim(),

        cpf: cpf.value.replace(/\D/g, ""),

        dataNascimento: dataNascimento.value,

        email: email.value.trim(),

        telefone: telefone.value.replace(/\D/g, "")

    };


    // =================================================
    // BOTÃO
    // =================================================

    const botao =
        document.getElementById("btnCadastrar");


    botao.disabled = true;

    botao.textContent = "Cadastrando...";


    // =================================================
    // ENVIAR PARA API
    // =================================================

    try {

        const resposta = await fetch(

            "http://127.0.0.1:3000/cliente",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify(dados)

            }

        );


        // =================================================
        // CONVERTER RESPOSTA
        // =================================================

        const resultado =
            await resposta.json();


        // =================================================
        // VERIFICAR ERRO
        // =================================================

        if (!resposta.ok) {

            throw new Error(

                resultado.mensagem ||

                resultado.message ||

                "Erro ao cadastrar cliente."

            );

        }


        // =================================================
        // SUCESSO
        // =================================================

        alert(

            resultado.mensagem ||

            "Cliente cadastrado com sucesso!"

        );


        // =================================================
        // LIMPAR FORMULÁRIO
        // =================================================

        form.reset();


    } catch (erro) {

        console.error(

            "Erro ao cadastrar cliente:",

            erro

        );


        alert(

            "Erro ao conectar ao servidor.\n\n" +

            erro.message

        );


    } finally {

        // ==============================================
        // LIBERAR BOTÃO
        // ==============================================

        botao.disabled = false;

        botao.textContent = "Cadastrar";

    }

});