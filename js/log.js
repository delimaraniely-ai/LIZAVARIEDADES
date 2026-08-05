/* ==========================
   DADOS
========================== */

const dadosTela = {
    titulo: "Acesse sua conta",
    subtitulo: "Informe seu e-mail e senha para entrar.",

    bannerTitulo: "Tela de Login",
    bannerTexto:
        "Acesse sua conta para gerenciar seus pedidos, favoritos e informações pessoais.",

    footer:
        "© 2025 Todos os direitos reservados"
};

/* ==========================
   HEADER
========================== */

const header = document.getElementById("header");

header.innerHTML = `
    <h2>Login</h2>
`;

/* ==========================
   BANNER
========================== */

const banner = document.getElementById("banner-login");

banner.innerHTML = `
    <div class="banner-content">
        <h2>${dadosTela.bannerTitulo}</h2>
        <p>${dadosTela.bannerTexto}</p>
    </div>
`;

/* ==========================
   LOGIN TOPO
========================== */

const loginTop = document.getElementById("login-top");

loginTop.innerHTML = `
<div class="card-login">

    <div class="login-header">
        <h1>${dadosTela.titulo}</h1>
        <p>${dadosTela.subtitulo}</p>
    </div>

</div>
`;

/* ==========================
   FORMULÁRIO
========================== */

const loginForm = document.getElementById("login-form");

loginForm.innerHTML = `
<div class="card-login">

    <form id="formLogin">

        <div class="form-group">
            <label>E-mail</label>

            <input
                type="email"
                id="email"
                placeholder="voce@email.com"
                required
            >
        </div>

        <div class="form-group">
            <label>Senha</label>

            <input
                type="password"
                id="senha"
                placeholder="Sua senha"
                required
            >
        </div>

        <div class="btn-group">

            <button
                type="button"
                class="btn btn-secondary"
            >
                Esqueci minha senha
            </button>

            <button
                type="submit"
                class="btn btn-primary"
            >
                Entrar
            </button>

        </div>

    </form>

</div>
`;

/* ==========================
   LOGIN SOCIAL
========================== */

const social = document.getElementById("social-login");

social.innerHTML = `
<div class="card-login social-area">

    <button class="google-btn">
        Criar Conta Google
    </button>

    <div class="login-link">

        <button>
            Já tenho Conta
        </button>

    </div>

</div>
`;

/* ==========================
   FOOTER
========================== */

const footer = document.getElementById("footer");

footer.innerHTML = `
<p>${dadosTela.footer}</p>
`;

/* ==========================
   EVENTOS
========================== */

document.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log({
        email,
        senha
    });

    alert("Login enviado!");
});