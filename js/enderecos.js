// ======================================================
// API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// ENDEREÇOS
// ======================================================

let enderecos = [];

let enderecoEditando = null;


// ======================================================
// INICIAR
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    carregarDadosPagina();

    carregarEnderecos();

    configurarEventos();

});


// ======================================================
// DADOS DA PÁGINA
// ======================================================

function carregarDadosPagina() {

    document.getElementById("logoNome").textContent =
        "Liz Variedades";

    document.getElementById("campoBusca").placeholder =
        "Pesquisar";

    document.getElementById("nomeUsuario").textContent =
        "Usuário";

    document.getElementById("cargoUsuario").textContent =
        "Cliente";

    document.getElementById("tituloPagina").textContent =
        "Meus Endereços";

    document.getElementById("descricaoPagina").textContent =
        "Gerencie seus endereços de entrega.";

    document.getElementById("btnNovoEndereco").textContent =
        "+ Novo endereço";

    document.getElementById("tituloFormulario").textContent =
        "Adicionar endereço";

    document.getElementById("btnCancelar").textContent =
        "Cancelar";

    document.getElementById("btnSalvar").textContent =
        "Salvar endereço";


    // MENU

    document.getElementById("menuDados").textContent =
        "Meus dados";

    document.getElementById("menuPedidos").textContent =
        "Meus pedidos";

    document.getElementById("menuEnderecos").textContent =
        "Meus endereços";

    document.getElementById("menuFavoritos").textContent =
        "Favoritos";

    document.getElementById("menuCartoes").textContent =
        "Cartões";

    document.getElementById("menuSair").textContent =
        "Sair";


    // BENEFÍCIOS

    document.getElementById("beneficio1").textContent =
        "Compra segura";

    document.getElementById("beneficio2").textContent =
        "Entrega rápida";

    document.getElementById("beneficio3").textContent =
        "Pagamento seguro";

    document.getElementById("beneficio4").textContent =
        "Atendimento";


    // FOOTER

    document.getElementById("footerTexto").textContent =
        "© Liz Variedades - Todos os direitos reservados.";

}


// ======================================================
// EVENTOS
// ======================================================

function configurarEventos() {

    const btnNovo =
        document.getElementById("btnNovoEndereco");

    const btnCancelar =
        document.getElementById("btnCancelar");

    const form =
        document.getElementById("formEndereco");


    btnNovo.addEventListener(
        "click",
        abrirNovoEndereco
    );


    btnCancelar.addEventListener(
        "click",
        cancelarFormulario
    );


    form.addEventListener(
        "submit",
        salvarEndereco
    );


    document
        .getElementById("cep")
        .addEventListener(
            "input",
            mascaraCEP
        );


    document
        .getElementById("menuSair")
        .addEventListener(
            "click",
            sair
        );

}


// ======================================================
// CARREGAR ENDEREÇOS
// ======================================================

async function carregarEnderecos() {

    try {

        const resposta = await fetch(
            `${API}/enderecos`
        );


        const dados = await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                "Erro ao carregar endereços."
            );

        }


        enderecos = dados.enderecos || [];


        mostrarEnderecos();


    } catch (erro) {

        console.error(
            "Erro ao carregar endereços:",
            erro
        );

        alert(
            "Não foi possível carregar os endereços."
        );

    }

}


// ======================================================
// MOSTRAR ENDEREÇOS
// ======================================================

function mostrarEnderecos() {

    mostrarEnderecoCard(
        1,
        enderecos[0]
    );


    mostrarEnderecoCard(
        2,
        enderecos[1]
    );

}


// ======================================================
// MOSTRAR CARD
// ======================================================

function mostrarEnderecoCard(numero, endereco) {

    const tag =
        document.getElementById(
            `tagEndereco${numero}`
        );

    const tipo =
        document.getElementById(
            `tipoEndereco${numero}`
        );

    const texto =
        document.getElementById(
            `endereco${numero}`
        );

    const editar =
        document.getElementById(
            `editarEndereco${numero}`
        );

    const excluir =
        document.getElementById(
            `excluirEndereco${numero}`
        );


    if (!endereco) {

        tag.textContent = "";

        tipo.textContent =
            "Nenhum endereço cadastrado";

        texto.textContent =
            "Você ainda não possui este endereço.";

        editar.style.display =
            "none";

        excluir.style.display =
            "none";

        return;

    }


    tag.textContent =
        numero === 1
            ? "Principal"
            : "Endereço";


    tipo.textContent =
        endereco.logradouro;


    texto.textContent =
        `${endereco.logradouro}, ${endereco.numero}` +
        `${endereco.complemento ? " - " + endereco.complemento : ""}` +
        ` - ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}` +
        ` - CEP: ${formatarCEP(endereco.cep)}`;


    editar.style.display =
        "inline-block";

    excluir.style.display =
        "inline-block";


    editar.onclick = function () {

        editarEndereco(
            endereco.idEndereco
        );

    };


    excluir.onclick = function () {

        excluirEndereco(
            endereco.idEndereco
        );

    };

}


// ======================================================
// NOVO ENDEREÇO
// ======================================================

function abrirNovoEndereco() {

    enderecoEditando = null;


    document.getElementById(
        "tituloFormulario"
    ).textContent =
        "Adicionar endereço";


    document.getElementById(
        "formEndereco"
    ).reset();


    document.getElementById(
        "btnSalvar"
    ).textContent =
        "Salvar endereço";

}


// ======================================================
// EDITAR ENDEREÇO
// ======================================================

