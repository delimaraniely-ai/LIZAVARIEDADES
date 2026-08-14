```javascript
/* ==========================================
   RESUMO FINANCEIRO - LOJISTA
========================================== */


/* ==========================================
   DADOS FINANCEIROS
========================================== */

const dadosFinanceiros = {

    faturamento: 15850.00,

    vendas: 18500.00,

    despesas: 2650.00,

    lucro: 13200.00

};


/* ==========================================
   MOVIMENTAÇÕES
========================================== */

const movimentacoes = [

    {
        data: "13/08/2026",

        descricao: "Venda de produtos",

        tipo: "entrada",

        pagamento: "PIX",

        valor: 350.00,

        status: "pago"
    },

    {
        data: "12/08/2026",

        descricao: "Venda de produtos",

        tipo: "entrada",

        pagamento: "Cartão",

        valor: 520.00,

        status: "pago"
    },

    {
        data: "11/08/2026",

        descricao: "Compra de mercadorias",

        tipo: "saida",

        pagamento: "PIX",

        valor: 850.00,

        status: "pago"
    },

    {
        data: "10/08/2026",

        descricao: "Venda de produtos",

        tipo: "entrada",

        pagamento: "Dinheiro",

        valor: 180.00,

        status: "pago"
    },

    {
        data: "09/08/2026",

        descricao: "Pagamento de fornecedor",

        tipo: "saida",

        pagamento: "Transferência",

        valor: 600.00,

        status: "pendente"
    }

];


/* ==========================================
   ELEMENTOS HTML
========================================== */

const faturamento =
    document.getElementById("faturamento");

const totalVendas =
    document.getElementById("totalVendas");

const totalDespesas =
    document.getElementById("totalDespesas");

const lucro =
    document.getElementById("lucro");

const nomeUsuario =
    document.getElementById("nomeUsuario");

const tabelaFinanceiro =
    document.getElementById("tabelaFinanceiro");

const periodo =
    document.getElementById("periodo");

const btnFiltrar =
    document.getElementById("btnFiltrar");

const mensagem =
    document.getElementById("mensagem");

const btnSair =
    document.getElementById("btnSair");


/* ==========================================
   FORMATAR MOEDA
========================================== */

function formatarMoeda(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* ==========================================
   CARREGAR DADOS FINANCEIROS
========================================== */

function carregarResumoFinanceiro() {

    faturamento.textContent =
        formatarMoeda(
            dadosFinanceiros.faturamento
        );

    totalVendas.textContent =
        formatarMoeda(
            dadosFinanceiros.vendas
        );

    totalDespesas.textContent =
        formatarMoeda(
            dadosFinanceiros.despesas
        );

    lucro.textContent =
        formatarMoeda(
            dadosFinanceiros.lucro
        );

}


/* ==========================================
   CARREGAR TABELA
========================================== */

function carregarTabela(lista) {

    tabelaFinanceiro.innerHTML = "";


    lista.forEach(function (movimento) {

        const linha =
            document.createElement("tr");


        const classeValor =
            movimento.tipo === "entrada"
                ? "valorEntrada"
                : "valorSaida";


        linha.innerHTML = `

    < td >

    `;


        tabelaFinanceiro.appendChild(linha);

    });

}


/* ==========================================
   FORMATAR TIPO
========================================== */

function formatarTipo(tipo) {

    if (tipo === "entrada") {

        return "Entrada";

    }

    if (tipo === "saida") {

        return "Saída";

    }

    return tipo;

}


/* ==========================================
   FORMATAR STATUS
========================================== */

function formatarStatus(status) {

    if (status === "pago") {

        return "Pago";

    }

    if (status === "pendente") {

        return "Pendente";

    }

    if (status === "cancelado") {

        return "Cancelado";

    }

    return status;

}


/* ==========================================
   FILTRO
========================================== */

function filtrarFinanceiro() {

    const periodoSelecionado =
        periodo.value;


    if (periodoSelecionado === "hoje") {

        mostrarMensagem(
            "Exibindo os dados financeiros de hoje."
        );

    }

    else if (periodoSelecionado === "semana") {

        mostrarMensagem(
            "Exibindo os dados financeiros desta semana."
        );

    }

    else if (periodoSelecionado === "mes") {

        mostrarMensagem(
            "Exibindo os dados financeiros deste mês."
        );

    }

    else if (periodoSelecionado === "ano") {

        mostrarMensagem(
            "Exibindo os dados financeiros deste ano."
        );

    }


    carregarTabela(movimentacoes);

}


/* ==========================================
   MOSTRAR MENSAGEM
========================================== */

function mostrarMensagem(texto) {

    mensagem.textContent = texto;

    mensagem.style.display = "block";


    setTimeout(function () {

        mensagem.style.display = "none";

    }, 3000);

}


/* ==========================================
   BOTÃO SAIR
========================================== */

btnSair.addEventListener(
    "click",
    function () {

        const confirmar =
            confirm(
                "Deseja realmente sair?"
            );


        if (confirmar) {

            alert(
                "Sessão encerrada."
            );

        }

    }
);


/* ==========================================
   BOTÃO FILTRAR
========================================== */

btnFiltrar.addEventListener(
    "click",
    filtrarFinanceiro
);


/* ==========================================
   INICIALIZAÇÃO
========================================== */

nomeUsuario.textContent =
    "Lojista";

carregarResumoFinanceiro();

carregarTabela(movimentacoes);
```
