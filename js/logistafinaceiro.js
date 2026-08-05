/* EMPRESA */

document.getElementById("empresaNome").textContent =
    "LOGISTA FINANCEIRO";

/* USUÁRIO */

document.getElementById("avatarUsuario").src =
    "./assets/avatar.jpg";

document.getElementById("nomeUsuario").textContent =
    "Liza Medeiros";

/* TÍTULOS */

document.getElementById("tituloPagina").textContent =
    "Financeiro";

document.getElementById("descricaoPagina").textContent =
    "Controle financeiro completo e atualização em tempo real.";

/* CARDS */

document.getElementById("saldoDisponivel").textContent =
    "R$ 12.450,80";

document.getElementById("saldoStatus").textContent =
    "Saldo disponível para saque";

document.getElementById("saldoReceber").textContent =
    "R$ 8.920,45";

document.getElementById("receberStatus").textContent =
    "Valores previstos para os próximos dias";

document.getElementById("proximoSaque").textContent =
    "05 Jun, 2024";

document.getElementById("saqueStatus").textContent =
    "Transferência prevista";

/* RODAPÉ */

document.getElementById("footerTexto").textContent =
    "© Logista Financeiro - Todos os direitos reservados";

/* BOTÃO */

document.getElementById("btnExportar")
    .addEventListener("click", () => {

        alert("Exportando relatório financeiro...");

    });

/* GRÁFICO */

const ctx =
    document.getElementById("financeChart");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [
            "JAN",
            "FEV",
            "MAR",
            "ABR",
            "MAI",
            "JUN"
        ],

        datasets: [

            {
                label: "Receitas",

                data: [
                    12000,
                    18000,
                    16000,
                    22000,
                    25000,
                    28000
                ]
            },

            {
                label: "Despesas",

                data: [
                    6000,
                    8000,
                    7000,
                    9000,
                    8500,
                    9500
                ]
            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false

    }

});