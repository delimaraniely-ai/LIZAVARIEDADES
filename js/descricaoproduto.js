// ======================================================
// API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// PEGAR ID DO PRODUTO NA URL
//
// Exemplo:
//
// produto.html?id=1
//
// ======================================================

const parametros = new URLSearchParams(
    window.location.search
);

const idProduto = parametros.get("id");


console.log(
    "ID do produto recebido:",
    idProduto
);


// ======================================================
// FORMATAR PREÇO
// ======================================================

function formatarPreco(valor) {

    const numero = Number(valor);

    if (isNaN(numero)) {

        return "R$ 0,00";

    }

    return numero.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


// ======================================================
// CAMINHO DA IMAGEM
// ======================================================

function montarImagem(caminho) {

    if (!caminho) {

        return "../assets/produto.png";

    }


    if (
        caminho.startsWith("http://") ||
        caminho.startsWith("https://")
    ) {

        return caminho;

    }


    if (caminho.startsWith("/")) {

        return API + caminho;

    }


    if (caminho.startsWith("../")) {

        return caminho;

    }


    return "../" + caminho;

}


// ======================================================
// CARREGAR PRODUTO
// ======================================================

async function carregarProduto() {

    const nome =
        document.getElementById(
            "produtoNome"
        );


    const descricao =
        document.getElementById(
            "descricaoProduto"
        );


    const marca =
        document.getElementById(
            "produtoMarca"
        );


    const preco =
        document.getElementById(
            "precoProduto"
        );


    const precoAntigo =
        document.getElementById(
            "precoAntigo"
        );


    const breadcrumb =
        document.getElementById(
            "breadcrumbProduto"
        );


    // ==================================================
    // VERIFICAR ID
    // ==================================================

    if (!idProduto) {

        console.error(
            "ID do produto não encontrado na URL."
        );


        if (nome) {

            nome.textContent =
                "Produto não informado";

        }


        if (descricao) {

            descricao.textContent =
                "Nenhum produto foi informado.";

        }


        return;

    }


    try {

        console.log(
            "Buscando produto:",
            `${API}/produtos/${idProduto}`
        );


        // ==================================================
        // BUSCAR PRODUTO
        // ==================================================

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
                dados.message ||
                "Produto não encontrado."
            );

        }


        // ==================================================
        // IDENTIFICAR PRODUTO
        // ==================================================

        const produto =
            dados.produto ||
            dados.data ||
            dados;


        console.log(
            "Produto carregado:",
            produto
        );


        if (
            !produto ||
            typeof produto !== "object"
        ) {

            throw new Error(
                "Dados do produto inválidos."
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

            descricao.textContent =
                produto.descricao ||
                "Este produto não possui descrição cadastrada.";

        }


        // ==================================================
        // MARCA
        // ==================================================

        if (marca) {

            marca.textContent =
                produto.marca ||
                produto.nomeMarca ||
                produto.nome_marca ||
                "Marca não informada";

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

                precoAntigo.textContent =
                    "";

            }

        }


        // ==================================================
        // PREÇO ATUAL
        // ==================================================

        let valorAtual;


        if (
            produto.preco_promocional !== null &&
            produto.preco_promocional !== undefined &&
            Number(produto.preco_promocional) > 0
        ) {

            valorAtual =
                produto.preco_promocional;

        } else {

            valorAtual =
                produto.preco_antigo;

        }


        if (preco) {

            preco.textContent =
                formatarPreco(
                    valorAtual
                );

        }


        // ==================================================
        // BREADCRUMB
        // ==================================================

        if (breadcrumb) {

            breadcrumb.textContent =
                produto.nome ||
                "Produto";

        }


        // ==================================================
        // IMAGEM
        // ==================================================

        carregarImagemProduto(
            produto
        );


        // ==================================================
        // CORES
        // ==================================================

        carregarCores(
            produto
        );


        // ==================================================
        // TAMANHOS
        // ==================================================

        carregarTamanhos(
            produto
        );


        // ==================================================
        // ESPECIFICAÇÕES
        // ==================================================

        carregarEspecificacoes(
            produto
        );


        // ==================================================
        // AVALIAÇÕES
        // ==================================================

        carregarAvaliacoes(
            produto
        );


        // ==================================================
        // PRODUTOS RELACIONADOS
        // ==================================================

        carregarProdutosRelacionados(
            produto
        );


        // ==================================================
        // TÍTULO DA PÁGINA
        // ==================================================

        document.title =
            produto.nome
                ? `${produto.nome} - Liza Variedades`
                : "Liza Variedades - Produto";


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

            descricao.textContent =
                "Não foi possível carregar os dados deste produto. Verifique se o servidor está funcionando.";

        }

    }

}


