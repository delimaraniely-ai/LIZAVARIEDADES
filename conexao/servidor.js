
// ==========================================
// IMPORTAÇÃO DAS ROTAS
// ==========================================
// express é um framework para criar 
// aplicações web com Node.js
const express = require("express");
// cors é um pacote que permite que o servidor
// aceite requisições de outros domínios
const cors = require("cors");

// criar uma instância do express
const app = express();

// permitir que o servidor aceite requisições de 
// outros domínios
app.use(cors());
app.use(express.json());

// importar a conexão com o banco de dados
const conexao = require("./conexao");

// CLIENTE
const clienteRoutes = require("../routes/cliente_rotas.js");


// CATEGORIA
const categoriaRoutes = require("../routes/categoria_rotas.js");


// CORES
const coresRoutes = require("../routes/cores_rotas.js");


// TAMANHO
const tamanhoRoutes = require("../routes/tamanho_rotas.js");


// PRODUTO
const produtoRoutes = require("../routes/produto_rotas.js");


// MARCA
const marcaRoutes = require("../routes/marca_rotas.js");


// BANNER
const bannerRoutes = require("../routes/banner_rotas.js");


// BANNER PRODUTO
const bannerProdutoRoutes =
    require("../routes/banner_has_produto_rotas.js");


// AVALIAÇÃO
const avaliacaoRoutes =
    require("../routes/avaliacao_produtos_rotas.js");


// CARRINHO
const carrinhoRoutes =
    require("../routes/carrinho_rotas.js");


// CARRINHO PRODUTO
const carrinhoProdutoRoutes =
    require("../routes/carrinho_has_produto.js");


// CARTÃO
const cartaoRoutes =
    require("../routes/cartao_pagamento_rotas.js");


// CUPONS
const cuponsRoutes =
    require("../routes/cupons_rotas.js");


// CUPONS PRODUTOS
const cuponsProdutosRoutes =
    require("../routes/cupons_has_produtos_rotas.js");


// CUPONS CATEGORIA
const cuponsCategoriaRoutes =
    require("../routes/cupons_has_categoria.js");


// ENDEREÇO
const enderecoRoutes =
    require("../routes/endereco_rotas.js");


// ENDEREÇO CLIENTE
const enderecoClienteRoutes =
    require("../routes/endereco_has_cliente_rotas.js");


// FORMAS PAGAMENTO
const formasPagamentoRoutes =
    require("../routes/formas_pagamento_rotas.js");


// FRETE
const freteRoutes =
    require("../routes/frete_rotas.js");


// FRETE ENDEREÇO
const freteEnderecoRoutes =
    require("../routes/frete_endereco_rotas.js");


// IMAGEM PRODUTO
const imagemProdutoRoutes =
    require("../routes/imagem_produto_rotas.js");


// PEDIDOS
const pedidosRoutes =
    require("../routes/pedidos_rotas.js");


// PEDIDOS PRODUTO
const pedidosProdutoRoutes =
    require("../routes/pedidos_has_produto.js");


// PRODUTO CORES
const produtoCoresRoutes =
    require("../routes/produto_has_cores_rotas.js");


// PROMOÇÃO
const promocaoRoutes =
    require("../routes/promocao_rotas.js");


// PROMOÇÃO CATEGORIA
const promocaoCategoriaRoutes =
    require("../routes/promocao_has_categoria_rotas.js");


// PROMOÇÃO PRODUTO
const promocaoProdutoRoutes =
    require("../routes/promocao_has_produto_rotas.js");

// ==========================================
// TESTE DA API
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

// importar as rotas da aplicação
app.listen(3000, () => {
    console.log("Servidor iniciado!");
});