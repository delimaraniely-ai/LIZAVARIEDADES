/*==================================================
  DESCRIÇÃO DO PRODUTO - PARTE 1
==================================================*/

const produto = {
    id: 1,

    categoria: "Smartphones",

    marca: "Apple",

    nome: "iPhone 16 Pro Max Titanium 256GB",

    preco: "R$ 8.999,90",

    parcelamento: "ou em até 12x de R$ 749,99 sem juros",

    avaliacao: 4.9,

    descricaoCurta:
        "O iPhone 16 Pro Max combina desempenho, design premium e o poderoso chip A18 Pro.",

    imagens: [

        "../assets/img/iphone1.png",

        "../assets/img/iphone2.png",

        "../assets/img/iphone3.png",

        "../assets/img/iphone4.png"

    ],

    cores: [

        {
            nome: "Titânio Natural",
            cor: "#B3B1AA"
        },

        {
            nome: "Titânio Preto",
            cor: "#3d3d3d"
        },

        {
            nome: "Titânio Branco",
            cor: "#efefef"
        },

        {
            nome: "Titânio Azul",
            cor: "#6d7d97"
        }

    ],

    armazenamento: [
        "128GB",
        "256GB",
        "512GB",
        "1TB"
    ]
};


/*==================================================
  ELEMENTOS HTML
==================================================*/

const breadcrumb = document.getElementById("caminhoProduto");

const marca = document.getElementById("marcaProduto");

const nome = document.getElementById("nomeProduto");

const preco = document.getElementById("precoProduto");

const parcelas = document.getElementById("parcelamento");

const imagemPrincipal = document.getElementById("imagemPrincipal");

const miniaturas = document.getElementById("miniaturas");

const listaCores = document.getElementById("listaCores");

const listaMemorias = document.getElementById("listaMemorias");

const avaliacao = document.getElementById("avaliacaoProduto");


/*==================================================
  CARREGAR DADOS
==================================================*/

function carregarProduto() {

    breadcrumb.innerHTML =
        `Home > ${produto.categoria} > ${produto.nome}`;

    marca.textContent = produto.marca;

    nome.textContent = produto.nome;

    preco.textContent = produto.preco;

    parcelas.textContent = produto.parcelamento;

    imagemPrincipal.src = produto.imagens[0];

}

carregarProduto();


/*==================================================
  AVALIAÇÃO
==================================================*/

function carregarAvaliacao() {

    avaliacao.innerHTML = "";

    for (let i = 1; i <= 5; i++) {

        const estrela = document.createElement("i");

        estrela.className = "fa-solid fa-star";

        avaliacao.appendChild(estrela);

    }

    const nota = document.createElement("span");

    nota.style.marginLeft = "10px";

    nota.style.color = "#555";

    nota.textContent = produto.avaliacao + " / 5";

    avaliacao.appendChild(nota);

}

carregarAvaliacao();


/*==================================================
  GALERIA
==================================================*/

function carregarGaleria() {

    miniaturas.innerHTML = "";

    produto.imagens.forEach((foto) => {

        const img = document.createElement("img");

        img.src = foto;

        img.onclick = () => {

            imagemPrincipal.src = foto;

        };

        miniaturas.appendChild(img);

    });

}

carregarGaleria();


/*==================================================
  CORES
==================================================*/

function carregarCores() {

    listaCores.innerHTML = "";

    produto.cores.forEach((item) => {

        const botao = document.createElement("button");

        botao.title = item.nome;

        botao.style.background = item.cor;

        botao.onclick = () => {

            document.querySelectorAll("#listaCores button")
                .forEach(btn => {

                    btn.style.border = "2px solid #ddd";

                });

            botao.style.border = "3px solid #e61d48";

        };

        listaCores.appendChild(botao);

    });

}

carregarCores();


/*==================================================
  MEMÓRIA
==================================================*/

function carregarMemorias() {

    listaMemorias.innerHTML = "";

    produto.armazenamento.forEach((memoria) => {

        const botao = document.createElement("button");

        botao.textContent = memoria;

        botao.onclick = () => {

            document.querySelectorAll("#listaMemorias button")
                .forEach(btn => {

                    btn.classList.remove("ativo");

                });

            botao.classList.add("ativo");

        };

        listaMemorias.appendChild(botao);

    });

}

