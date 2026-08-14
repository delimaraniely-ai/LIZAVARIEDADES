
// ======================================================
// PRODUTO.CADASTRO.JS
// LIZA VARIEDADES - ÁREA DO LOJISTA
// ======================================================


// ======================================================
// CONFIGURAÇÃO DA API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// FUNÇÃO AUXILIAR PARA TRATAR RESPOSTAS
// ======================================================

async function tratarResposta(response) {

    let data;

    try {
        data = await response.json();
    } catch (erro) {
        data = {};
    }

    if (!response.ok) {

        const mensagem =
            data.mensagem ||
            data.message ||
            `Erro HTTP ${response.status}`;

        throw new Error(mensagem);
    }

    return data;
}


// ======================================================
// FUNÇÃO AUXILIAR PARA PEGAR ARRAY DA API
// ======================================================

function pegarLista(data) {

    if (Array.isArray(data)) {
        return data;
    }

    if (Array.isArray(data.dados)) {
        return data.dados;
    }

    if (Array.isArray(data.data)) {
        return data.data;
    }

    if (Array.isArray(data.resultado)) {
        return data.resultado;
    }

    return [];
}


// ======================================================
// CARREGAR DADOS QUANDO A PÁGINA ABRIR
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Página de cadastro de produtos carregada.");

    listarMarcas();

    listarCategorias();

    listarCores();

    listarTamanhos();

    listarProdutosImagem();

    configurarCadastroProduto();

    configurarCadastroMarca();

    configurarCadastroCategoria();

    configurarCadastroCor();

    configurarCadastroTamanho();

    configurarCadastroImagem();

});


// ======================================================
// LISTAR MARCAS
// ======================================================

async function listarMarcas() {

    const select = document.getElementById("produtoMarca");

    if (!select) {
        return;
    }

    try {

        const response = await fetch(`${API}/marca`);

        const data = await tratarResposta(response);

        const marcas = pegarLista(data);

        select.innerHTML = "";

        const opcaoInicial = document.createElement("option");

        opcaoInicial.value = "";

        opcaoInicial.textContent = "Selecione uma marca";

        select.appendChild(opcaoInicial);


        marcas.forEach(function (marca) {

            const option = document.createElement("option");

            option.value =
                marca.idMarca ??
                marca.id ??
                marca.Marca_idMarca;

            option.textContent =
                marca.nome ??
                marca.nomeMarca ??
                "Marca";

            select.appendChild(option);

        });

    } catch (erro) {

        console.error("Erro ao listar marcas:", erro);

        select.innerHTML =
            '<option value="">Erro ao carregar marcas</option>';
    }
}


// ======================================================
// LISTAR CATEGORIAS
// ======================================================

async function listarCategorias() {

    const select =
        document.getElementById("produtoCategoria");

    if (!select) {
        return;
    }

    try {

        /*
         * Ajuste aqui caso sua rota esteja diferente.
         * Pelo padrão do seu projeto, usamos /categorias.
         */

        const response =
            await fetch(`${API}/categoria`);

        const data =
            await tratarResposta(response);

        const categorias =
            pegarLista(data);

        select.innerHTML = "";

        const opcaoInicial =
            document.createElement("option");

        opcaoInicial.value = "";

        opcaoInicial.textContent =
            "Selecione uma categoria";

        select.appendChild(opcaoInicial);


        categorias.forEach(function (categoria) {

            const option =
                document.createElement("option");

            option.value =
                categoria.idCategoria ??
                categoria.id ??
                categoria.Categoria_idCategoria;

            option.textContent =
                categoria.nome ??
                categoria.nomeCategoria ??
                "Categoria";

            select.appendChild(option);

        });

    } catch (erro) {

        console.error(
            "Erro ao listar categorias:",
            erro
        );

        select.innerHTML =
            '<option value="">Erro ao carregar categorias</option>';
    }
}


// ======================================================
// LISTAR PRODUTOS PARA O SELECT DE IMAGEM
// ======================================================

