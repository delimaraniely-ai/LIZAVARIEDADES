// ======================================================
// API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// ELEMENTOS
// ======================================================

const btnProduto = document.getElementById("btnProduto");

const mensagemProduto =
    document.getElementById("mensagemProduto");


// ======================================================
// CARREGAR TÍTULO
// ======================================================

document.getElementById("tituloPagina").textContent =
    "Cadastro de Produtos";

document.getElementById("descricaoPagina").textContent =
    "Preencha os dados abaixo para cadastrar um novo produto.";


// ======================================================
// ELEMENTOS DOS SELECTS
// ======================================================

const selectMarca =
    document.getElementById("produtoMarca");

const selectCategoria =
    document.getElementById("produtoCategoria");

const selectLoja =
    document.getElementById("produtoLoja");


// ======================================================
// MENSAGEM
// ======================================================

function mostrarMensagem(texto, tipo = "erro") {

    mensagemProduto.textContent = texto;

    mensagemProduto.className =
        "mensagem " + tipo;

}


// ======================================================
// LIMPAR MENSAGEM
// ======================================================

function limparMensagem() {

    mensagemProduto.textContent = "";

    mensagemProduto.className =
        "mensagem";

}


// ======================================================
// LISTAR MARCAS
// ======================================================

function listarMarcas() {

    fetch(`${API}/marcas`)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao buscar marcas."
                );

            }

            return response.json();

        })

        .then(data => {

            selectMarca.innerHTML = "";

            const optionInicial =
                document.createElement("option");

            optionInicial.value = "";

            optionInicial.textContent =
                "Selecione a marca";

            selectMarca.appendChild(
                optionInicial
            );


            // =========================================
            // VERIFICAR FORMATO DA RESPOSTA
            // =========================================

            const marcas =
                data.marcas || data;


            marcas.forEach(marca => {

                const option =
                    document.createElement("option");


                option.value =
                    marca.idMarca;

                option.textContent =
                    marca.nome;


                selectMarca.appendChild(
                    option
                );

            });

        })

        .catch(erro => {

            console.error(
                "Erro ao carregar marcas:",
                erro
            );

            selectMarca.innerHTML = "";

            const option =
                document.createElement("option");

            option.value = "";

            option.textContent =
                "Erro ao carregar marcas";

            selectMarca.appendChild(
                option
            );

        });

}


// ======================================================
// LISTAR CATEGORIAS
// ======================================================

function listarCategorias() {

    fetch(`${API}/categorias`)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao buscar categorias."
                );

            }

            return response.json();

        })

        .then(data => {

            selectCategoria.innerHTML = "";

            const optionInicial =
                document.createElement("option");

            optionInicial.value = "";

            optionInicial.textContent =
                "Selecione a categoria";

            selectCategoria.appendChild(
                optionInicial
            );


            const categorias =
                data.categorias || data;


            categorias.forEach(categoria => {

                const option =
                    document.createElement("option");


                option.value =
                    categoria.idCategoria;

                option.textContent =
                    categoria.nome;


                selectCategoria.appendChild(
                    option
                );

            });

        })

        .catch(erro => {

            console.error(
                "Erro ao carregar categorias:",
                erro
            );

            selectCategoria.innerHTML = "";

            const option =
                document.createElement("option");

            option.value = "";

            option.textContent =
                "Erro ao carregar categorias";

            selectCategoria.appendChild(
                option
            );

        });

}


// ======================================================
// LISTAR LOJAS
// ======================================================

function listarLojas() {

    fetch(`${API}/lojas`)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao buscar lojas."
                );

            }

            return response.json();

        })

        .then(data => {

            selectLoja.innerHTML = "";

            const optionInicial =
                document.createElement("option");

            optionInicial.value = "";

            optionInicial.textContent =
                "Selecione a loja";

            selectLoja.appendChild(
                optionInicial
            );


            const lojas =
                data.lojas || data;


            lojas.forEach(loja => {

                const option =
                    document.createElement("option");


                option.value =
                    loja.idLoja;

                option.textContent =
                    loja.nome;


                selectLoja.appendChild(
                    option
                );

            });

        })

        .catch(erro => {

            console.error(
                "Erro ao carregar lojas:",
                erro
            );

            selectLoja.innerHTML = "";

            const option =
                document.createElement("option");

            option.value = "";

            option.textContent =
                "Erro ao carregar lojas";

            selectLoja.appendChild(
                option
            );

        });

}


// ======================================================
// CADASTRAR PRODUTO
// ======================================================

btnProduto.addEventListener(
    "click",
    cadastrarProduto
);


