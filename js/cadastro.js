/*==========================================
CONFIGURAÇÃO DA PÁGINA
==========================================*/

const pagina = {
    tituloPagina: "Cadastro",

    bannerTitulo: "Crie sua Conta",

    bannerDescricao:
        "Preencha corretamente todos os dados para realizar seu cadastro.",

    tituloCadastro: "Dados do Cliente",

    descricaoCadastro:
        "Preencha os dados abaixo para criar sua conta.",

    footer: "© 2026 Sistema de Cadastro",

    logo: "/assets/logo.png",

    fotoPerfil: "/assets/user.png"
};

/*==========================================
LABELS
==========================================*/

const labels = {

    nome: "Nome Completo",

    cpf: "CPF",

    nascimento: "Data de Nascimento",

    email: "E-mail",

    telefone: "Telefone",



};

/*==========================================
PLACEHOLDERS
==========================================*/

const placeholders = {

    nome: "Digite seu nome",

    cpf: "000.000.000-00",

    nascimento: "dd/mm/aaaa",

    email: "email@dominio.com",

    telefone: "(00) 00000-0000",



};

/*==========================================
BOTÕES
==========================================*/

const botoes = {

    login: "Já tenho conta",

    cadastro: "Criar Conta"

};

/*==========================================
HEADER
==========================================*/

document.getElementById("logo").src = pagina.logo;
document.getElementById("tituloPagina").textContent = pagina.tituloPagina;

/*==========================================
BANNER
==========================================*/

document.getElementById("bannerTitulo").textContent = pagina.bannerTitulo;
document.getElementById("bannerDescricao").textContent = pagina.bannerDescricao;

/*==========================================
FORMULÁRIO
==========================================*/

document.getElementById("tituloCadastro").textContent = pagina.tituloCadastro;
document.getElementById("descricaoCadastro").textContent = pagina.descricaoCadastro;



/*==========================================
LABELS
==========================================*/

document.getElementById("lblNome").textContent = labels.nome;
document.getElementById("lblCpf").textContent = labels.cpf;
document.getElementById("lblNascimento").textContent = labels.nascimento;
document.getElementById("lblEmail").textContent = labels.email;
document.getElementById("lblTelefone").textContent = labels.telefone;

/*==========================================
PLACEHOLDERS
==========================================*/

document.getElementById("nome").placeholder = placeholders.nome;
document.getElementById("cpf").placeholder = placeholders.cpf;
document.getElementById("dataNascimento").placeholder = placeholders.nascimento;
document.getElementById("email").placeholder = placeholders.email;
document.getElementById("telefone").placeholder = placeholders.telefone;

/*==========================================
BOTÕES
==========================================*/

document.getElementById("btnLogin").textContent = botoes.login;
document.getElementById("btnCadastro").textContent = botoes.cadastro;

/*==========================================
FOOTER
==========================================*/

document.getElementById("footerTexto").textContent = pagina.footer;

/*==========================================
MÁSCARA CPF
==========================================*/

document.getElementById("cpf").addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = valor;

});

/*==========================================
MÁSCARA TELEFONE
==========================================*/

document.getElementById("telefone").addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");

    this.value = valor;

});

/*==========================================
MÁSCARA DATA
==========================================*/

document.getElementById("dataNascimento").addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2");

    this.value = valor;

});

/*==========================================
MENU
==========================================*/

document.getElementById("btnLogin").addEventListener("click", () => {

    window.location.href = "login.html";

});

/*==========================================
CADASTRO
==========================================*/

document.getElementById("btnCadastrar").addEventListener("click", () => {

    const cliente = {

        nome: document.getElementById("nome").value.trim(),

        cpf: document.getElementById("cpf").value.replace(/\D/g, ""),

        data_nascimento: document.getElementById("dataNascimento").value,

        telefone: document.getElementById("telefone").value.replace(/\D/g, ""),

        email: document.getElementById("email").value.trim(),

        Loja_idLoja: 1

    };

    if (
        cliente.nome === "" ||
        cliente.cpf === "" ||
        cliente.data_nascimento === "" ||
        cliente.telefone === "" ||
        cliente.email === ""
    ) {

        alert("Preencha todos os campos obrigatórios.");
        return;

    }

    fetch("http://localhost:3000/clientes", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(cliente)

    })

        .then(res => res.json())

        .then(resposta => {

            alert(resposta.mensagem);

            if (resposta.sucesso) {

                document.getElementById("formCadastro").reset();

            }

        })

        .catch(() => {

            alert("Erro ao conectar ao servidor.");

        });

});