// ======================================================
// CARREGAR IMAGEM
// ======================================================

function carregarImagemProduto(
    produto
) {

    const imagemPrincipal =
        document.getElementById(
            "imagemProduto"
        );


    const miniaturas =
        document.getElementById(
            "miniaturas"
        );


    if (!imagemPrincipal) {

        return;

    }


    let imagens = [];


    // --------------------------------------------------
    // TENTAR PEGAR ARRAY DE IMAGENS
    // --------------------------------------------------

    if (
        Array.isArray(
            produto.imagens
        )
    ) {

        imagens =
            produto.imagens;

    }


    else if (
        Array.isArray(
            produto.imagem_produtos
        )
    ) {

        imagens =
            produto.imagem_produtos;

    }


    else if (
        Array.isArray(
            produto.Imagem_Produtos
        )
    ) {

        imagens =
            produto.Imagem_Produtos;

    }


    // --------------------------------------------------
    // PEGAR IMAGEM ÚNICA
    // --------------------------------------------------

    if (
        imagens.length === 0
    ) {

        const imagem =
            produto.imagem ||
            produto.imagem_produto ||
            produto.caminho_imagem ||
            produto.caminho ||
            produto.foto;


        if (imagem) {

            imagens = [
                imagem
            ];

        }

    }


    // --------------------------------------------------
    // IMAGEM PADRÃO
    // --------------------------------------------------

    if (
        imagens.length === 0
    ) {

        imagens = [
            "../assets/produto.png"
        ];

    }


    // --------------------------------------------------
    // CONVERTER OBJETOS EM CAMINHOS
    // --------------------------------------------------

    imagens =
        imagens.map(
            function (item) {

                if (
                    typeof item === "string"
                ) {

                    return item;

                }


                if (
                    item &&
                    typeof item === "object"
                ) {

                    return (
                        item.imagem ||
                        item.caminho ||
                        item.caminho_imagem ||
                        item.nome ||
                        item.url ||
                        "../assets/produto.png"
                    );

                }


                return "../assets/produto.png";

            }
        );


    // --------------------------------------------------
    // LIMPAR MINIATURAS
    // --------------------------------------------------

    if (miniaturas) {

        miniaturas.innerHTML = "";

    }


    // --------------------------------------------------
    // PRIMEIRA IMAGEM
    // --------------------------------------------------

    imagemPrincipal.src =
        montarImagem(
            imagens[0]
        );


    imagemPrincipal.onerror =
        function () {

            this.src =
                "../assets/produto.png";

        };


    // --------------------------------------------------
    // CRIAR MINIATURAS
    // --------------------------------------------------

    imagens.forEach(
        function (
            caminho,
            indice
        ) {

            if (!miniaturas) {

                return;

            }


            const img =
                document.createElement(
                    "img"
                );


            img.src =
                montarImagem(
                    caminho
                );


            img.alt =
                "Imagem do produto";


            img.className =
                "miniatura";


            if (
                indice === 0
            ) {

                img.classList.add(
                    "selecionada"
                );

            }


            img.addEventListener(
                "click",
                function () {

                    imagemPrincipal.src =
                        montarImagem(
                            caminho
                        );


                    miniaturas
                        .querySelectorAll(
                            ".miniatura"
                        )
                        .forEach(
                            function (
                                item
                            ) {

                                item.classList.remove(
                                    "selecionada"
                                );

                            }
                        );


                    img.classList.add(
                        "selecionada"
                    );

                }
            );


            miniaturas.appendChild(
                img
            );

        }
    );

}


// ======================================================
// CARREGAR CORES
// ======================================================

