/* TOPO */

document.getElementById("logoNome").textContent =
    "LIZA VARIEDADES";

document.getElementById("avatarUsuario").src =
    "./assets/avatar.png";

document.getElementById("nomeUsuario").textContent =
    "Fania Lima";

document.getElementById("subtituloPagina").textContent =
    "Gerencie seus endereços para uma compra mais rápida.";

/* ENDEREÇO 1 */

document.getElementById("tipoEndereco1").textContent =
    "Casa";

document.getElementById("nomeEndereco1").textContent =
    "Fania Lima";

document.getElementById("endereco1").textContent =
    "Av. Paulista, 1500 - Apto 121 São Paulo - SP";

document.getElementById("telefone1").textContent =
    "(11) 99999-0000";

/* ENDEREÇO 2 */

document.getElementById("tipoEndereco2").textContent =
    "Trabalho";

document.getElementById("nomeEndereco2").textContent =
    "Fania Lima";

document.getElementById("endereco2").textContent =
    "Rua das Empresas, 450 São Paulo - SP";

document.getElementById("telefone2").textContent =
    "(11) 99999-0500";

/* FORMULÁRIO */

document.getElementById("cep").placeholder =
    "00000-000";

document.getElementById("logradouro").placeholder =
    "Digite o endereço";

document.getElementById("numero").placeholder =
    "Número";

document.getElementById("complemento").placeholder =
    "Complemento";

document.getElementById("bairro").placeholder =
    "Bairro";

document.getElementById("cidade").placeholder =
    "Cidade";

document.getElementById("estado").placeholder =
    "UF";

document.getElementById("referencia").placeholder =
    "Ponto de referência";

/* RODAPÉ */

document.getElementById("footerTitulo").textContent =
    "LIZA VARIEDADES";

document.getElementById("footerTexto").textContent =
    "As melhores ofertas para sua casa e sua família.";

/* EVENTOS */

document.getElementById("btnNovoEndereco")
    .addEventListener("click", () => {

        alert("Novo endereço");

    });

document.getElementById("btnSalvar")
    .addEventListener("click", (e) => {

        e.preventDefault();

        alert("Endereço salvo com sucesso");

    });