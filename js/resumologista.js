document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("logoNome").textContent =
        "LOGISTA";

    document.getElementById("campoBusca").placeholder =
        "Pesquisar pedidos, clientes ou produtos";

    document.getElementById("avatarUsuario").src =
        "../assets/avatar.jpg";

    document.getElementById("nomeUsuario").textContent =
        "Liza Variedades";

    document.getElementById("cargoUsuario").textContent =
        "Administrador";

    document.getElementById("tituloPagina").textContent =
        "Resumo";

    document.getElementById("descricaoPagina").textContent =
        "Visão geral do desempenho da operação.";

    document.getElementById("totalPedidos").textContent =
        "1.284";

    document.getElementById("crescimentoPedidos").textContent =
        "+12% este mês";

    document.getElementById("totalProdutos").textContent =
        "42";

    document.getElementById("crescimentoProdutos").textContent =
        "+3 novos";

    document.getElementById("clientesAtivos").textContent =
        "156";

    document.getElementById("crescimentoClientes").textContent =
        "+8%";

    document.getElementById("receitaTotal").textContent =
        "R$ 84.290";

    document.getElementById("crescimentoReceita").textContent =
        "+24%";

    document.getElementById("btnPeriodo").textContent =
        "Últimos 30 dias";

    document.getElementById("verTodos").textContent =
        "Ver todos";

    document.getElementById("produtoImagem1").src =
        "../assets/produto1.jpg";

    document.getElementById("produtoNome1").textContent =
        "Mesa Decorativa";

    document.getElementById("produtoQtd1").textContent =
        "245 vendas";

    document.getElementById("produtoValor1").textContent =
        "R$ 189,90";

    document.getElementById("produtoImagem2").src =
        "../assets/produto2.jpg";

    document.getElementById("produtoNome2").textContent =
        "Garrafa Térmica";

    document.getElementById("produtoQtd2").textContent =
        "180 vendas";

    document.getElementById("produtoValor2").textContent =
        "R$ 59,90";

    document.getElementById("produtoImagem3").src =
        "../assets/produto3.jpg";

    document.getElementById("produtoNome3").textContent =
        "Organizador";

    document.getElementById("produtoQtd3").textContent =
        "145 vendas";

    document.getElementById("produtoValor3").textContent =
        "R$ 69,90";

    document.getElementById("pedido1").textContent =
        "#PED001";

    document.getElementById("cliente1").textContent =
        "Maria Souza";

    document.getElementById("status1").textContent =
        "Concluído";

    document.getElementById("valor1").textContent =
        "R$ 245,90";

    document.getElementById("pedido2").textContent =
        "#PED002";

    document.getElementById("cliente2").textContent =
        "Carlos Lima";

    document.getElementById("status2").textContent =
        "Em trânsito";

    document.getElementById("valor2").textContent =
        "R$ 180,00";

    document.getElementById("pedido3").textContent =
        "#PED003";

    document.getElementById("cliente3").textContent =
        "Ana Silva";

    document.getElementById("status3").textContent =
        "Concluído";

    document.getElementById("valor3").textContent =
        "R$ 389,90";

    document.getElementById("footerTexto").textContent =
        "© Logista - Todos os direitos reservados";

    const ctx =
        document.getElementById("graficoVendas");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["01", "05", "10", "15", "20", "25", "30"],
            datasets: [{
                label: "Vendas",
                data: [120, 180, 160, 280, 320, 420, 500],
                borderColor: "#344a6e",
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });

});