carregarMemorias();
/*==================================================
  DESCRIÇÃO DO PRODUTO
==================================================*/

const descricao = document.getElementById("descricao");

descricao.innerHTML = `
    <h2>Descrição do Produto</h2>

    <p>
        O ${produto.nome} foi desenvolvido para oferecer o máximo de desempenho,
        velocidade e qualidade. Seu processador de última geração proporciona
        excelente performance para jogos, vídeos, produtividade e multitarefas.
    </p>

    <p>
        A câmera conta com tecnologia avançada para registrar fotos e vídeos
        em alta resolução, mesmo em ambientes com pouca iluminação.
    </p>

    <p>
        Sua bateria possui longa duração, permitindo utilizar o aparelho
        durante todo o dia com apenas uma carga.
    </p>

    <p>
        Possui tela Super Retina XDR, Face ID, carregamento rápido,
        resistência à água e sistema operacional atualizado.
    </p>
`;


/*==================================================
  ESPECIFICAÇÕES
==================================================*/

const especificacoes = document.getElementById("especificacoes");

especificacoes.innerHTML = `
<h2>Especificações Técnicas</h2>

<table>

<tr>
<td>Marca</td>
<td>${produto.marca}</td>
</tr>

<tr>
<td>Modelo</td>
<td>${produto.nome}</td>
</tr>

<tr>
<td>Armazenamento</td>
<td>128GB / 256GB / 512GB / 1TB</td>
</tr>

<tr>
<td>Tela</td>
<td>Super Retina XDR OLED</td>
</tr>

<tr>
<td>Tamanho</td>
<td>6.9 Polegadas</td>
</tr>

<tr>
<td>Processador</td>
<td>Apple A18 Pro</td>
</tr>

<tr>
<td>Memória RAM</td>
<td>8 GB</td>
</tr>

<tr>
<td>Câmera Traseira</td>
<td>48 MP + 12 MP + 12 MP</td>
</tr>

<tr>
<td>Câmera Frontal</td>
<td>12 MP</td>
</tr>

<tr>
<td>Sistema</td>
<td>iOS</td>
</tr>

<tr>
<td>Conectividade</td>
<td>5G • Wi-Fi • Bluetooth • NFC</td>
</tr>

<tr>
<td>Bateria</td>
<td>Até 33 horas de vídeo</td>
</tr>

</table>
`;


/*==================================================
  AVALIAÇÕES
==================================================*/

const avaliacoes = document.getElementById("avaliacoes");

const listaAvaliacoes = [

    {
        nome: "Carlos Henrique",
        estrelas: 5,
        comentario: "Produto excelente. Superou minhas expectativas."
    },

    {
        nome: "Maria Eduarda",
        estrelas: 5,
        comentario: "Entrega rápida e aparelho perfeito."
    },

    {
        nome: "João Pedro",
        estrelas: 4,
        comentario: "Muito bom, bateria dura bastante."
    },

    {
        nome: "Fernanda",
        estrelas: 5,
        comentario: "Vale cada centavo investido."
    }

];

function carregarAvaliacoes() {

    avaliacoes.innerHTML = "<h2>Avaliações dos Clientes</h2>";

    listaAvaliacoes.forEach(cliente => {

        const card = document.createElement("div");

        card.className = "card-avaliacao";

        let estrelas = "";

        for (let i = 0; i < cliente.estrelas; i++) {

            estrelas +=
                `<i class="fa-solid fa-star"></i>`;

        }

        card.innerHTML = `

        <h3>${cliente.nome}</h3>

        <div class="estrelas">

            ${estrelas}

        </div>

        <p>${cliente.comentario}</p>

        `;

        avaliacoes.appendChild(card);

    });

}

carregarAvaliacoes();


/*==================================================
  CONTROLE DAS ABAS
==================================================*/

const abas = document.querySelectorAll(".aba");

const conteudos =
    document.querySelectorAll(".conteudo");

abas.forEach((aba) => {

    aba.addEventListener("click", () => {

        abas.forEach((item) => {

            item.classList.remove("ativa");

        });

        conteudos.forEach((conteudo) => {

            conteudo.classList.remove("ativo");

        });

        aba.classList.add("ativa");

        const destino =
            document.getElementById(
                aba.dataset.aba
            );

        destino.classList.add("ativo");

    });

});
/*==================================================
  PRODUTOS RELACIONADOS
==================================================*/

