/* BANNER */

document.getElementById("bannerPrincipal").src =
    "./assets/banner-home.jpg";

/* DESTAQUES */

document.getElementById("produtoImagem1").src = "./assets/produto1.jpg";
document.getElementById("produtoNome1").textContent = "Kit Canetas";
document.getElementById("produtoPreco1").textContent = "R$ 14,90";

document.getElementById("produtoImagem2").src = "./assets/produto2.jpg";
document.getElementById("produtoNome2").textContent = "Almofada";
document.getElementById("produtoPreco2").textContent = "R$ 39,90";

document.getElementById("produtoImagem3").src = "./assets/produto3.jpg";
document.getElementById("produtoNome3").textContent = "Batom";
document.getElementById("produtoPreco3").textContent = "R$ 12,90";

document.getElementById("produtoImagem4").src = "./assets/produto4.jpg";
document.getElementById("produtoNome4").textContent = "Kit Infantil";
document.getElementById("produtoPreco4").textContent = "R$ 24,90";

document.getElementById("produtoImagem5").src = "./assets/produto5.jpg";
document.getElementById("produtoNome5").textContent = "Dinossauro";
document.getElementById("produtoPreco5").textContent = "R$ 34,90";

document.getElementById("produtoImagem6").src = "./assets/produto6.jpg";
document.getElementById("produtoNome6").textContent = "Shampoo";
document.getElementById("produtoPreco6").textContent = "R$ 19,90";

/* DESCONTOS */

document.getElementById("descontoImagem1").src = "./assets/desconto1.jpg";
document.getElementById("descontoNome1").textContent = "Toalha";
document.getElementById("descontoPreco1").textContent = "R$ 29,90";

document.getElementById("descontoImagem2").src = "./assets/desconto2.jpg";
document.getElementById("descontoNome2").textContent = "Tênis";
document.getElementById("descontoPreco2").textContent = "R$ 89,90";

document.getElementById("descontoImagem3").src = "./assets/desconto3.jpg";
document.getElementById("descontoNome3").textContent = "Roupa Infantil";
document.getElementById("descontoPreco3").textContent = "R$ 34,90";

document.getElementById("descontoImagem4").src = "./assets/desconto4.jpg";
document.getElementById("descontoNome4").textContent = "Taça";
document.getElementById("descontoPreco4").textContent = "R$ 15,90";

document.getElementById("descontoImagem5").src = "./assets/desconto5.jpg";
document.getElementById("descontoNome5").textContent = "Bola";
document.getElementById("descontoPreco5").textContent = "R$ 49,90";

document.getElementById("descontoImagem6").src = "./assets/desconto6.jpg";
document.getElementById("descontoNome6").textContent = "Kit Maquiagem";
document.getElementById("descontoPreco6").textContent = "R$ 59,90";

/* RESUMO */

document.getElementById("pedidoItens").textContent =
    "12";

document.getElementById("pedidoProdutos").textContent =
    "8 Produtos";

document.getElementById("pedidoValor").textContent =
    "R$ 342,80";

document.getElementById("pedidoStatus").textContent =
    "Aguardando Pagamento";

document.getElementById("btnFinalizarCompra")
    .addEventListener("click", () => {

        alert("Redirecionando para pagamento");

    });