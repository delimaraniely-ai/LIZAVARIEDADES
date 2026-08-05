/* TÍTULO */

document.getElementById("tituloPagina").textContent =
    "Localização";

/* MAPA */

document.getElementById("mapaImagem").src =
    "./assets/mapa-loja.jpg";

/* ÍCONE */

document.getElementById("pinIcon").src =
    "./assets/pin-location.png";

/* LOJA */

document.getElementById("nomeLoja").textContent =
    "LIZA VARIEDADES - MATRIZ";

document.getElementById("enderecoLoja").textContent =
    "Av. Central das Maravilhas, 1024 - Bairro Decor, Cidade Criativa - SP";

/* DISTÂNCIA */

document.getElementById("distancia").textContent =
    "3,8 km";

document.getElementById("tempo").textContent =
    "12 min";

/* BOTÕES */

document.getElementById("btnRota").textContent =
    "📍 Traçar Rota";

document.getElementById("btnWaze").textContent =
    "🚗 Abrir no Waze";

document.getElementById("btnOutrasLojas").textContent =
    "Ver Outras Unidades";

/* STATUS */

document.getElementById("statusLoja").textContent =
    "ABERTO AGORA";

document.getElementById("horarioLoja").textContent =
    "Fecha às 19:00";

/* EVENTOS */

document.getElementById("btnRota")
    .addEventListener("click", () => {

        alert("Abrir rota");

    });

document.getElementById("btnWaze")
    .addEventListener("click", () => {

        alert("Abrir Waze");

    });

document.getElementById("btnMinhaLocalizacao")
    .addEventListener("click", () => {

        alert("Localizar usuário");

    });

document.getElementById("btnOutrasLojas")
    .addEventListener("click", () => {

        alert("Abrir outras unidades");

    });