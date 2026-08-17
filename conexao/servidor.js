// ==========================================
// IMPORTAÇÕES
// ==========================================

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

console.log(">>> ESTE SERVIDOR.JS ESTÁ RODANDO <<<");


// ==========================================
// CONFIGURAÇÕES
// ==========================================

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


// ==========================================
// CONEXÃO COM O BANCO
// ==========================================

const conexao =
    require("./conexao.js");


// ==========================================
// ARQUIVOS PÚBLICOS / ASSETS
// ==========================================

app.use(
    "/assets",
    express.static(
        path.join(__dirname, "..", "assets")
    )
);


// ==========================================
// ARQUIVOS ESTÁTICOS DA RAIZ
// ==========================================

app.use(
    express.static(
        path.join(__dirname, "..")
    )
);


// ==========================================
// PAGES
// ==========================================

app.use(
    "/pages",
    express.static(
        path.join(__dirname, "..", "PAGES")
    )
);


// ==========================================
// STYLE
// ==========================================

app.use(
    "/style",
    express.static(
        path.join(__dirname, "..", "STYLE")
    )
);


// ==========================================
// JS
// ==========================================

app.use(
    "/js",
    express.static(
        path.join(__dirname, "..", "JS")
    )
);


// ==========================================
// PÁGINA INICIAL
// ==========================================

app.get(
    "/",
    (req, res) => {

        res.sendFile(
            path.join(
                __dirname,
                "..",
                "index.html"
            )
        );

    }
);


// ==========================================
// IMPORTAÇÃO DAS ROTAS
// ==========================================

const clienteRoutes =
    require("../routes/cliente_rotas.js");

const categoriaRoutes =
    require("../routes/categoria_rotas.js");

const coresRoutes =
    require("../routes/cores_rotas.js");

const tamanhoRoutes =
    require("../routes/tamanho_rotas.js");

const produtoRoutes =
    require("../routes/produto_rotas.js");

const marcaRoutes =
    require("../routes/marca_rotas.js");

const bannerRoutes =
    require("../routes/banner_rotas.js");

const bannerProdutoRoutes =
    require("../routes/banner_has_produto_rotas.js");

const avaliacaoRoutes =
    require("../routes/avaliacao_produtos_rotas.js");

const carrinhoRoutes =
    require("../routes/carrinho_rotas.js");

const carrinhoProdutoRoutes =
    require("../routes/carrinho_has_produto.js");

const cartaoRoutes =
    require("../routes/cartao_pagamento_rotas.js");

const cuponsRoutes =
    require("../routes/cupons_rotas.js");

const cuponsProdutosRoutes =
    require("../routes/cupons_has_produtos_rotas.js");

const cuponsCategoriaRoutes =
    require("../routes/cupons_has_categoria.js");

const enderecoRoutes =
    require("../routes/endereco_rotas.js");

const enderecoClienteRoutes =
    require("../routes/endereco_has_cliente_rotas.js");

const formasPagamentoRoutes =
    require("../routes/formas_pagamento_rotas.js");

const freteRoutes =
    require("../routes/frete_rotas.js");

const freteEnderecoRoutes =
    require("../routes/frete_endereco_rotas.js");

const imagemProdutoRoutes =
    require("../routes/imagem_produto_rotas.js");

const pedidosRoutes =
    require("../routes/pedidos_rotas.js");

const pedidosProdutoRoutes =
    require("../routes/pedidos_has_produto.js");

const produtoCoresRoutes =
    require("../routes/produto_has_cores_rotas.js");

const promocaoRoutes =
    require("../routes/promocao_rotas.js");

const promocaoCategoriaRoutes =
    require("../routes/promocao_has_categoria_rotas.js");

const promocaoProdutoRoutes =
    require("../routes/promocao_has_produto_rotas.js");

const financeiroRoutes =
    require("../routes/financeiro_routes.js");


// ==========================================
// ROTAS
// ==========================================

app.use(
    "/cliente",
    clienteRoutes
);

app.use(
    "/categoria",
    categoriaRoutes
);

app.use(
    "/cores",
    coresRoutes
);

app.use(
    "/tamanho",
    tamanhoRoutes
);


// ==========================================
// PRODUTOS
// ==========================================

app.use(
    "/produtos",
    produtoRoutes
);


app.use(
    "/marca",
    marcaRoutes
);

app.use(
    "/banner",
    bannerRoutes
);

app.use(
    "/banner-produto",
    bannerProdutoRoutes
);

app.use(
    "/avaliacao",
    avaliacaoRoutes
);

app.use(
    "/carrinho",
    carrinhoRoutes
);

app.use(
    "/carrinho-produto",
    carrinhoProdutoRoutes
);

app.use(
    "/cartao",
    cartaoRoutes
);

app.use(
    "/cupons",
    cuponsRoutes
);

app.use(
    "/cupons-produtos",
    cuponsProdutosRoutes
);

app.use(
    "/cupons-categoria",
    cuponsCategoriaRoutes
);

app.use(
    "/endereco",
    enderecoRoutes
);

app.use(
    "/endereco-cliente",
    enderecoClienteRoutes
);

app.use(
    "/formas-pagamento",
    formasPagamentoRoutes
);

app.use(
    "/frete",
    freteRoutes
);

app.use(
    "/frete-endereco",
    freteEnderecoRoutes
);

app.use(
    "/imagem-produto",
    imagemProdutoRoutes
);

app.use(
    "/pedidos",
    pedidosRoutes
);

app.use(
    "/pedidos-produto",
    pedidosProdutoRoutes
);

app.use(
    "/produto-cores",
    produtoCoresRoutes
);

app.use(
    "/promocao",
    promocaoRoutes
);

app.use(
    "/promocao-categoria",
    promocaoCategoriaRoutes
);

app.use(
    "/promocao-produto",
    promocaoProdutoRoutes
);


// ==========================================
// FINANCEIRO
// ==========================================

app.use(
    "/financeiro",
    financeiroRoutes
);


// ==========================================
// ROTA DE TESTE
// ==========================================

app.get(
    "/teste",
    (req, res) => {

        res.json({

            sucesso: true,

            mensagem:
                "Servidor e API funcionando."

        });

    }
);


// ==========================================
// SERVIDOR
// ==========================================

app.listen(
    3000,
    () => {

        console.log(
            "Servidor rodando em http://localhost:3000"
        );

    }
);