async function listarProdutosImagem() {

    const select =
        document.getElementById("imagemProduto");

    if (!select) {
        return;
    }

    try {

        const response =
            await fetch(`${API}/produto`);

        const data =
            await tratarResposta(response);

        const produtos =
            pegarLista(data);

        select.innerHTML = "";

        const opcaoInicial =
            document.createElement("option");

        opcaoInicial.value = "";

        opcaoInicial.textContent =
            "Selecione o produto";

        select.appendChild(opcaoInicial);


        produtos.forEach(function (produto) {

            const option =
                document.createElement("option");

            option.value =
                produto.idProduto ??
                produto.id ??
                produto.Produto_idProduto;

            option.textContent =
                produto.nome ??
                produto.nomeProduto ??
                "Produto";

            select.appendChild(option);

        });

    } catch (erro) {

        console.error(
            "Erro ao listar produtos:",
            erro
        );

        select.innerHTML =
            '<option value="">Erro ao carregar produtos</option>';
    }
}


// ======================================================
// CADASTRO DE PRODUTO
// ======================================================


// ======================================================
// CADASTRO DE PRODUTO
// ======================================================


function configurarCadastroProduto() {

    // ==================================================
    // LOCALIZAR BOTÃO
    // ==================================================

    const botao = document.getElementById("btnProduto");


    // ==================================================
    // VERIFICAR SE O BOTÃO EXISTE
    // ==================================================

    if (!botao) {

        console.error(
            "Botão btnProduto não encontrado."
        );

        return;
    }


    // ==================================================
    // EVENTO DO BOTÃO
    // ==================================================

    botao.addEventListener("click", async function () {

        // ==================================================
        // CAPTURAR DADOS DO PRODUTO
        // ==================================================

        const nome =
            document.getElementById("produtoNome").value.trim();


        const descricao =
            document.getElementById("produtoDescricao").value.trim();


        const codigo =
            document.getElementById("produtoCodigo").value.trim();


        const precoAntigo =
            document.getElementById("produtoPrecoAntigo").value;


        const precoPromocional =
            document.getElementById("produtoPrecoPromo").value;


        const quantidadeEstoque =
            document.getElementById("produtoEstoque").value;


        // ==================================================
        // CAPTURAR MARCA
        // ==================================================

        const marca =
            document.getElementById("produtoMarca").value;


        // ==================================================
        // CAPTURAR CATEGORIA
        // ==================================================

        const categoria =
            document.getElementById("produtoCategoria").value;


        // ==================================================
        // CAPTURAR STATUS
        // ==================================================

        const status =
            document.getElementById("produtoStatus").value;


        // ==================================================
        // VALIDAÇÃO DO NOME
        // ==================================================

        if (!nome) {

            alert("Informe o nome do produto.");

            document.getElementById("produtoNome").focus();

            return;
        }


        // ==================================================
        // VALIDAÇÃO DA DESCRIÇÃO
        // ==================================================

        if (!descricao) {

            alert("Informe a descrição do produto.");

            document.getElementById("produtoDescricao").focus();

            return;
        }


        // ==================================================
        // VALIDAÇÃO DO CÓDIGO
        // ==================================================

        if (!codigo) {

            alert("Informe o código do produto.");

            document.getElementById("produtoCodigo").focus();

            return;
        }


        // ==================================================
        // VALIDAÇÃO DO PREÇO ANTIGO
        // ==================================================

        if (precoAntigo === "") {

            alert("Informe o preço antigo.");

            document.getElementById("produtoPrecoAntigo").focus();

            return;
        }


        // ==================================================
        // VALIDAÇÃO DO PREÇO PROMOCIONAL
        // ==================================================

        if (precoPromocional === "") {

            alert("Informe o preço promocional.");

            document.getElementById("produtoPrecoPromo").focus();

            return;
        }


        // ==================================================
        // VALIDAÇÃO DO ESTOQUE
        // ==================================================

        if (quantidadeEstoque === "") {

            alert("Informe a quantidade em estoque.");

            document.getElementById("produtoEstoque").focus();

            return;
        }


        // ==================================================
        // VALIDAÇÃO DA MARCA
        // ==================================================

        if (!marca) {

            alert("Selecione uma marca.");

            document.getElementById("produtoMarca").focus();

            return;
        }


        // ==================================================
        // VALIDAÇÃO DA CATEGORIA
        // ==================================================

        if (!categoria) {

            alert("Selecione uma categoria.");

            document.getElementById("produtoCategoria").focus();

            return;
        }


        // ==================================================
        // CONVERTER VALORES
        // ==================================================

        const precoAntigoNumero =
            Number(precoAntigo);


        const precoPromocionalNumero =
            Number(precoPromocional);


        const quantidadeEstoqueNumero =
            Number(quantidadeEstoque);


        // ==================================================
        // VALIDAR PREÇO ANTIGO
        // ==================================================

        if (
            Number.isNaN(precoAntigoNumero) ||
            precoAntigoNumero < 0
        ) {

            alert("Informe um preço antigo válido.");

            document.getElementById("produtoPrecoAntigo").focus();

            return;
        }


        // ==================================================
        // VALIDAR PREÇO PROMOCIONAL
        // ==================================================

        if (
            Number.isNaN(precoPromocionalNumero) ||
            precoPromocionalNumero < 0
        ) {

            alert("Informe um preço promocional válido.");

            document.getElementById("produtoPrecoPromo").focus();

            return;
        }


        // ==================================================
        // VALIDAR ESTOQUE
        // ==================================================

        if (
            Number.isNaN(quantidadeEstoqueNumero) ||
            quantidadeEstoqueNumero < 0
        ) {

            alert(
                "Informe uma quantidade de estoque válida."
            );

            document.getElementById("produtoEstoque").focus();

            return;
        }


        // ==================================================
        // CONVERTER STATUS
        // ==================================================

        const ativo =
            status === "true" ||
            status === "1";


        // ==================================================
        // CRIAR OBJETO DO PRODUTO
        // ==================================================

        const produto = {

            nome: nome,

            descricao: descricao,

            codigo: codigo,

            preco_antigo: precoAntigoNumero,

            preco_promocional:
                precoPromocional === ""
                    ? null
                    : precoPromocionalNumero,

            quantidade_estoque:
                quantidadeEstoqueNumero,

            ativo:
                ativo,

            Loja_idLoja:
                1,

            Marca_idMarca:
                marca
                    ? Number(marca)
                    : null,

            Categoria_idCategoria:
                categoria
                    ? Number(categoria)
                    : null

        };


        // ==================================================
        // MOSTRAR DADOS NO CONSOLE
        // ==================================================

        console.log(
            "Produto que será enviado:",
            produto
        );


        // ==================================================
        // DESABILITAR BOTÃO
        // ==================================================

        botao.disabled = true;

        botao.textContent =
            "Cadastrando...";


        try {

            // ==================================================
            // ENVIAR PRODUTO PARA A API
            // ==================================================

            const response = await fetch(
                `${API}/produto`,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(produto)

                }
            );


            // ==================================================
            // VERIFICAR RESPOSTA HTTP
            // ==================================================

            if (!response.ok) {

                let erroResposta;

                try {

                    erroResposta =
                        await response.json();

                } catch (erro) {

                    erroResposta = {};

                }


                throw new Error(
                    erroResposta.mensagem ||
                    "Erro ao cadastrar produto."
                );
            }


            // ==================================================
            // CONVERTER RESPOSTA
            // ==================================================

            const data =
                await response.json();


            // ==================================================
            // MOSTRAR RESPOSTA NO CONSOLE
            // ==================================================

            console.log(
                "Produto cadastrado:",
                data
            );


            // ==================================================
            // MENSAGEM DE SUCESSO
            // ==================================================

            alert(
                data.mensagem ||
                "Produto cadastrado com sucesso!"
            );


            // ==================================================
            // LIMPAR CAMPOS
            // ==================================================

            document.getElementById(
                "produtoNome"
            ).value = "";


            document.getElementById(
                "produtoDescricao"
            ).value = "";


            document.getElementById(
                "produtoCodigo"
            ).value = "";


            document.getElementById(
                "produtoPrecoAntigo"
            ).value = "";


            document.getElementById(
                "produtoPrecoPromo"
            ).value = "";


            document.getElementById(
                "produtoEstoque"
            ).value = "";


            // ==================================================
            // RESETAR MARCA
            // ==================================================

            document.getElementById(
                "produtoMarca"
            ).value = "";


            // ==================================================
            // RESETAR CATEGORIA
            // ==================================================

            document.getElementById(
                "produtoCategoria"
            ).value = "";


            // ==================================================
            // RESETAR STATUS
            // ==================================================

            document.getElementById(
                "produtoStatus"
            ).value = "true";


            // ==================================================
            // ATUALIZAR LISTA DE PRODUTOS
            // ==================================================

            if (
                typeof listarProdutosImagem ===
                "function"
            ) {

                listarProdutosImagem();

            }


        } catch (erro) {

            // ==================================================
            // ERRO
            // ==================================================

            console.error(
                "Erro ao cadastrar produto:",
                erro
            );


            alert(
                "Erro ao cadastrar produto: " +
                erro.message
            );


        } finally {

            // ==================================================
            // LIBERAR BOTÃO
            // ==================================================

            botao.disabled = false;

            botao.textContent =
                "Cadastrar Produto";

        }

    });

}



