// ======================================================
// API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// PEGAR ID DA URL
// Exemplo:
// descricaoproduto.html?id=1
// ======================================================

const parametros = new URLSearchParams(
    window.location.search
);

const idProduto = parametros.get("id");

console.log("ID recebido:", idProduto);


// ======================================================
// FORMATAR PREÇO
// ======================================================

function formatarPreco(valor) {

    return Number(valor || 0).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


// ======================================================
// CARREGAR PRODUTO
// ======================================================

async function carregarProduto() {

    const nome = document.getElementById("nomeProduto");
    const descricao = document.getElementById("descricao");
    const especificacoes = document.getElementById("especificacoes");
    const marca = document.getElementById("marcaProduto");
    const preco = document.getElementById("precoProduto");
    const precoAntigo = document.getElementById("precoAntigo");
    const caminho = document.getElementById("caminhoProduto");

    // --------------------------------------------------
    // VERIFICAR ID
    // --------------------------------------------------

    if (!idProduto) {

        console.error(
            "ID do produto não encontrado na URL."
        );

        if (nome) {
            nome.textContent = "Produto não informado";
        }

        if (descricao) {
            descricao.innerHTML = `
                <h3>Erro</h3>
                <p>
                    Nenhum produto foi informado.
                </p>
            `;
        }

        return;
    }


    try {

        console.log(
            "Buscando:",
            `${API}/produtos/${idProduto}`
        );


        // --------------------------------------------------
        // BUSCAR PRODUTO
        // --------------------------------------------------

        const resposta = await fetch(
            `${API}/produtos/${idProduto}`
        );


        console.log(
            "Status da API:",
            resposta.status
        );


        const dados = await resposta.json();


        console.log(
            "Resposta da API:",
            dados
        );


        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                "Produto não encontrado."
            );

        }


        // --------------------------------------------------
        // PEGAR PRODUTO
        // --------------------------------------------------

        const produto =
            dados.produto || dados;


        console.log(
            "Produto:",
            produto
        );


        if (!produto) {

            throw new Error(
                "Produto não encontrado."
            );

        }


        // ==================================================
        // NOME
        // ==================================================

        if (nome) {

            nome.textContent =
                produto.nome ||
                "Produto sem nome";

        }


        // ==================================================
        // DESCRIÇÃO
        // ==================================================

        if (descricao) {

            descricao.innerHTML = "";


            const titulo =
                document.createElement("h3");

            titulo.textContent =
                "Descrição do produto";


            const texto =
                document.createElement("p");


            texto.textContent =
                produto.descricao ||
                "Este produto não possui descrição cadastrada.";


            descricao.appendChild(titulo);

            descricao.appendChild(texto);

        }


        // ==================================================
        // MARCA
        // ==================================================

        if (marca) {

            marca.textContent =
                produto.marca ||
                produto.nomeMarca ||
                produto.nome_marca ||
                "";

        }


        // ==================================================
        // PREÇO ANTIGO
        // ==================================================

        if (precoAntigo) {

            if (
                produto.preco_antigo !== null &&
                produto.preco_antigo !== undefined
            ) {

                precoAntigo.textContent =
                    formatarPreco(
                        produto.preco_antigo
                    );

            } else {

                precoAntigo.textContent = "";

            }

        }


        // ==================================================
        // PREÇO ATUAL
        // ==================================================

        if (preco) {

            const valor =
                produto.preco_promocional !== null &&
                    produto.preco_promocional !== undefined &&
                    Number(produto.preco_promocional) > 0

                    ? produto.preco_promocional

                    : produto.preco_antigo;


            preco.textContent =
                formatarPreco(valor);

        }


        // ==================================================
        // CAMINHO
        // ==================================================

        if (caminho) {

            caminho.textContent =
                produto.nome ||
                "Produto";

        }


        // ==================================================
        // ESPECIFICAÇÕES
        // ==================================================

        if (especificacoes) {

            especificacoes.innerHTML = `

                <h3>Especificações do produto</h3>

                <p>
                    <strong>Código:</strong>
                    ${produto.codigo || "Não informado"}
                </p>

                <p>
                    <strong>Estoque:</strong>
                    ${produto.quantidade_estoque ?? 0}
                </p>

                <p>
                    <strong>Marca:</strong>
                    ${produto.marca || "Não informada"}
                </p>

                <p>
                    <strong>Categoria:</strong>
                    ${produto.categoria || "Não informada"}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${Number(produto.ativo) === 1 ||
                    produto.ativo === true
                    ? "Ativo"
                    : "Inativo"
                }
                </p>

            `;

        }


        // ==================================================
        // TÍTULO
        // ==================================================

        document.title =
            produto.nome ||
            "Descrição do Produto";


        console.log(
            "Produto carregado com sucesso."
        );

    } catch (erro) {

        console.error(
            "ERRO AO CARREGAR PRODUTO:",
            erro
        );


        if (nome) {

            nome.textContent =
                "Erro ao carregar produto";

        }


        if (descricao) {

            descricao.innerHTML = `

                <h3>Erro ao carregar</h3>

                <p>
                    Não foi possível carregar
                    os dados deste produto.
                </p>

                <p>
                    Verifique se o servidor está funcionando.
                </p>

            `;

        }

    }

}