function carregarCores(
    produto
) {

    const container =
        document.getElementById(
            "listaCores"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    let cores = [];


    if (
        Array.isArray(
            produto.cores
        )
    ) {

        cores =
            produto.cores;

    }


    else if (
        Array.isArray(
            produto.Cores
        )
    ) {

        cores =
            produto.Cores;

    }


    else if (
        Array.isArray(
            produto.produtos_has_cores
        )
    ) {

        cores =
            produto.produtos_has_cores;

    }


    if (
        cores.length === 0
    ) {

        const vazio =
            document.createElement(
                "span"
            );


        vazio.className =
            "semOpcao";


        vazio.textContent =
            "Nenhuma cor cadastrada";


        container.appendChild(
            vazio
        );


        return;

    }


    cores.forEach(
        function (cor, indice) {

            let nomeCor;


            if (
                typeof cor === "string"
            ) {

                nomeCor =
                    cor;

            } else {

                nomeCor =
                    cor.cor ||
                    cor.nome ||
                    cor.nomeCor ||
                    cor.nome_cor ||
                    "Cor";

            }


            const botao =
                document.createElement(
                    "button"
                );


            botao.type =
                "button";


            botao.textContent =
                nomeCor;


            if (
                indice === 0
            ) {

                botao.classList.add(
                    "selecionado"
                );

            }


            botao.addEventListener(
                "click",
                function () {

                    container
                        .querySelectorAll(
                            "button"
                        )
                        .forEach(
                            function (
                                item
                            ) {

                                item.classList.remove(
                                    "selecionado"
                                );

                            }
                        );


                    botao.classList.add(
                        "selecionado"
                    );

                }
            );


            container.appendChild(
                botao
            );

        }
    );

}


// ======================================================
// CARREGAR TAMANHOS
// ======================================================

function carregarTamanhos(
    produto
) {

    const container =
        document.getElementById(
            "listaTamanhos"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    let tamanhos = [];


    if (
        Array.isArray(
            produto.tamanhos
        )
    ) {

        tamanhos =
            produto.tamanhos;

    }


    else if (
        Array.isArray(
            produto.Tamanhos
        )
    ) {

        tamanhos =
            produto.Tamanhos;

    }


    else if (
        Array.isArray(
            produto.tamanho
        )
    ) {

        tamanhos =
            produto.tamanho;

    }


    else if (
        produto.tm
    ) {

        tamanhos = [
            produto.tm
        ];

    }


    if (
        tamanhos.length === 0
    ) {

        const vazio =
            document.createElement(
                "span"
            );


        vazio.className =
            "semOpcao";


        vazio.textContent =
            "Nenhum tamanho cadastrado";


        container.appendChild(
            vazio
        );


        return;

    }


    tamanhos.forEach(
        function (
            tamanho,
            indice
        ) {

            let nomeTamanho;


            if (
                typeof tamanho === "string"
            ) {

                nomeTamanho =
                    tamanho;

            } else {

                nomeTamanho =
                    tamanho.tm ||
                    tamanho.tamanho ||
                    tamanho.nome ||
                    tamanho.nomeTamanho ||
                    "Tamanho";

            }


            const botao =
                document.createElement(
                    "button"
                );


            botao.type =
                "button";


            botao.textContent =
                nomeTamanho;


            if (
                indice === 0
            ) {

                botao.classList.add(
                    "selecionado"
                );

            }


            botao.addEventListener(
                "click",
                function () {

                    container
                        .querySelectorAll(
                            "button"
                        )
                        .forEach(
                            function (
                                item
                            ) {

                                item.classList.remove(
                                    "selecionado"
                                );

                            }
                        );


                    botao.classList.add(
                        "selecionado"
                    );

                }
            );


            container.appendChild(
                botao
            );

        }
    );

}


// ======================================================
// ESPECIFICAÇÕES
// ======================================================

function carregarEspecificacoes(
    produto
) {

    const container =
        document.getElementById(
            "listaEspecificacoes"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    adicionarEspecificacao(
        container,
        "Código",
        produto.codigo ||
        "Não informado"
    );


    adicionarEspecificacao(
        container,
        "Estoque",
        produto.quantidade_estoque ??
        0
    );


    adicionarEspecificacao(
        container,
        "Marca",
        produto.marca ||
        produto.nomeMarca ||
        produto.nome_marca ||
        "Não informada"
    );


    adicionarEspecificacao(
        container,
        "Categoria",
        produto.categoria ||
        produto.nomeCategoria ||
        produto.nome_categoria ||
        "Não informada"
    );


    const ativo =
        Number(produto.ativo) === 1 ||
        produto.ativo === true;


    adicionarEspecificacao(
        container,
        "Status",
        ativo
            ? "Ativo"
            : "Inativo"
    );

}


// ======================================================
// ADICIONAR ESPECIFICAÇÃO
// ======================================================

function adicionarEspecificacao(
    container,
    titulo,
    valor
) {

    const div =
        document.createElement(
            "div"
        );


    div.className =
        "especificacaoItem";


    const strong =
        document.createElement(
            "strong"
        );


    strong.textContent =
        titulo + ": ";


    const span =
        document.createElement(
            "span"
        );


    span.textContent =
        valor;


    div.appendChild(
        strong
    );


    div.appendChild(
        span
    );


    container.appendChild(
        div
    );

}


// ======================================================
// AVALIAÇÕES
// ======================================================

function carregarAvaliacoes(
    produto
) {

    const contador =
        document.getElementById(
            "produtoAvaliacao"
        );


    const container =
        document.getElementById(
            "listaAvaliacoes"
        );


    let avaliacoes = [];


    if (
        Array.isArray(
            produto.avaliacoes
        )
    ) {

        avaliacoes =
            produto.avaliacoes;

    }


    if (contador) {

        contador.textContent =
            `${avaliacoes.length} avaliações`;

    }


    if (!container) {

        return;

    }


    if (
        avaliacoes.length === 0
    ) {

        container.innerHTML = `
            <p>
                Este produto ainda não possui avaliações.
            </p>
        `;

        return;

    }


    container.innerHTML = "";


    avaliacoes.forEach(
        function (avaliacao) {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "avaliacaoItem";


            div.innerHTML = `
                <strong>
                    ${avaliacao.nota || 0}/5
                </strong>

                <p>
                    ${avaliacao.comentario || "Sem comentário."}
                </p>
            `;


            container.appendChild(
                div
            );

        }
    );

}


// ======================================================
// PRODUTOS RELACIONADOS
// ======================================================

async function carregarProdutosRelacionados(
    produtoAtual
) {

    const container =
        document.getElementById(
            "listaRelacionados"
        );


    if (!container) {

        return;

    }


    try {

        const resposta =
            await fetch(
                `${API}/produtos`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar produtos."
            );

        }


        const dados =
            await resposta.json();


        let produtos =
            dados.produtos ||
            dados.data ||
            dados;


        if (
            !Array.isArray(produtos)
        ) {

            produtos = [];

        }


        produtos =
            produtos.filter(
                function (produto) {

                    return String(
                        produto.idProduto ||
                        produto.id
                    ) !== String(
                        produtoAtual.idProduto ||
                        produtoAtual.id
                    );

                }
            );


        produtos =
            produtos.slice(
                0,
                4
            );


        container.innerHTML = "";


        if (
            produtos.length === 0
        ) {

            container.innerHTML = `
                <div class="semRelacionados">
                    Nenhum produto relacionado encontrado.
                </div>
            `;

            return;

        }


        produtos.forEach(
            function (produto) {

                criarProdutoRelacionado(
                    container,
                    produto
                );

            }
        );

    } catch (erro) {

        console.error(
            "Erro nos produtos relacionados:",
            erro
        );


        container.innerHTML = `
            <div class="semRelacionados">
                Não foi possível carregar os produtos relacionados.
            </div>
        `;

    }

}


// ======================================================
// CRIAR PRODUTO RELACIONADO
// ======================================================

function criarProdutoRelacionado(
    container,
    produto
) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "produtoRelacionado";


    const imagem =
        produto.imagem ||
        produto.imagem_produto ||
        produto.caminho_imagem ||
        produto.caminho ||
        "../assets/produto.png";


    const nome =
        produto.nome ||
        "Produto";


    const valor =
        produto.preco_promocional &&
            Number(produto.preco_promocional) > 0

            ? produto.preco_promocional

            : produto.preco_antigo;


    card.innerHTML = `

        <img
            src="${montarImagem(imagem)}"
            alt="${nome}"
        >

        <h3>
            ${nome}
        </h3>

        <strong>
            ${formatarPreco(valor)}
        </strong>

        <button
            type="button"
            class="btnVerProduto"
        >
            Ver produto
        </button>

    `;


    const botao =
        card.querySelector(
            ".btnVerProduto"
        );


    const id =
        produto.idProduto ||
        produto.id;


    botao.addEventListener(
        "click",
        function () {

            if (!id) {

                return;

            }


            window.location.href =
                `./produto.html?id=${id}`;

        }
    );


    container.appendChild(
        card
    );

}


// ======================================================
// ABAS
// ======================================================

function configurarAbas() {

    const abas =
        document.querySelectorAll(
            ".aba"
        );


    const conteudos =
        document.querySelectorAll(
            ".conteudo"
        );


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
// MÁSCARA CEP
// ======================================================

function configurarCep() {

    const campo =
        document.getElementById(
            "cep"
        );


    if (!campo) {

        return;

    }


    campo.addEventListener(
        "input",
        function () {

            let valor =
                this.value.replace(
                    /\D/g,
                    ""
                );


            valor =
                valor.substring(
                    0,
                    8
                );


            if (
                valor.length > 5
            ) {

                valor =
                    valor.substring(
                        0,
                        5
                    )
                    +
                    "-"
                    +
                    valor.substring(
                        5
                    );

            }


            this.value =
                valor;

        }
    );

}


// ======================================================
// FRETE
// ======================================================

function configurarFrete() {

    const botao =
        document.getElementById(
            "btnCalcularFrete"
        );


    const campo =
        document.getElementById(
            "cep"
        );


    const resultado =
        document.getElementById(
            "resultadoFrete"
        );


    if (
        !botao ||
        !campo ||
        !resultado
    ) {

        return;

    }


    botao.addEventListener(
        "click",
        function () {

            const cep =
                campo.value.replace(
                    /\D/g,
                    ""
                );


            if (
                cep.length !== 8
            ) {

                resultado.textContent =
                    "Informe um CEP válido.";


                resultado.className =
                    "resultadoFrete erro";


                return;

            }


            resultado.textContent =
                "CEP informado com sucesso. Consulte as opções de entrega.";


            resultado.className =
                "resultadoFrete sucesso";

        }
    );

}


// ======================================================
// CARRINHO
// ======================================================

function configurarCarrinho() {

    const botao =
        document.getElementById(
            "btnAdicionarCarrinho"
        );


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


            // ------------------------------------------
            // RECUPERAR CARRINHO
            // ------------------------------------------

            let carrinho =
                JSON.parse(
                    localStorage.getItem(
                        "carrinho"
                    )
                ) || [];


            const existente =
                carrinho.find(
                    function (item) {

                        return String(
                            item.idProduto
                        ) === String(
                            idProduto
                        );

                    }
                );


            if (existente) {

                existente.quantidade =
                    (existente.quantidade || 1)
                    + 1;

            } else {

                carrinho.push({

                    idProduto:
                        idProduto,

                    quantidade:
                        1

                });

            }


            localStorage.setItem(
                "carrinho",
                JSON.stringify(
                    carrinho
                )
            );


            alert(
                "Produto adicionado ao carrinho!"
            );

        }
    );

}