// ======================================================
// CADASTRO DE MARCA
// ======================================================

function configurarCadastroMarca() {

    const botao =
        document.getElementById("btnMarca");

    if (!botao) {
        return;
    }


    botao.addEventListener(
        "click",
        async function () {

            const nome =
                document.getElementById(
                    "marcaNome"
                ).value.trim();


            const logo =
                document.getElementById(
                    "marcaLogo"
                ).files[0];


            // ==================================================
            // VALIDAÇÃO
            // ==================================================

            if (!nome) {

                alert(
                    "Informe o nome da marca."
                );

                return;
            }


            if (!logo) {

                alert(
                    "Selecione uma imagem para a logo."
                );

                return;
            }


            // ==================================================
            // VALIDAR TIPO DO ARQUIVO
            // ==================================================

            if (!logo.type.startsWith("image/")) {

                alert(
                    "Selecione um arquivo de imagem válido."
                );

                return;
            }


            // ==================================================
            // FORMDATA
            // ==================================================

            const formData =
                new FormData();


            formData.append(
                "nome",
                nome
            );


            formData.append(
                "logo",
                logo
            );


            botao.disabled = true;

            botao.textContent =
                "Salvando...";


            try {

                const response =
                    await fetch(
                        `${API}/marca`,
                        {
                            method: "POST",
                            body: formData
                        }
                    );


                const data =
                    await tratarResposta(response);


                console.log(
                    "Marca cadastrada:",
                    data
                );


                alert(
                    data.mensagem ||
                    "Marca cadastrada com sucesso!"
                );


                document.getElementById(
                    "marcaNome"
                ).value = "";


                document.getElementById(
                    "marcaLogo"
                ).value = "";


                // Atualizar select de marcas

                listarMarcas();


            } catch (erro) {

                console.error(
                    "Erro ao cadastrar marca:",
                    erro
                );

                alert(
                    "Erro ao cadastrar marca: " +
                    erro.message
                );

            } finally {

                botao.disabled = false;

                botao.textContent =
                    "Salvar Marca";
            }

        }
    );
}