async function editarEndereco(idEndereco) {

    try {

        const resposta = await fetch(
            `${API}/enderecos/${idEndereco}`
        );


        const dados = await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                "Erro ao buscar endereço."
            );

        }


        const endereco =
            dados.endereco;


        enderecoEditando =
            endereco.idEndereco;


        document.getElementById(
            "tituloFormulario"
        ).textContent =
            "Editar endereço";


        document.getElementById("cep").value =
            formatarCEP(endereco.cep);


        document.getElementById("logradouro").value =
            endereco.logradouro || "";


        document.getElementById("numero").value =
            endereco.numero || "";


        document.getElementById("complemento").value =
            endereco.complemento || "";


        document.getElementById("cidade").value =
            endereco.cidade || "";


        document.getElementById("bairro").value =
            endereco.bairro || "";


        document.getElementById(
            "btnSalvar"
        ).textContent =
            "Atualizar endereço";


        document
            .querySelector(".form-card")
            .scrollIntoView({
                behavior: "smooth"
            });


    } catch (erro) {

        console.error(
            "Erro ao editar endereço:",
            erro
        );

        alert(
            "Não foi possível carregar o endereço."
        );

    }

}


// ======================================================
// SALVAR ENDEREÇO
// ======================================================

async function salvarEndereco(event) {

    event.preventDefault();


    const endereco = {

        cep:
            document.getElementById(
                "cep"
            ).value.replace(/\D/g, ""),

        logradouro:
            document.getElementById(
                "logradouro"
            ).value.trim(),

        numero:
            document.getElementById(
                "numero"
            ).value.trim(),

        complemento:
            document.getElementById(
                "complemento"
            ).value.trim(),

        cidade:
            document.getElementById(
                "cidade"
            ).value.trim(),

        bairro:
            document.getElementById(
                "bairro"
            ).value.trim(),

        estado:
            obterEstado()

    };


    // ==================================================
    // VALIDAÇÕES
    // ==================================================

    if (endereco.cep.length !== 8) {

        alert(
            "Digite um CEP válido."
        );

        return;

    }


    if (
        !endereco.logradouro ||
        !endereco.numero ||
        !endereco.bairro ||
        !endereco.cidade
    ) {

        alert(
            "Preencha todos os campos obrigatórios."
        );

        return;

    }


    try {

        let resposta;


        // ==================================================
        // ATUALIZAR
        // ==================================================

        if (enderecoEditando) {

            resposta = await fetch(
                `${API}/enderecos/${enderecoEditando}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(endereco)

                }
            );

        }


        // ==================================================
        // CADASTRAR
        // ==================================================

        else {

            resposta = await fetch(
                `${API}/enderecos`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(endereco)

                }
            );

        }


        const dados =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                "Erro ao salvar endereço."
            );

        }


        alert(
            dados.mensagem ||
            "Endereço salvo com sucesso!"
        );


        document
            .getElementById(
                "formEndereco"
            )
            .reset();


        enderecoEditando =
            null;


        document.getElementById(
            "tituloFormulario"
        ).textContent =
            "Adicionar endereço";


        document.getElementById(
            "btnSalvar"
        ).textContent =
            "Salvar endereço";


        carregarEnderecos();


    } catch (erro) {

        console.error(
            "Erro ao salvar endereço:",
            erro
        );

        alert(
            erro.message ||
            "Não foi possível salvar o endereço."
        );

    }

}


// ======================================================
// EXCLUIR
// ======================================================

async function excluirEndereco(idEndereco) {

    const confirmar =
        confirm(
            "Deseja realmente excluir este endereço?"
        );


    if (!confirmar) {

        return;

    }


    try {

        const resposta = await fetch(
            `${API}/enderecos/${idEndereco}`,
            {
                method: "DELETE"
            }
        );


        const dados =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                "Erro ao excluir endereço."
            );

        }


        alert(
            dados.mensagem ||
            "Endereço excluído com sucesso!"
        );


        carregarEnderecos();


    } catch (erro) {

        console.error(
            "Erro ao excluir endereço:",
            erro
        );

        alert(
            erro.message ||
            "Não foi possível excluir o endereço."
        );

    }

}


// ======================================================
// CANCELAR
// ======================================================

function cancelarFormulario() {

    enderecoEditando = null;


    document
        .getElementById(
            "formEndereco"
        )
        .reset();


    document.getElementById(
        "tituloFormulario"
    ).textContent =
        "Adicionar endereço";


    document.getElementById(
        "btnSalvar"
    ).textContent =
        "Salvar endereço";

}


// ======================================================
// MÁSCARA CEP
// ======================================================

function mascaraCEP(event) {

    let valor =
        event.target.value
            .replace(/\D/g, "")
            .substring(0, 8);


    if (valor.length > 5) {

        valor =
            valor.substring(0, 5) +
            "-" +
            valor.substring(5);

    }


    event.target.value =
        valor;

}


// ======================================================
// FORMATAR CEP
// ======================================================

function formatarCEP(cep) {

    if (!cep) {

        return "";

    }


    const valor =
        String(cep)
            .replace(/\D/g, "");


    if (valor.length !== 8) {

        return cep;

    }


    return (
        valor.substring(0, 5) +
        "-" +
        valor.substring(5)
    );

}


// ======================================================
// ESTADO
// ======================================================

function obterEstado() {

    // Seu HTML atual não possui campo de estado.
    // Por isso deixamos vazio.

    return "";

}


// ======================================================
// SAIR
// ======================================================

function sair(event) {

    event.preventDefault();


    const confirmar =
        confirm(
            "Deseja sair?"
        );


    if (confirmar) {

        window.location.href =
            "login.html";

    }

}