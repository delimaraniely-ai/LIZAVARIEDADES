/* EMPRESA */

document.getElementById("empresaNome").textContent =
    "LOGISTA REPORTS";

document.getElementById("avatarUsuario").src =
    "../assets/avatar.png";

document.getElementById("nomeUsuario").textContent =
    "Liza Medeiros";


/* CABEÇALHO */

document.getElementById("tituloRelatorio").textContent =
    "Relatórios";

document.getElementById("descricaoRelatorio").textContent =
    "Analise performance, faturamento e vendas em tempo real.";


/* CARDS */

document.getElementById("faturamento").textContent =
    "R$ 142.380,00";

document.getElementById("faturamentoCrescimento").textContent =
    "+12%";

document.getElementById("pedidos").textContent =
    "2.410";

document.getElementById("pedidosCrescimento").textContent =
    "+8%";

document.getElementById("ticketMedio").textContent =
    "R$ 59,08";

document.getElementById("ticketCrescimento").textContent =
    "-4%";

document.getElementById("lucro").textContent =
    "32,5%";

document.getElementById("lucroCrescimento").textContent =
    "+5%";


/* TABELA */

document.getElementById("dataLinha1").textContent = "29/04/2024";
document.getElementById("pedidoLinha1").textContent = "846";
document.getElementById("faturamentoLinha1").textContent = "R$ 42.890";
document.getElementById("crescimentoLinha1").textContent = "+4,2%";
document.getElementById("statusLinha1").textContent = "Concluído";

document.getElementById("dataLinha2").textContent = "28/04/2024";
document.getElementById("pedidoLinha2").textContent = "722";
document.getElementById("faturamentoLinha2").textContent = "R$ 38.440";
document.getElementById("crescimentoLinha2").textContent = "+3,8%";
document.getElementById("statusLinha2").textContent = "Concluído";

document.getElementById("dataLinha3").textContent = "27/04/2024";
document.getElementById("pedidoLinha3").textContent = "690";
document.getElementById("faturamentoLinha3").textContent = "R$ 35.990";
document.getElementById("crescimentoLinha3").textContent = "+2,7%";
document.getElementById("statusLinha3").textContent = "Concluído";


/* EXPORTAÇÃO */

document.getElementById("pdfTitulo").textContent =
    "Relatório PDF";

document.getElementById("csvTitulo").textContent =
    "Planilha CSV";

document.getElementById("excelTitulo").textContent =
    "Microsoft Excel";

document.getElementById("footerTexto").textContent =
    "© Logista Analytics - Todos os direitos reservados";


/* GRÁFICO */

const canvas = document.getElementById("salesChart");

if (canvas && typeof Chart !== "undefined") {

    new Chart(canvas, {

        type: "line",

        data: {

            labels: [
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
                "Jan",
                "Fev"
            ],

            datasets: [
                {
                    label: "Vendas",

                    data: [
                        12000,
                        18000,
                        16000,
                        24000,
                        22000,
                        30000,
                        28000,
                        35000
                    ],

                    borderColor: "#4f46e5",

                    backgroundColor: "rgba(79, 70, 229, 0.10)",

                    tension: 0.4,

                    fill: true
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false
        }

    });

}