// ======================================================
// CADASTRO DE CATEGORIA
// ======================================================

function configurarCadastroCategoria() {

    const botao =
        document.getElementById(
            "btnCategoria"
        );

    if (!botao) {
        return;
    }


    botao.addEventListener(
        "click",
        async function () {

            const input =
                document.getElementById(
                    "categoriaNome"
                );


            const nome =
                input.value.trim();


            if (!nome) {

                alert(
                    "Informe o nome da categoria."
                );

                input.focus();

                return;
            }


            const categoria = {

                nome: nome

            };


            botao.disabled = true;

            botao.textContent =
                "Salvando...";


            try {

                const response =
                    await fetch(
                        `${API}/categoria`,
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    categoria
                                )
                        }
                    );


                const data =
                    await tratarResposta(
                        response
                    );


                console.log(
                    "Categoria cadastrada:",
                    data
                );


                alert(
                    data.mensagem ||
                    "Categoria cadastrada com sucesso!"
                );


                input.value = "";


                // Atualizar select

                listarCategorias();


            } catch (erro) {

                console.error(
                    "Erro ao cadastrar categoria:",
                    erro
                );

                alert(
                    "Erro ao cadastrar categoria: " +
                    erro.message
                );

            } finally {

                botao.disabled = false;

                botao.textContent =
                    "Salvar Categoria";
            }

        }
    );
}


// ======================================================
// CADASTRO DE COR
// ======================================================