// ======================================================
// ABAS
// ======================================================

function configurarAbas() {

    const abas =
        document.querySelectorAll(".aba");


    const conteudos =
        document.querySelectorAll(".conteudo");


    abas.forEach(
        function (aba) {

            aba.addEventListener(
                "click",
                function () {

                    const alvo =
                        aba.dataset.aba;


                    abas.forEach(
                        function (item) {

                            item.classList.remove(
                                "ativa"
                            );

                        }
                    );


                    conteudos.forEach(
                        function (conteudo) {

                            conteudo.classList.remove(
                                "ativo"
                            );

                        }
                    );


                    aba.classList.add(
                        "ativa"
                    );


                    const conteudo =
                        document.getElementById(
                            alvo
                        );


                    if (conteudo) {

                        conteudo.classList.add(
                            "ativo"
                        );

                    }

                }
            );

        }
    );

}


// ======================================================
// FRETE
// ======================================================

function configurarFrete() {

    const botao =
        document.getElementById("btnFrete");

    const campo =
        document.getElementById("cep");

    const resultado =
        document.getElementById("resultadoFrete");


    if (!botao) {
        return;
    }


    botao.addEventListener(
        "click",
        function () {

            const cep =
                campo.value
                    .replace(/\D/g, "");


            if (cep.length !== 8) {

                resultado.textContent =
                    "Digite um CEP válido.";

                return;

            }


            resultado.textContent =
                "Frete calculado com sucesso.";

        }
    );

}


// ======================================================
// BOTÃO CARRINHO
// ======================================================

function configurarCarrinho() {

    const botao =
        document.getElementById("carrinho");


    if (!botao) {
        return;
    }


    botao.addEventListener(
        "click",
        function () {

            if (!idProduto) {

                alert(
                    "Produto não informado."
                );

                return;

            }


            alert(
                "Produto adicionado ao carrinho."
            );

        }
    );

}


// ======================================================
// BOTÃO COMPRAR
// ======================================================

function configurarComprar() {

    const botao =
        document.getElementById("comprar");


    if (!botao) {
        return;
    }


    botao.addEventListener(
        "click",
        function () {

            if (!idProduto) {

                alert(
                    "Produto não informado."
                );

                return;

            }


            window.location.href =
                `carrinho.html?id=${idProduto}`;

        }
    );

}


// ======================================================
// INICIAR
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarProduto();

        configurarAbas();

        configurarFrete();

        configurarCarrinho();

        configurarComprar();

    }
);