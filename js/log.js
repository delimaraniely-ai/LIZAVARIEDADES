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

             <button id="btn-login"
                type="submit"
                class="btn btn-primary"
            >
                Entrar google
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




// =====================================================
// CONFIGURAÇÃO DO GOOGLE
// =====================================================



const googleClientId =
    "603763604024-ufvn5tia15c8o63gtn4e6gkks88m9t4n.apps.googleusercontent.com";





// =====================================================
// VARIÁVEL DO CLIENTE GOOGLE
// =====================================================



let googleClient;





// =====================================================
// AGUARDAR A BIBLIOTECA DO GOOGLE CARREGAR
// =====================================================



window.onload = function () {



    // Cria o cliente de autenticação do Google
    googleClient =
        google.accounts.oauth2.initTokenClient({



            client_id: googleClientId,



            scope: "openid email profile",



            callback: receberRespostaGoogle



        });



};





// =====================================================
// EVENTO DO BOTÃO
// =====================================================



document
    .getElementById("btn-login")
    .addEventListener(
        "click",
        function () {



            // Abre a janela de login do Google
            googleClient.requestAccessToken();



        }
    );





// =====================================================
// RECEBER RESPOSTA DO GOOGLE
// =====================================================



async function receberRespostaGoogle(response) {



    // Verifica se aconteceu algum erro
    if (response.error) {



        console.error(
            "Erro ao fazer login:",
            response
        );



        alert(
            "Não foi possível fazer login com Google."
        );



        return;
    }





    try {



        // =================================================
        // PEGAR OS DADOS DO USUÁRIO
        // =================================================



        const resposta =
            await fetch(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {



                    headers: {



                        Authorization:
                            "Bearer " +
                            response.access_token



                    }



                }
            );





        const usuario =
            await resposta.json();





        // =================================================
        // MOSTRAR NO CONSOLE
        // =================================================



        console.log(
            "Usuário Google:",
            usuario
        );





        console.log(
            "Nome:",
            usuario.name
        );





        console.log(
            "E-mail:",
            usuario.email
        );





        console.log(
            "Foto:",
            usuario.picture
        );





        // =================================================
        // SALVAR USUÁRIO
        // =================================================



        localStorage.setItem(
            "usuarioGoogle",
            JSON.stringify(usuario)
        );





        // =================================================
        // MENSAGEM
        // =================================================



        alert(
            "Bem-vindo(a), " +
            usuario.name +
            "!"
        );





        // =================================================
        // REDIRECIONAR PARA HOME
        // =================================================



        window.location.href =
            "home.html";





    } catch (erro) {



        console.error(
            "Erro ao buscar dados do usuário:",
            erro
        );





        alert(
            "Erro ao obter os dados da conta Google."
        );



    }



}