function configurarCadastroCor() {

    const botao =
        document.getElementById("btnCor");

    if (!botao) {
        return;
    }


    botao.addEventListener(
        "click",
        async function () {

            const nome =
                document.getElementById(
                    "corNome"
                ).value.trim();


            const codigoCor =
                document.getElementById(
                    "corCodigo"
                ).value.trim();


            if (!nome) {

                alert(
                    "Informe o nome da cor."
                );

                return;
            }


            if (!codigoCor) {

                alert(
                    "Informe o código da cor."
                );

                return;
            }


            const cor = {

                nome: nome,

                codigo_cor: codigoCor

            };


            botao.disabled = true;

            botao.textContent =
                "Salvando...";


            try {

                const response =
                    await fetch(
                        `${API}/cores`,
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(cor)
                        }
                    );


                const data =
                    await tratarResposta(
                        response
                    );


                console.log(
                    "Cor cadastrada:",
                    data
                );


                alert(
                    data.mensagem ||
                    "Cor cadastrada com sucesso!"
                );


                document.getElementById(
                    "corNome"
                ).value = "";


                document.getElementById(
                    "corCodigo"
                ).value = "";


            } catch (erro) {

                console.error(
                    "Erro ao cadastrar cor:",
                    erro
                );

                alert(
                    "Erro ao cadastrar cor: " +
                    erro.message
                );

            } finally {

                botao.disabled = false;

                botao.textContent =
                    "Salvar Cor";
            }

        }
    );
}


// ======================================================
// CADASTRO DE TAMANHO
// ======================================================

function configurarCadastroTamanho() {

    const botao =
        document.getElementById(
            "btnTamanho"
        );

    if (!botao) {
        return;
    }


    botao.addEventListener(
        "click",
        async function () {

            const input =
                document.getElementById(
                    "tamanhoNome"
                );


            const tamanhoNome =
                input.value.trim();


            if (!tamanhoNome) {

                alert(
                    "Informe o tamanho."
                );

                input.focus();

                return;
            }


            const tamanho = {

                tm: tamanhoNome

            };


            botao.disabled = true;

            botao.textContent =
                "Salvando...";


            try {

                const response =
                    await fetch(
                        `${API}/tamanho`,
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    tamanho
                                )
                        }
                    );


                const data =
                    await tratarResposta(
                        response
                    );


                console.log(
                    "Tamanho cadastrado:",
                    data
                );


                alert(
                    data.mensagem ||
                    "Tamanho cadastrado com sucesso!"
                );


                input.value = "";


            } catch (erro) {

                console.error(
                    "Erro ao cadastrar tamanho:",
                    erro
                );

                alert(
                    "Erro ao cadastrar tamanho: " +
                    erro.message
                );

            } finally {

                botao.disabled = false;

                botao.textContent =
                    "Salvar Tamanho";
            }

        }
    );
}


// ======================================================
// CADASTRO DE IMAGEM DO PRODUTO
// ======================================================

function configurarCadastroImagem() {

    const botao =
        document.getElementById(
            "btnImagem"
        );

    if (!botao) {
        return;
    }


    botao.addEventListener(
        "click",
        async function () {

            const produto =
                document.getElementById(
                    "imagemProduto"
                ).value;


            const arquivo =
                document.getElementById(
                    "imagemArquivo"
                ).files[0];


            // ==================================================
            // VALIDAÇÃO
            // ==================================================

            if (!produto) {

                alert(
                    "Selecione o produto."
                );

                return;
            }


            if (!arquivo) {

                alert(
                    "Selecione uma imagem."
                );

                return;
            }


            if (!arquivo.type.startsWith("image/")) {

                alert(
                    "Selecione um arquivo de imagem válido."
                );

                return;
            }


            // ==================================================
            // FORMDATA
            // ==================================================

            const formData =
                new FormData();


            formData.append(
                "Produto_idProduto",
                produto
            );


            formData.append(
                "imagem",
                arquivo
            );


            botao.disabled = true;

            botao.textContent =
                "Salvando...";


            try {

                const response =
                    await fetch(
                        `${API}/imagem-produto`,
                        {

                            method: "POST",

                            body: formData

                        }
                    );


                const data =
                    await tratarResposta(
                        response
                    );


                console.log(
                    "Imagem cadastrada:",
                    data
                );


                alert(
                    data.mensagem ||
                    "Imagem cadastrada com sucesso!"
                );


                document.getElementById(
                    "imagemArquivo"
                ).value = "";


                document.getElementById(
                    "imagemProduto"
                ).value = "";


            } catch (erro) {

                console.error(
                    "Erro ao cadastrar imagem:",
                    erro
                );

                alert(
                    "Erro ao cadastrar imagem: " +
                    erro.message
                );

            } finally {

                botao.disabled = false;

                botao.textContent =
                    "Salvar Imagem";
            }

        }
    );
}


