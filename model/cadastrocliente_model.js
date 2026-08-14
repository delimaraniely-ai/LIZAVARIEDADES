// ======================================================
// API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// ELEMENTOS
// ======================================================

const formCliente = document.getElementById("formCliente");

const btnLimpar = document.getElementById("btnLimpar");

const btnVoltar = document.getElementById("btnVoltar");

const cpf = document.getElementById("cpf");

const telefone = document.getElementById("telefone");

const cep = document.getElementById("cep");


// ======================================================
// VERIFICAR FORMULÁRIO
// ======================================================

if (!formCliente) {

    console.error(
        "ERRO: formulário #formCliente não encontrado."
    );

}


// ======================================================
// MÁSCARA CPF
// ======================================================

if (cpf) {

    cpf.addEventListener("input", function () {

        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );

        cpf.value = valor;

    });

}


// ======================================================
// MÁSCARA TELEFONE
// ======================================================

if (telefone) {

    telefone.addEventListener("input", function () {

        let valor =
            telefone.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);


        if (valor.length <= 10) {

            valor = valor.replace(
                /(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );

        } else {

            valor = valor.replace(
                /(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

        }


        telefone.value = valor;

    });

}


// ======================================================
// MÁSCARA CEP
// ======================================================

if (cep) {

    cep.addEventListener("input", function () {

        let valor =
            cep.value.replace(/\D/g, "");

        valor = valor.substring(0, 8);

        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );

        cep.value = valor;

    });

}


// ======================================================
// LIMPAR FORMULÁRIO
// ======================================================

if (btnLimpar) {

    btnLimpar.addEventListener(
        "click",
        function () {

            formCliente.reset();

        }
    );

}


// ======================================================
// BOTÃO VOLTAR
// ======================================================

if (btnVoltar) {

    btnVoltar.addEventListener(
        "click",
        function () {

            window.history.back();

        }
    );

}


// ======================================================
// CADASTRAR CLIENTE
// ======================================================

if (formCliente) {

    formCliente.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            // ==================================================
            // PEGAR DADOS DO CLIENTE
            // ==================================================

            const nome =
                document.getElementById("nome")
                    .value
                    .trim();


            const cpfValor =
                document.getElementById("cpf")
                    .value
                    .trim();


            const dataNascimento =
                document.getElementById("dataNascimento")
                    .value;


            const telefoneValor =
                document.getElementById("telefone")
                    .value
                    .trim();


            const email =
                document.getElementById("email")
                    .value
                    .trim();


            const senha =
                document.getElementById("senha")
                    .value;


            const confirmarSenha =
                document.getElementById("confirmarSenha")
                    .value;


            // ==================================================
            // PEGAR ENDEREÇO
            // ==================================================

            const cepValor =
                document.getElementById("cep")
                    .value
                    .trim();


            const logradouro =
                document.getElementById("logradouro")
                    .value
                    .trim();


            const numero =
                document.getElementById("numero")
                    .value
                    .trim();


            const complemento =
                document.getElementById("complemento")
                    .value
                    .trim();


            const bairro =
                document.getElementById("bairro")
                    .value
                    .trim();


            const cidade =
                document.getElementById("cidade")
                    .value
                    .trim();


            const estado =
                document.getElementById("estado")
                    .value;


            // ==================================================
            // LIMPAR CPF
            // ==================================================

            const cpfLimpo =
                cpfValor.replace(/\D/g, "");


            // ==================================================
            // LIMPAR TELEFONE
            // ==================================================

            const telefoneLimpo =
                telefoneValor.replace(/\D/g, "");


            // ==================================================
            // LIMPAR CEP
            // ==================================================

            const cepLimpo =
                cepValor.replace(/\D/g, "");


            // ==================================================
            // VALIDAR SENHAS
            // ==================================================

            if (senha !== confirmarSenha) {

                alert(
                    "As senhas não são iguais."
                );

                return;

            }


            // ==================================================
            // VALIDAR CPF
            // ==================================================

            if (cpfLimpo.length !== 11) {

                alert(
                    "Digite um CPF válido."
                );

                return;

            }


            // ==================================================
            // VALIDAR TELEFONE
            // ==================================================

            if (
                telefoneLimpo.length !== 10 &&
                telefoneLimpo.length !== 11
            ) {

                alert(
                    "Digite um telefone válido."
                );

                return;

            }


            // ==================================================
            // VALIDAR CEP
            // ==================================================

            if (cepLimpo.length !== 8) {

                alert(
                    "Digite um CEP válido."
                );

                return;

            }


            // ==================================================
            // OBJETO DO CLIENTE
            // ==================================================

            const cliente = {

                nome: nome,

                cpf: cpfLimpo,

                dataNascimento:
                    dataNascimento,

                telefone:
                    telefoneLimpo,

                email: email,

                senha: senha,


                // ==============================================
                // ENDEREÇO
                // ==============================================

                endereco: {

                    cep: cepLimpo,

                    logradouro:
                        logradouro,

                    numero:
                        numero,

                    complemento:
                        complemento,

                    bairro:
                        bairro,

                    cidade:
                        cidade,

                    estado:
                        estado

                }

            };


            // ==================================================
            // MOSTRAR DADOS NO CONSOLE
            // ==================================================

            console.log(
                "================================"
            );

            console.log(
                "DADOS DO CLIENTE"
            );

            console.log(
                cliente
            );

            console.log(
                "================================"
            );


            // ==================================================
            // BOTÃO
            // ==================================================

            const btnCadastrar =
                document.getElementById(
                    "btnCadastrar"
                );


            if (btnCadastrar) {

                btnCadastrar.disabled = true;

                btnCadastrar.textContent =
                    "Cadastrando...";

            }


            // ==================================================
            // ENVIAR PARA API
            // ==================================================

            try {

                const resposta =
                    await fetch(
                        `${API}/cliente/cadastrar`,
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    cliente
                                )

                        }
                    );


                // ==================================================
                // PEGAR RESPOSTA
                // ==================================================

                const dados =
                    await resposta.json();


                console.log(
                    "Resposta da API:",
                    dados
                );


                // ==================================================
                // VERIFICAR ERRO
                // ==================================================

                if (!resposta.ok) {

                    throw new Error(
                        dados.mensagem ||
                        dados.message ||
                        "Erro ao cadastrar cliente."
                    );

                }


                // ==================================================
                // SUCESSO
                // ==================================================

                alert(
                    "Cliente cadastrado com sucesso!"
                );


                // ==================================================
                // LIMPAR
                // ==================================================

                formCliente.reset();


            } catch (erro) {

                console.error(
                    "ERRO NO CADASTRO:",
                    erro
                );


                alert(
                    erro.message ||
                    "Não foi possível cadastrar o cliente."
                );


            } finally {

                // ==================================================
                // HABILITAR BOTÃO
                // ==================================================

                if (btnCadastrar) {

                    btnCadastrar.disabled = false;

                    btnCadastrar.textContent =
                        "Cadastrar Cliente";

                }

            }

        }
    );

}