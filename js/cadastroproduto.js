// ======================================================
// API
// ======================================================

const API = "http://localhost:3000";


// ======================================================
// ELEMENTOS DO HTML
// ======================================================

const form =
    document.getElementById("formCadastroProduto");

const btnCadastrar =
    document.getElementById("btnCadastrar");

const btnLimpar =
    document.getElementById("btnLimpar");

const mensagem =
    document.getElementById("mensagem");

const campoNome =
    document.getElementById("nome");

const campoDescricao =
    document.getElementById("descricao");

const campoCodigo =
    document.getElementById("codigo");

const campoEstoque =
    document.getElementById("quantidade_estoque");

const campoPrecoAntigo =
    document.getElementById("preco_antigo");

const campoPrecoPromocional =
    document.getElementById("preco_promocional");

const selectMarca =
    document.getElementById("marca");

const selectCategoria =
    document.getElementById("categoria");

const selectAtivo =
    document.getElementById("ativo");

const selectLoja =
    document.getElementById("loja");


// ======================================================
// VERIFICAR ELEMENTOS
// ======================================================

console.log("Elementos encontrados:");

console.log("Formulário:", form);
console.log("Botão:", btnCadastrar);
console.log("Nome:", campoNome);
console.log("Descrição:", campoDescricao);
console.log("Código:", campoCodigo);
console.log("Estoque:", campoEstoque);
console.log("Preço antigo:", campoPrecoAntigo);
console.log("Preço promocional:", campoPrecoPromocional);
console.log("Marca:", selectMarca);
console.log("Categoria:", selectCategoria);
console.log("Status:", selectAtivo);
console.log("Loja:", selectLoja);


// ======================================================
// MENSAGEM
// ======================================================

function mostrarMensagem(texto, tipo = "erro") {

    if (!mensagem) {
        return;
    }

    mensagem.textContent = texto;

    mensagem.className = "mensagem";

    if (tipo) {
        mensagem.classList.add(tipo);
    }
}


// ======================================================
// LIMPAR MENSAGEM
// ======================================================

function limparMensagem() {

    if (!mensagem) {
        return;
    }

    mensagem.textContent = "";

    mensagem.className = "mensagem";
}


// ======================================================
// LER RESPOSTA DA API
// ======================================================

async function lerResposta(response) {

    const texto = await response.text();

    if (!texto) {
        return {};
    }

    try {

        return JSON.parse(texto);

    } catch (erro) {

        console.error(
            "Resposta da API não é JSON:",
            texto
        );

        return {
            mensagem: texto
        };
    }
}


// ======================================================
// CARREGAR MARCAS
// ======================================================

async function listarMarcas() {

    try {

        const resposta =
            await fetch(`${API}/marcas`);

        const dados =
            await lerResposta(resposta);


        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                dados.message ||
                "Erro ao carregar marcas."
            );
        }


        const marcas =
            Array.isArray(dados)
                ? dados
                : dados.marcas || [];


        selectMarca.innerHTML = `
            <option value="">
                Selecione uma marca
            </option>
        `;


        marcas.forEach(function (marca) {

            const option =
                document.createElement("option");

            option.value =
                marca.idMarca;

            option.textContent =
                marca.nome;

            selectMarca.appendChild(option);

        });


    } catch (erro) {

        console.error(
            "Erro ao carregar marcas:",
            erro
        );

        selectMarca.innerHTML = `
            <option value="">
                Erro ao carregar marcas
            </option>
        `;
    }
}


// ======================================================
// CARREGAR CATEGORIAS
// ======================================================

async function listarCategorias() {

    try {

        const resposta =
            await fetch(`${API}/categorias`);

        const dados =
            await lerResposta(resposta);


        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                dados.message ||
                "Erro ao carregar categorias."
            );
        }


        const categorias =
            Array.isArray(dados)
                ? dados
                : dados.categorias || [];


        selectCategoria.innerHTML = `
            <option value="">
                Selecione uma categoria
            </option>
        `;


        categorias.forEach(function (categoria) {

            const option =
                document.createElement("option");

            option.value =
                categoria.idCategoria;

            option.textContent =
                categoria.nome;

            selectCategoria.appendChild(option);

        });


    } catch (erro) {

        console.error(
            "Erro ao carregar categorias:",
            erro
        );

        selectCategoria.innerHTML = `
            <option value="">
                Erro ao carregar categorias
            </option>
        `;
    }
}


// ======================================================
// CARREGAR LOJAS
// ======================================================

async function listarLojas() {

    try {

        const resposta =
            await fetch(`${API}/lojas`);

        const dados =
            await lerResposta(resposta);


        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                dados.message ||
                "Erro ao carregar lojas."
            );
        }


        const lojas =
            Array.isArray(dados)
                ? dados
                : dados.lojas || [];


        selectLoja.innerHTML = `
            <option value="">
                Selecione uma loja
            </option>
        `;


        lojas.forEach(function (loja) {

            const option =
                document.createElement("option");

            option.value =
                loja.idLoja;

            option.textContent =
                loja.nome;

            selectLoja.appendChild(option);

        });


    } catch (erro) {

        console.error(
            "Erro ao carregar lojas:",
            erro
        );

        selectLoja.innerHTML = `
            <option value="">
                Erro ao carregar lojas
            </option>
        `;
    }
}


// ======================================================
// CADASTRAR PRODUTO
// ======================================================

