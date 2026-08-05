document.addEventListener("DOMContentLoaded", () => {

    /* TOPO */

    document.getElementById("logoNome").textContent =
        "LOGISTA";

    document.getElementById("campoBusca").placeholder =
        "Pesquisar produtos...";

    document.getElementById("avatarUsuario").src =
        "../assets/avatar.jpg";

    document.getElementById("nomeUsuario").textContent =
        "Liza Variedades";

    document.getElementById("cargoUsuario").textContent =
        "Administrador";

    /* CABEÇALHO */

    document.getElementById("tituloPagina").textContent =
        "Estoque";

    document.getElementById("descricaoPagina").textContent =
        "Gerencie produtos e controle os níveis de estoque.";

    document.getElementById("btnNovoProduto").textContent =
        "+ Novo Produto";

    document.getElementById("btnExportar").textContent =
        "Exportar";

    /* CARDS */

    document.getElementById("totalProdutos").textContent =
        "1.245";

    document.getElementById("infoProdutos").textContent =
        "+12 novos produtos";

    document.getElementById("estoqueBaixo").textContent =
        "12";

    document.getElementById("infoBaixo").textContent =
        "Necessitam reposição";

    document.getElementById("semEstoque").textContent =
        "04";

    document.getElementById("infoSemEstoque").textContent =
        "Reposição urgente";

    /* PRODUTOS */

    const produtos = [
        {
            imagem: "../assets/produto1.jpg",
            nome: "Caixa Organizadora",
            sku: "SKU001",
            categoria: "Utilidades",
            quantidade: "85",
            status: "Disponível",
            preco: "R$ 29,90"
        },
        {
            imagem: "../assets/produto2.jpg",
            nome: "Garrafa Térmica",
            sku: "SKU002",
            categoria: "Cozinha",
            quantidade: "10",
            status: "Baixo",
            preco: "R$ 59,90"
        },
        {
            imagem: "../assets/produto3.jpg",
            nome: "Kit Escolar",
            sku: "SKU003",
            categoria: "Papelaria",
            quantidade: "0",
            status: "Esgotado",
            preco: "R$ 39,90"
        },
        {
            imagem: "../assets/produto4.jpg",
            nome: "Brinquedo Infantil",
            sku: "SKU004",
            categoria: "Brinquedos",
            quantidade: "120",
            status: "Disponível",
            preco: "R$ 89,90"
        }
    ];

    produtos.forEach((produto, index) => {

        const i = index + 1;

        document.getElementById(`produtoImagem${i}`).src = produto.imagem;
        document.getElementById(`produtoNome${i}`).textContent = produto.nome;
        document.getElementById(`sku${i}`).textContent = produto.sku;
        document.getElementById(`categoria${i}`).textContent = produto.categoria;
        document.getElementById(`quantidade${i}`).textContent = produto.quantidade;
        document.getElementById(`preco${i}`).textContent = produto.preco;

        const status = document.getElementById(`status${i}`);

        status.textContent = produto.status;

        if (produto.status === "Disponível") {
            status.classList.add("status-disponivel");
        } else if (produto.status === "Baixo") {
            status.classList.add("status-baixo");
        } else {
            status.classList.add("status-esgotado");
        }

    });

    document.getElementById("footerTexto").textContent =
        "© Logista Estoque - Todos os direitos reservados";

});