//==========================================
// IMPORTAÇÕES
//==========================================

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

console.log(">>> ESTE SERVIDOR.JS ESTÁ RODANDO <<<");


//==========================================
// CONFIGURAÇÕES
//==========================================

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


//==========================================
// ARQUIVOS PÚBLICOS / ASSETS
//==========================================

app.use(
    "/assets",
    express.static(
        path.join(__dirname, "..", "assets")
    )
);


//==========================================
// CONEXÃO COM O BANCO
//==========================================

const conexao = require("./conexao");


//==========================================
// ARQUIVOS ESTÁTICOS
//==========================================

// Arquivos da raiz do projeto
app.use(
    express.static(
        path.join(__dirname, "..")
    )
);


// Arquivos da pasta PAGES
app.use(
    "/pages",
    express.static(
        path.join(__dirname, "..", "PAGES")
    )
);


// Arquivos da pasta STYLE
app.use(
    "/style",
    express.static(
        path.join(__dirname, "..", "STYLE")
    )
);


// Arquivos da pasta JS
app.use(
    "/js",
    express.static(
        path.join(__dirname, "..", "JS")
    )
);


//==========================================
// PÁGINA INICIAL
//==========================================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "..",
            "index.html"
        )
    );

});
const conexao = require("./conexao.js");

// ==========================================
// IMPORTAÇÃO DAS ROTAS
// ==========================================

const clienteRoutes = require("../routes/cliente_rotas.js");
const categoriaRoutes = require("../routes/categoria_rotas.js");
const coresRoutes = require("../routes/cores_rotas.js");
const tamanhoRoutes = require("../routes/tamanho_rotas.js");
const produtoRoutes = require("../routes/produto_rotas.js");
const marcaRoutes = require("../routes/marca_rotas.js");

const bannerRoutes = require("../routes/banner_rotas.js");
const bannerProdutoRoutes = require("../routes/banner_has_produto_rotas.js");

// Verifique se este é realmente o nome do arquivo
const avaliacaoRoutes = require("../routes/avaliacao_produtos_rotas.js");

const carrinhoRoutes = require("../routes/carrinho_rotas.js");
const carrinhoProdutoRoutes = require("../routes/carrinho_has_produto.js");

const cartaoRoutes = require("../routes/cartao_pagamento_rotas.js");

const cuponsRoutes = require("../routes/cupons_rotas.js");
const cuponsProdutosRoutes = require("../routes/cupons_has_produtos_rotas.js");
const cuponsCategoriaRoutes = require("../routes/cupons_has_categoria.js");

const enderecoRoutes = require("../routes/endereco_rotas.js");
const enderecoClienteRoutes = require("../routes/endereco_has_cliente_rotas.js");

const formasPagamentoRoutes = require("../routes/formas_pagamento_rotas.js");

const freteRoutes = require("../routes/frete_rotas.js");
const freteEnderecoRoutes = require("../routes/frete_endereco_rotas.js");

const imagemProdutoRoutes = require("../routes/imagem_produto_rotas.js");

const pedidosRoutes = require("../routes/pedidos_rotas.js");
const pedidosProdutoRoutes = require("../routes/pedidos_has_produto.js");

const produtoCoresRoutes = require("../routes/produto_has_cores_rotas.js");

const promocaoRoutes = require("../routes/promocao_rotas.js");
const promocaoCategoriaRoutes = require("../routes/promocao_has_categoria_rotas.js");
const promocaoProdutoRoutes = require("../routes/promocao_has_produto_rotas.js");

const produtoRoutes =
    require("./routes/produto_routes.js");

app.use(
    produtoRoutes
);
// ==========================================
// ROTAS
// ==========================================

app.use("/cliente", clienteRoutes);

app.use("/categoria", categoriaRoutes);

app.use("/cores", coresRoutes);

app.use("/tamanho", tamanhoRoutes);

app.use("/produto", produtoRoutes);

app.use("/marca", marcaRoutes);

app.use("/banner", bannerRoutes);

app.use("/banner-produto", bannerProdutoRoutes);

app.use("/avaliacao", avaliacaoRoutes);

app.use("/carrinho", carrinhoRoutes);

app.use("/carrinho-produto", carrinhoProdutoRoutes);

app.use("/cartao", cartaoRoutes);

app.use("/cupons", cuponsRoutes);

app.use("/cupons-produtos", cuponsProdutosRoutes);

app.use("/cupons-categoria", cuponsCategoriaRoutes);

app.use("/endereco", enderecoRoutes);

app.use("/endereco-cliente", enderecoClienteRoutes);

app.use("/formas-pagamento", formasPagamentoRoutes);

app.use("/frete", freteRoutes);

app.use("/frete-endereco", freteEnderecoRoutes);

app.use("/imagem-produto", imagemProdutoRoutes);

app.use("/pedidos", pedidosRoutes);

app.use("/pedidos-produto", pedidosProdutoRoutes);

app.use("/produto-cores", produtoCoresRoutes);

app.use("/promocao", promocaoRoutes);

app.use("/promocao-categoria", promocaoCategoriaRoutes);

app.use("/promocao-produto", promocaoProdutoRoutes);






// ==========================================
// ROTA FINANCEIRO
// ==========================================

const financeiroRoutes =
    require("./routes/financeiro_routes.js");

app.use(financeiroRoutes);


// ==========================================
// SERVIDOR
// ==========================================

app.listen(3000, () => {

    console.log(
        "Servidor rodando em http://localhost:3000"
    );

});