// ======================================================
// COMPRAR
// ======================================================

function configurarComprar() {

    const botao =
        document.getElementById(
            "btnComprar"
        );


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
                `./carrinho.html?id=${idProduto}`;

        }
    );

}


// ======================================================
// PESQUISA
// ======================================================

function pesquisarProduto() {

    const campo =
        document.getElementById(
            "campoBusca"
        );


    if (!campo) {

        return;

    }


    const busca =
        campo.value.trim();


    if (
        busca !== ""
    ) {

        window.location.href =
            `./produtos.html?busca=${encodeURIComponent(
                busca
            )}`;

    }

}


// ======================================================
// CONFIGURAR PESQUISA
// ======================================================

function configurarPesquisa() {

    const botao =
        document.getElementById(
            "btnPesquisar"
        );


    const campo =
        document.getElementById(
            "campoBusca"
        );


    if (botao) {

        botao.addEventListener(
            "click",
            pesquisarProduto
        );

    }


    if (campo) {

        campo.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    pesquisarProduto();

                }

            }
        );

    }

}


// ======================================================
// INICIAR PÁGINA
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Página de produto iniciada."
        );


        carregarProduto();

        configurarAbas();

        configurarCep();

        configurarFrete();

        configurarCarrinho();

        configurarComprar();

        configurarPesquisa();

    }
);