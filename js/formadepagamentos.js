/* PIX */

document.getElementById("pixIcon").src =
    "./assets/pix.png";

document.getElementById("pixTitulo").textContent =
    "Parcelamento no PIX";

document.getElementById("pixDescricao").textContent =
    "Pague suas compras em até 4x sem juros no PIX. Praticidade e liberação imediata.";

document.getElementById("pixStatus").textContent =
    "✔ APROVAÇÃO NA HORA";

/* CARTÃO */

document.getElementById("cartaoIcon").src =
    "./assets/cartao.png";

document.getElementById("cartaoTitulo").textContent =
    "Cartão de Crédito";

document.getElementById("cartaoDescricao").textContent =
    "Em até 12x sem juros";

document.getElementById("bandeira1").src =
    "./assets/visa.png";

document.getElementById("bandeira2").src =
    "./assets/mastercard.png";

/* BOLETO */

document.getElementById("boletoIcon").src =
    "./assets/boleto.png";

document.getElementById("boletoTitulo").textContent =
    "Boleto Bancário";

document.getElementById("boletoDescricao").textContent =
    "À vista com 5% de desconto";

/* MAPA */

document.getElementById("mapaImagem").src =
    "./assets/mapa-loja.png";

/* LOJA */

document.getElementById("lojaIcon").src =
    "./assets/loja.png";

document.getElementById("lojaNome").textContent =
    "LIZA VARIEDADES - Matriz";

document.getElementById("lojaEndereco").textContent =
    "Av. Central das Maravilhas, 1024 Bairro Decor, Cidade Criativa - SP CEP 01234-567";

document.getElementById("btnComoChegar").textContent =
    "📍 Como Chegar";

document.getElementById("btnOutrasUnidades").textContent =
    "Ver Outras Unidades";

/* STATUS */

document.getElementById("statusLoja").textContent =
    "ABERTO AGORA";

document.getElementById("horarioLoja").textContent =
    "Fecha às 19:00";

/* CONSULTOR */

document.getElementById("btnConsultor").textContent =
    "Fale com um consultor 💬";

/* EVENTOS */

document.getElementById("btnComoChegar")
    .addEventListener("click", () => {

        alert("Abrir rota da loja");

    });

document.getElementById("btnOutrasUnidades")
    .addEventListener("click", () => {

        alert("Abrir outras unidades");

    });

document.getElementById("btnConsultor")
    .addEventListener("click", () => {

        alert("Abrir atendimento");

    });