// ======================================================
// PESQUISA DE PRODUTOS
// ======================================================

const campoPesquisa =
    document.getElementById("pesquisa");


if (campoPesquisa) {

    campoPesquisa.addEventListener(
        "input",
        function () {

            const texto =
                this.value
                    .trim()
                    .toLowerCase();

            console.log(
                "Pesquisa:",
                texto
            );

        }
    );
}


// ======================================================
// LISTAR CORES
// ======================================================

async function listarCores() {

    const select =
        document.getElementById("corProduto");

    if (!select) {
        return;
    }

    try {

        const response =
            await fetch(`${API}/cores`);

        const data =
            await tratarResposta(response);

        const cores =
            pegarLista(data);

        select.innerHTML = "";

        const opcaoInicial =
            document.createElement("option");

        opcaoInicial.value = "";

        opcaoInicial.textContent =
            "Selecione uma cor";

        select.appendChild(opcaoInicial);


        cores.forEach(function (cor) {

            const option =
                document.createElement("option");

            option.value =
                cor.idCor ??
                cor.id ??
                cor.Cores_idCores;

            option.textContent =
                cor.nome ??
                cor.nomeCor ??
                "Cor";

            select.appendChild(option);

        });

    } catch (erro) {

        console.error(
            "Erro ao listar cores:",
            erro
        );

        select.innerHTML =
            '<option value="">Erro ao carregar cores</option>';
    }
}



// ======================================================
// LISTAR TAMANHOS
// ======================================================

async function listarTamanhos() {

    // ==================================================
    // PEGAR SELECT DO HTML
    // ==================================================

    const select =
        document.getElementById("tamanhoProduto");


    // ==================================================
    // VERIFICAR SE O SELECT EXISTE
    // ==================================================

    if (!select) {

        console.error(
            "Select tamanhoProduto não encontrado no HTML."
        );

        return;
    }


    try {

        // ==================================================
        // BUSCAR TAMANHOS NA API
        // ==================================================

        const response =
            await fetch(`${API}/tamanho`);


        // ==================================================
        // VERIFICAR RESPOSTA
        // ==================================================

        if (!response.ok) {

            throw new Error(
                `Erro HTTP ${response.status}`
            );

        }


        // ==================================================
        // CONVERTER RESPOSTA PARA JSON
        // ==================================================

        const data =
            await response.json();


        // ==================================================
        // MOSTRAR RESPOSTA NO CONSOLE
        // ==================================================

        console.log(
            "Resposta da API:",
            data
        );


        // ==================================================
        // PEGAR ARRAY DE TAMANHOS
        // ==================================================

        const tamanhos =
            data.tamanhos || [];


        // ==================================================
        // LIMPAR SELECT
        // ==================================================

        select.innerHTML = "";


        // ==================================================
        // OPÇÃO INICIAL
        // ==================================================

        const opcaoInicial =
            document.createElement("option");

        opcaoInicial.value = "";

        opcaoInicial.textContent =
            "Selecione um tamanho";

        select.appendChild(
            opcaoInicial
        );


        // ==================================================
        // VERIFICAR SE EXISTEM TAMANHOS
        // ==================================================

        if (tamanhos.length === 0) {

            const opcao =
                document.createElement("option");

            opcao.value = "";

            opcao.textContent =
                "Nenhum tamanho cadastrado";

            select.appendChild(
                opcao
            );

            return;
        }


        // ==================================================
        // ADICIONAR TAMANHOS
        // ==================================================

        tamanhos.forEach(
            function (tamanho) {

                const option =
                    document.createElement("option");


                // ==========================================
                // ID
                // ==========================================

                option.value =
                    tamanho.idTamanho;


                // ==========================================
                // NOME
                // ==========================================

                option.textContent =
                    tamanho.tm;


                // ==========================================
                // ADICIONAR AO SELECT
                // ==========================================

                select.appendChild(
                    option
                );

            }
        );


    } catch (erro) {

        // ==================================================
        // TRATAMENTO DE ERRO
        // ==================================================

        console.error(
            "Erro ao listar tamanhos:",
            erro
        );


        select.innerHTML =
            '<option value="">Erro ao carregar tamanhos</option>';

    }

}