async function cadastrarProduto() {

    limparMensagem();


    // ==================================================
    // PEGAR DADOS
    // ==================================================

    const nome =
        document
            .getElementById("produtoNome")
            .value
            .trim();


    const descricao =
        document
            .getElementById("produtoDescricao")
            .value
            .trim();


    const codigo =
        document
            .getElementById("produtoCodigo")
            .value
            .trim();


    const quantidadeEstoque =
        document
            .getElementById("produtoEstoque")
            .value;


    const precoAntigo =
        document
            .getElementById("produtoPrecoAntigo")
            .value;


    const precoPromocional =
        document
            .getElementById("produtoPrecoPromo")
            .value;


    const marca =
        document
            .getElementById("produtoMarca")
            .value;


    const categoria =
        document
            .getElementById("produtoCategoria")
            .value;


    const status =
        document
            .getElementById("produtoStatus")
            .value;


    const loja =
        document
            .getElementById("produtoLoja")
            .value;


    // ==================================================
    // VALIDAÇÃO
    // ==================================================

    if (!nome) {

        mostrarMensagem(
            "Digite o nome do produto."
        );

        return;

    }


    if (!descricao) {

        mostrarMensagem(
            "Digite a descrição do produto."
        );

        return;

    }


    if (!codigo) {

        mostrarMensagem(
            "Digite o código do produto."
        );

        return;

    }


    if (
        quantidadeEstoque === "" ||
        quantidadeEstoque === null
    ) {

        mostrarMensagem(
            "Digite a quantidade em estoque."
        );

        return;

    }


    if (
        precoAntigo === "" ||
        precoAntigo === null
    ) {

        mostrarMensagem(
            "Digite o preço antigo."
        );

        return;

    }


    if (!marca) {

        mostrarMensagem(
            "Selecione uma marca."
        );

        return;

    }


    if (!categoria) {

        mostrarMensagem(
            "Selecione uma categoria."
        );

        return;

    }


    if (!loja) {

        mostrarMensagem(
            "Selecione uma loja."
        );

        return;

    }


    // ==================================================
    // VALIDAR PREÇOS
    // ==================================================

    if (
        Number(precoAntigo) < 0
    ) {

        mostrarMensagem(
            "O preço antigo não pode ser negativo."
        );

        return;

    }


    if (
        precoPromocional !== "" &&
        Number(precoPromocional) < 0
    ) {

        mostrarMensagem(
            "O preço promocional não pode ser negativo."
        );

        return;

    }


    // ==================================================
    // OBJETO PRODUTO
    // ==================================================

    const produto = {

        nome: nome,

        descricao: descricao,

        codigo: codigo,

        preco_antigo:
            Number(precoAntigo),

        preco_promocional:
            precoPromocional === ""
                ? null
                : Number(precoPromocional),

        quantidade_estoque:
            Number(quantidadeEstoque),

        ativo:
            status === "true",

        Loja_idLoja:
            Number(loja),

        Marca_idMarca:
            Number(marca),

        Categoria_idCategoria:
            Number(categoria)

    };


    // ==================================================
    // CONFERIR NO CONSOLE
    // ==================================================

    console.log(
        "Produto enviado:",
        produto
    );


    // ==================================================
    // DESABILITAR BOTÃO
    // ==================================================

    btnProduto.disabled = true;

    btnProduto.textContent =
        "Cadastrando...";


    // ==================================================
    // ENVIAR PARA API
    // ==================================================

    try {

        const resposta =
            await fetch(
                `${API}/produtos`,
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


        // ==============================================
        // TENTAR LER RESPOSTA
        // ==============================================

        const dados =
            await resposta.json();


        console.log(
            "Resposta da API:",
            dados
        );


        // ==============================================
        // VERIFICAR ERRO
        // ==============================================

        if (!resposta.ok) {

            throw new Error(

                dados.mensagem ||

                dados.message ||

                "Erro ao cadastrar produto."

            );

        }


        // ==============================================
        // SUCESSO
        // ==============================================

        mostrarMensagem(
            "Produto cadastrado com sucesso!",
            "sucesso"
        );


        // ==============================================
        // LIMPAR FORMULÁRIO
        // ==============================================

        document
            .getElementById("produtoNome")
            .value = "";

        document
            .getElementById("produtoDescricao")
            .value = "";

        document
            .getElementById("produtoCodigo")
            .value = "";

        document
            .getElementById("produtoEstoque")
            .value = "";

        document
            .getElementById("produtoPrecoAntigo")
            .value = "";

        document
            .getElementById("produtoPrecoPromo")
            .value = "";

        selectMarca.value = "";

        selectCategoria.value = "";

        selectLoja.value = "";

        selectMarca.focus();


    } catch (erro) {

        console.error(
            "Erro ao cadastrar produto:",
            erro
        );


        mostrarMensagem(
            erro.message ||
            "Não foi possível cadastrar o produto."
        );


    } finally {

        btnProduto.disabled = false;

        btnProduto.textContent =
            "Cadastrar Produto";

    }

}


// ======================================================
// INICIALIZAR
// ======================================================

listarMarcas();

listarCategorias();

listarLojas();