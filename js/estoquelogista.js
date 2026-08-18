// ==========================================================
// ESTOQUE - JAVASCRIPT
// ==========================================================


// ==========================================================
// BOTÃO NOVO PRODUTO
// ==========================================================

const btnNovoProduto =
    document.getElementById("btnNovoProduto");


if (btnNovoProduto) {

    btnNovoProduto.addEventListener("click", function () {

        window.location.href = "cadastroproduto.html";

    });

}


// ==========================================================
// BOTÃO EXPORTAR
// ==========================================================

const btnExportar =
    document.getElementById("btnExportar");


if (btnExportar) {

    btnExportar.addEventListener("click", function () {

        alert("Exportação do estoque iniciada.");

    });

}


// ==========================================================
// BOTÕES EDITAR
// ==========================================================

const botoesEditar =
    document.querySelectorAll(".btn-editar");


botoesEditar.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const linha =
            botao.closest("tr");

        const produto =
            linha.children[1].textContent.trim();

        alert("Editar produto: " + produto);

    });

});


// ==========================================================
// PESQUISA DE PRODUTOS
// ==========================================================

const campoBusca =
    document.getElementById("campoBusca");


const listaProdutos =
    document.getElementById("listaProdutos");


if (campoBusca && listaProdutos) {

    campoBusca.addEventListener("input", function () {

        const texto =
            campoBusca.value.toLowerCase().trim();

        const linhas =
            listaProdutos.querySelectorAll("tr");


        linhas.forEach(function (linha) {

            const nomeProduto =
                linha.children[1].textContent
                    .toLowerCase();


            if (nomeProduto.includes(texto)) {

                linha.style.display = "";

            } else {

                linha.style.display = "none";

            }

        });

    });

}