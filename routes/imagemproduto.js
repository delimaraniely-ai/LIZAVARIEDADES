// ======================================================
// API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// PEGAR ID DO PRODUTO
// ======================================================

const parametros =
    new URLSearchParams(window.location.search);

const idProduto =
    parametros.get("id");


// ======================================================
// ELEMENTOS
// ======================================================

const inputImagem =
    document.getElementById("imagemProduto");

const preview =
    document.getElementById("previewImagem");

const textoPreview =
    document.getElementById("textoPreview");

const listaImagens =
    document.getElementById("listaImagens");

const mensagem =
    document.getElementById("mensagem");


// ======================================================
// VERIFICAR PRODUTO
// ======================================================

if (!idProduto) {

    mostrarMensagem(
        "ID do produto não informado.",
        "erro"
    );

}


// ======================================================
// PREVIEW
// ======================================================

inputImagem.addEventListener(
    "change",
    function () {

        const arquivo =
            this.files[0];

        if (!arquivo) {

            preview.style.display = "none";

            textoPreview.style.display = "block";

            return;

        }


        if (!arquivo.type.startsWith("image/")) {

            mostrarMensagem(
                "Selecione uma imagem válida.",
                "erro"
            );

            this.value = "";

            return;

        }


        const leitor =
            new FileReader();


        leitor.onload = function (evento) {

            preview.src =
                evento.target.result;

            preview.style.display =
                "block";

            textoPreview.style.display =
                "none";

        };


        leitor.readAsDataURL(arquivo);

    }
);


// ======================================================
// CADASTRAR
// ======================================================

document
    .getElementById("btnCadastrarImagem")
    .addEventListener(
        "click",
        cadastrarImagem
    );


async function cadastrarImagem() {

    const arquivo =
        inputImagem.files[0];


    if (!arquivo) {

        mostrarMensagem(
            "Selecione uma imagem.",
            "erro"
        );

        return;

    }


    if (!idProduto) {

        mostrarMensagem(
            "Produto não informado.",
            "erro"
        );

        return;

    }


    const dados =
        new FormData();


    dados.append(
        "imagem",
        arquivo
    );


    dados.append(
        "Produto_idProduto",
        idProduto
    );


    try {

        mostrarMensagem(
            "Enviando imagem...",
            "info"
        );


        const resposta =
            await fetch(
                `${API}/imagem-produto`,
                {
                    method: "POST",
                    body: dados
                }
            );


        const resultado =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao cadastrar imagem."
            );

        }


        mostrarMensagem(
            "Imagem cadastrada com sucesso!",
            "sucesso"
        );


        inputImagem.value = "";

        preview.src = "";

        preview.style.display = "none";

        textoPreview.style.display = "block";


        carregarImagens();

    } catch (erro) {

        console.error(erro);

        mostrarMensagem(
            erro.message,
            "erro"
        );

    }

}


// ======================================================
// LISTAR IMAGENS
// ======================================================

async function carregarImagens() {

    if (!idProduto) {
        return;
    }


    try {

        const resposta =
            await fetch(
                `${API}/imagem-produto/produto/${idProduto}`
            );


        const resultado =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao carregar imagens."
            );

        }


        const imagens =
            resultado.imagens || [];


        listaImagens.innerHTML = "";


        document
            .getElementById("quantidadeImagens")
            .textContent =
            `${imagens.length} imagem(ns)`;


        if (imagens.length === 0) {

            listaImagens.innerHTML = `
                <p>
                    Nenhuma imagem cadastrada.
                </p>
            `;

            return;

        }


        imagens.forEach(
            function (imagem) {

                const card =
                    document.createElement("div");

                card.className =
                    "imagem-card";


                card.innerHTML = `

                    <img
                        src="${API}/${imagem.caminho}"
                        alt="Imagem do produto"
                    >

                    <div class="imagem-acoes">

                        <button
                            class="btn-excluir"
                            onclick="excluirImagem(${imagem.idImagem_Produtos})"
                        >
                            Excluir
                        </button>

                    </div>

                `;


                listaImagens.appendChild(card);

            }
        );

    } catch (erro) {

        console.error(
            "Erro:",
            erro
        );

        listaImagens.innerHTML = `
            <p>
                Não foi possível carregar as imagens.
            </p>
        `;

    }

}


// ======================================================
// EXCLUIR
// ======================================================

async function excluirImagem(id) {

    const confirmar =
        confirm(
            "Deseja realmente excluir esta imagem?"
        );


    if (!confirmar) {
        return;
    }


    try {

        const resposta =
            await fetch(
                `${API}/imagem-produto/${id}`,
                {
                    method: "DELETE"
                }
            );


        const resultado =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                resultado.mensagem ||
                "Erro ao excluir imagem."
            );

        }


        mostrarMensagem(
            "Imagem excluída com sucesso!",
            "sucesso"
        );


        carregarImagens();

    } catch (erro) {

        console.error(erro);

        mostrarMensagem(
            erro.message,
            "erro"
        );

    }

}


// ======================================================
// MENSAGEM
// ======================================================

function mostrarMensagem(
    texto,
    tipo
) {

    mensagem.textContent =
        texto;

    mensagem.style.display =
        "block";


    if (tipo === "erro") {

        mensagem.style.background =
            "#ffdddd";

        mensagem.style.color =
            "#a00000";

    }


    if (tipo === "sucesso") {

        mensagem.style.background =
            "#ddffdd";

        mensagem.style.color =
            "#006600";

    }


    if (tipo === "info") {

        mensagem.style.background =
            "#eeeeee";

        mensagem.style.color =
            "#333";

    }

}


// ======================================================
// CARREGAR NOME DO PRODUTO
// ======================================================

async function carregarProduto() {

    if (!idProduto) {
        return;
    }


    try {

        const resposta =
            await fetch(
                `${API}/produtos/${idProduto}`
            );


        const resultado =
            await resposta.json();


        if (
            resposta.ok &&
            resultado.produto
        ) {

            document
                .getElementById("nomeProduto")
                .textContent =
                resultado.produto.nome;

        }

    } catch (erro) {

        console.error(
            "Erro ao carregar produto:",
            erro
        );

    }

}


// ======================================================
// VOLTAR
// ======================================================

document
    .getElementById("btnVoltar")
    .addEventListener(
        "click",
        function () {

            window.history.back();

        }
    );


// ======================================================
// INICIAR
// ======================================================

carregarProduto();

carregarImagens();