const produtosRelacionados = [

    {
        id: 2,
        nome: "iPhone 16 128GB",
        preco: "R$ 6.999,90",
        imagem: "../assets/img/iphone16.png"
    },

    {
        id: 3,
        nome: "Apple Watch Series 10",
        preco: "R$ 3.299,90",
        imagem: "../assets/img/watch.png"
    },

    {
        id: 4,
        nome: "AirPods Pro 2",
        preco: "R$ 2.199,90",
        imagem: "../assets/img/airpods.png"
    },

    {
        id: 5,
        nome: "Carregador MagSafe",
        preco: "R$ 499,90",
        imagem: "../assets/img/magsafe.png"
    }

];

const listaRelacionados =
    document.getElementById("listaRelacionados");

function carregarRelacionados() {

    listaRelacionados.innerHTML = "";

    produtosRelacionados.forEach(produto => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <img src="${produto.imagem}" alt="${produto.nome}">

            <div class="info">

                <h3>${produto.nome}</h3>

                <span>${produto.preco}</span>

            </div>

        `;

        card.addEventListener("click", () => {

            alert("Abrindo produto: " + produto.nome);

        });

        listaRelacionados.appendChild(card);

    });

}

carregarRelacionados();


/*==================================================
  BOTÃO COMPRAR
==================================================*/

const btnComprar =
    document.getElementById("comprar");

btnComprar.addEventListener("click", () => {

    alert("Redirecionando para o pagamento...");

});


/*==================================================
  CARRINHO
==================================================*/

const btnCarrinho =
    document.getElementById("carrinho");

btnCarrinho.addEventListener("click", () => {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push({

        id: produto.id,

        nome: produto.nome,

        preco: produto.preco,

        imagem: produto.imagens[0]

    });

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    alert("Produto adicionado ao carrinho!");

});


/*==================================================
  CÁLCULO DE FRETE (SIMULADO)
==================================================*/

const btnFrete =
    document.getElementById("btnFrete");

const cep =
    document.getElementById("cep");

const resultadoFrete =
    document.getElementById("resultadoFrete");

btnFrete.addEventListener("click", () => {

    if (cep.value.length < 8) {

        resultadoFrete.style.color = "#e61d48";

        resultadoFrete.innerHTML =
            "Informe um CEP válido.";

        return;

    }

    const prazo =
        Math.floor(Math.random() * 6) + 2;

    const valor =
        (Math.random() * 30 + 10).toFixed(2);

    resultadoFrete.style.color = "#0b8a2f";

    resultadoFrete.innerHTML = `

        Frete: <strong>R$ ${valor}</strong><br>

        Prazo estimado:
        <strong>${prazo} dias úteis</strong>

    `;

});


/*==================================================
  MÁSCARA CEP
==================================================*/

cep.addEventListener("input", (e) => {

    let valor =
        e.target.value.replace(/\D/g, "");

    valor =
        valor.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value =
        valor.substring(0, 9);

});


/*==================================================
  ANIMAÇÃO IMAGEM PRINCIPAL
==================================================*/

imagemPrincipal.addEventListener("load", () => {

    imagemPrincipal.style.opacity = "0";

    imagemPrincipal.style.transform = "scale(.95)";

    setTimeout(() => {

        imagemPrincipal.style.transition = ".3s";

        imagemPrincipal.style.opacity = "1";

        imagemPrincipal.style.transform = "scale(1)";

    }, 50);

});


/*==================================================
  PRODUTO PADRÃO
==================================================*/

document.querySelectorAll("#listaMemorias button")[1]?.click();

document.querySelectorAll("#listaCores button")[0]?.click();


/*==================================================
  NEWSLETTER
==================================================*/

const newsletter =
    document.querySelector("footer input");

const enviar =
    document.querySelector("footer button");

enviar.addEventListener("click", () => {

    if (newsletter.value.trim() === "") {

        alert("Digite seu e-mail.");

        return;

    }

    alert("Cadastro realizado com sucesso!");

    newsletter.value = "";

});


/*==================================================
  INICIALIZAÇÃO
==================================================*/

window.addEventListener("load", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
