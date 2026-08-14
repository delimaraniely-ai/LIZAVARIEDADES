// ======================================================
// API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// ELEMENTOS
// ======================================================

const campoBusca = document.getElementById("campoBusca");

const btnBuscar = document.getElementById("btnBuscar");

const btnFavoritos =
    document.getElementById("btnFavoritos");

const btnCarrinho =
    document.getElementById("btnCarrinho");

const btnPerfil =
    document.getElementById("btnPerfil");


// ======================================================
// CARREGAR HOME
// ======================================================

async function carregarHome() {

    try {

        console.log("Carregando produtos...");


        const resposta = await fetch(
            `${API}/produtos`
        );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar produtos."
            );

        }


        const dados = await resposta.json();


        console.log(
            "Produtos recebidos:",
            dados
        );


        // ==================================================
        // ACEITAR DIFERENTES FORMATOS DA API
        // ==================================================

        let produtos = [];


        if (Array.isArray(dados)) {

            produtos = dados;

        } else if (Array.isArray(dados.produtos)) {

            produtos = dados.produtos;

        } else if (Array.isArray(dados.data)) {

            produtos = dados.data;

        }


        console.log(
            "Lista de produtos:",
            produtos
        );


        if (produtos.length === 0) {

            console.warn(
                "Nenhum produto encontrado."
            );

            return;

        }


        // ==================================================
        // DESTAQUES
        // ==================================================

        for (
            let i = 0;
            i < 6 && i < produtos.length;
            i++
        ) {

            preencherProduto(
                produtos[i],
                i + 1
            );

        }


        // ==================================================
        // PRODUTOS COM DESCONTO
        // ==================================================

        const produtosDesconto =
            produtos.filter(produto => {

                return Number(
                    produto.preco_promocional
                ) > 0;

            });


        for (
            let i = 0;
            i < 6 && i < produtosDesconto.length;
            i++
        ) {

            preencherDesconto(
                produtosDesconto[i],
                i + 1
            );

        }


        // ==================================================
        // BANNER
        // ==================================================

        carregarBanner();

    } catch (erro) {

        console.error(
            "Erro na Home:",
            erro
        );

    }

}


// ======================================================
// PREENCHER PRODUTO
// ======================================================

function preencherProduto(
    produto,
    numero
) {

    const imagem =
        document.getElementById(
            `produtoImagem${numero}`
        );

    const nome =
        document.getElementById(
            `produtoNome${numero}`
        );

    const preco =
        document.getElementById(
            `produtoPreco${numero}`
        );


    if (nome) {

        nome.textContent =
            produto.nome ||
            "Produto";

    }


    if (preco) {

        const valor =
            produto.preco_promocional ||
            produto.preco_antigo ||
            0;


        preco.textContent =
            formatarPreco(valor);

    }


    if (imagem) {

        imagem.src =
            obterImagem(produto);

        imagem.alt =
            produto.nome ||
            "Produto";

    }


    // ==================================================
    // CLICAR NO PRODUTO
    // ==================================================

    const card =
        imagem?.closest(".product-card");


    if (card) {

        card.addEventListener(
            "click",
            function () {

                abrirProduto(produto);

            }
        );

    }

}


// ======================================================
// PREENCHER DESCONTO
// ======================================================

function preencherDesconto(
    produto,
    numero
) {

    const imagem =
        document.getElementById(
            `descontoImagem${numero}`
        );

    const nome =
        document.getElementById(
            `descontoNome${numero}`
        );

    const preco =
        document.getElementById(
            `descontoPreco${numero}`
        );


    if (nome) {

        nome.textContent =
            produto.nome ||
            "Produto";

    }


    if (preco) {

        preco.textContent =
            formatarPreco(
                produto.preco_promocional
            );

    }


    if (imagem) {

        imagem.src =
            obterImagem(produto);

        imagem.alt =
            produto.nome ||
            "Produto";

    }


    const card =
        imagem?.closest(".product-card");


    if (card) {

        card.addEventListener(
            "click",
            function () {

                abrirProduto(produto);

            }
        );

    }

}


// ======================================================
// OBTER IMAGEM
// ======================================================

function obterImagem(produto) {

    if (produto.imagem) {

        return produto.imagem;

    }


    if (produto.url_imagem) {

        return produto.url_imagem;

    }


    if (produto.imagem_produto) {

        return produto.imagem_produto;

    }


    if (produto.foto) {

        return produto.foto;

    }


    return "https://via.placeholder.com/300x300?text=Produto";

}


// ======================================================
// FORMATAR PREÇO
// ======================================================

function formatarPreco(valor) {

    return Number(valor || 0)
        .toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );

}


// ======================================================
// ABRIR DESCRIÇÃO DO PRODUTO
// ======================================================

function abrirProduto(produto) {

    if (!produto.idProduto) {

        console.error(
            "idProduto não encontrado:",
            produto
        );

        return;

    }


    window.location.href =
        `descricaoproduto.html?id=${produto.idProduto}`;

}


// ======================================================
// BUSCAR PRODUTO
// ======================================================

function pesquisarProduto() {

    const texto =
        campoBusca.value
            .trim()
            .toLowerCase();


    if (!texto) {

        carregarHome();

        return;

    }


    window.location.href =
        `pesquisa.html?busca=${encodeURIComponent(texto)}`;

}


if (btnBuscar) {

    btnBuscar.addEventListener(
        "click",
        pesquisarProduto
    );

}


if (campoBusca) {

    campoBusca.addEventListener(
        "keydown",
        function (evento) {

            if (evento.key === "Enter") {

                pesquisarProduto();

            }

        }
    );

}


// ======================================================
// FAVORITOS
// ======================================================

if (btnFavoritos) {

    btnFavoritos.addEventListener(
        "click",
        function () {

            window.location.href =
                "favoritos.html";

        }
    );

}


// ======================================================
// CARRINHO
// ======================================================

if (btnCarrinho) {

    btnCarrinho.addEventListener(
        "click",
        function () {

            window.location.href =
                "carrinho.html";

        }
    );

}


// ======================================================
// PERFIL
// ======================================================

if (btnPerfil) {

    btnPerfil.addEventListener(
        "click",
        function () {

            window.location.href =
                "perfil.html";

        }
    );

}


// ======================================================
// BOTÃO FINALIZAR
// ======================================================

const btnFinalizarCompra =
    document.getElementById(
        "btnFinalizarCompra"
    );


if (btnFinalizarCompra) {

    btnFinalizarCompra.addEventListener(
        "click",
        function () {

            window.location.href =
                "carrinho.html";

        }
    );

}


// ======================================================
// BANNER
// ======================================================

async function carregarBanner() {

    try {

        const resposta =
            await fetch(
                `${API}/banners`
            );


        if (!resposta.ok) {

            return;

        }


        const dados =
            await resposta.json();


        let banners = [];


        if (Array.isArray(dados)) {

            banners = dados;

        } else if (
            Array.isArray(dados.banners)
        ) {

            banners = dados.banners;

        }


        if (
            banners.length === 0
        ) {

            return;

        }


        const banner =
            banners[0];


        const imagem =
            document.getElementById(
                "bannerPrincipal"
            );


        if (imagem) {

            imagem.src =
                banner.imagem ||
                banner.url_imagem ||
                banner.banner ||
                "";

            imagem.alt =
                banner.titulo ||
                "Banner";

        }

    } catch (erro) {

        console.warn(
            "Banner não carregado:",
            erro
        );

    }

}


// ======================================================
// INICIAR
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarHome();

    }
);