async function cadastrarProduto(event) {

    event.preventDefault();

    limparMensagem();


    // ==================================================
    // PEGAR VALORES
    // ==================================================

    const nome =
        campoNome.value.trim();

    const descricao =
        campoDescricao.value.trim();

    const codigo =
        campoCodigo.value.trim();

    const quantidadeEstoque =
        campoEstoque.value;

    const precoAntigo =
        campoPrecoAntigo.value;

    const precoPromocional =
        campoPrecoPromocional.value;

    const marca =
        selectMarca.value;

    const categoria =
        selectCategoria.value;

    const ativo =
        selectAtivo.value;

    const loja =
        selectLoja.value;


    // ==================================================
    // VALIDAÇÃO
    // ==================================================

    if (!nome) {

        mostrarMensagem(
            "Digite o nome do produto.",
            "erro"
        );

        campoNome.focus();

        return;
    }


    if (!descricao) {

        mostrarMensagem(
            "Digite a descrição do produto.",
            "erro"
        );

        campoDescricao.focus();

        return;
    }


    if (!codigo) {

        mostrarMensagem(
            "Digite o código do produto.",
            "erro"
        );

        campoCodigo.focus();

        return;
    }


    if (quantidadeEstoque === "") {

        mostrarMensagem(
            "Digite a quantidade em estoque.",
            "erro"
        );

        campoEstoque.focus();

        return;
    }


    if (Number(quantidadeEstoque) < 0) {

        mostrarMensagem(
            "A quantidade não pode ser negativa.",
            "erro"
        );

        campoEstoque.focus();

        return;
    }


    if (precoAntigo === "") {

        mostrarMensagem(
            "Digite o preço antigo.",
            "erro"
        );

        campoPrecoAntigo.focus();

        return;
    }


    if (Number(precoAntigo) < 0) {

        mostrarMensagem(
            "O preço antigo não pode ser negativo.",
            "erro"
        );

        campoPrecoAntigo.focus();

        return;
    }


    if (
        precoPromocional !== "" &&
        Number(precoPromocional) < 0
    ) {

        mostrarMensagem(
            "O preço promocional não pode ser negativo.",
            "erro"
        );

        campoPrecoPromocional.focus();

        return;
    }


    if (
        precoPromocional !== "" &&
        Number(precoPromocional) >
        Number(precoAntigo)
    ) {

        mostrarMensagem(
            "O preço promocional não pode ser maior que o preço antigo.",
            "erro"
        );

        campoPrecoPromocional.focus();

        return;
    }


    if (!marca) {

        mostrarMensagem(
            "Selecione uma marca.",
            "erro"
        );

        selectMarca.focus();

        return;
    }


    if (!categoria) {

        mostrarMensagem(
            "Selecione uma categoria.",
            "erro"
        );

        selectCategoria.focus();

        return;
    }


    if (!loja) {

        mostrarMensagem(
            "Selecione uma loja.",
            "erro"
        );

        selectLoja.focus();

        return;
    }


    // ==================================================
    // OBJETO PARA O BANCO
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
            Number(ativo),

        Loja_idLoja:
            Number(loja),

        Marca_idMarca:
            Number(marca),

        Categoria_idCategoria:
            Number(categoria)
    };


    // ==================================================
    // MOSTRAR OBJETO NO CONSOLE
    // ==================================================

    console.log(
        "======================================"
    );

    console.log(
        "PRODUTO ENVIADO:"
    );

    console.log(produto);

    console.log(
        "======================================"
    );


    // ==================================================
    // DESABILITAR BOTÃO
    // ==================================================

    btnCadastrar.disabled = true;

    btnCadastrar.textContent =
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


        // ==================================================
        // LER RESPOSTA
        // ==================================================

        const dados =
            await lerResposta(resposta);


        console.log(
            "Status:",
            resposta.status
        );

        console.log(
            "Resposta:",
            dados
        );


        // ==================================================
        // VERIFICAR ERRO
        // ==================================================

        if (!resposta.ok) {

            throw new Error(

                dados.mensagem ||

                dados.message ||

                dados.erro ||

                "Erro ao cadastrar produto."

            );
        }


        // ==================================================
        // SUCESSO
        // ==================================================

        mostrarMensagem(
            dados.mensagem ||
            "Produto cadastrado com sucesso!",
            "sucesso"
        );


        // ==================================================
        // LIMPAR FORMULÁRIO
        // ==================================================

        form.reset();


        // Voltar status para Ativo
        selectAtivo.value = "1";


        // ==================================================
        // FOCO
        // ==================================================

        campoNome.focus();


    } catch (erro) {

        console.error(
            "======================================"
        );

        console.error(
            "ERRO AO CADASTRAR PRODUTO"
        );

        console.error(erro);

        console.error(
            "======================================"
        );


        mostrarMensagem(
            erro.message ||
            "Não foi possível cadastrar o produto.",
            "erro"
        );


    } finally {

        btnCadastrar.disabled = false;

        btnCadastrar.textContent =
            "Cadastrar Produto";
    }
}


// ======================================================
// EVENTO DO FORMULÁRIO
// ======================================================

if (form) {

    form.addEventListener(
        "submit",
        cadastrarProduto
    );

}


// ======================================================
// BOTÃO LIMPAR
// ======================================================

if (btnLimpar) {

    btnLimpar.addEventListener(
        "click",
        function () {

            limparMensagem();

            selectAtivo.value = "1";
        }
    );

}


// ======================================================
// INICIAR
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        listarMarcas();

        listarCategorias();

        listarLojas();

    }
);