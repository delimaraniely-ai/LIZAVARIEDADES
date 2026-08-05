/* CARD 01 */

document.getElementById("produtoImagem1").src =
    "./assets/favorito1.jpg";

document.getElementById("produtoImagem1").alt =
    "Vaso Decorativo";

document.getElementById("produtoNome1").textContent =
    "Vaso Cerâmica Terra";

document.getElementById("produtoPreco1").textContent =
    "R$ 54,90";

/* CARD 02 */

document.getElementById("produtoImagem2").src =
    "./assets/favorito2.jpg";

document.getElementById("produtoImagem2").alt =
    "Armário MDF";

document.getElementById("produtoNome2").textContent =
    "Mini Armário MDF";

document.getElementById("produtoPreco2").textContent =
    "R$ 90,00";

/* CARD 03 */

document.getElementById("produtoImagem3").src =
    "./assets/favorito3.jpg";

document.getElementById("produtoImagem3").alt =
    "Relógio";

document.getElementById("produtoNome3").textContent =
    "Relógio Decorativo";

document.getElementById("produtoPreco3").textContent =
    "R$ 70,00";

/* CARD 04 */

document.getElementById("produtoImagem4").src =
    "./assets/favorito4.jpg";

document.getElementById("produtoImagem4").alt =
    "Espelho";

document.getElementById("produtoNome4").textContent =
    "Espelho Redondo";

document.getElementById("produtoPreco4").textContent =
    "R$ 110,00";

/* EVENTOS */

document
    .getElementById("remover1")
    .addEventListener("click", () => {

        alert("Produto removido dos favoritos");

    });

document
    .getElementById("remover2")
    .addEventListener("click", () => {

        alert("Produto removido dos favoritos");

    });

document
    .getElementById("remover3")
    .addEventListener("click", () => {

        alert("Produto removido dos favoritos");

    });

document
    .getElementById("remover4")
    .addEventListener("click", () => {

        alert("Produto removido dos favoritos");

    });