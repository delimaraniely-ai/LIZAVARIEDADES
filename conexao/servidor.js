const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const conexao = require("./conexao");

// ROTAS

const clienteRotas = require("../routes/cliente_rotas");
app.use("/clientes", clienteRotas);

const avaliacaoProdutoRotas = require("../routes/avaliacao_produtos_rotas");
app.use("/avaliacoes-produtos", avaliacaoProdutoRotas);

const avaliacaoProdutosHasProdutosRotas = require("../routes/avaliacao_produtos_has_produtos_rotas");
app.use("/avaliacao-produtos-has-produtos", avaliacaoProdutosHasProdutosRotas);

const bannerRotas = require("../routes/banner_rotas");
app.use("/banners", bannerRotas);

const bannerHasProdutosRotas = require("../routes/banner_has_produtos_rotas");
app.use("/banner-has-produtos", bannerHasProdutosRotas);

const carrinhoRotas = require("../routes/carrinho_rotas");
app.use("/carrinhos", carrinhoRotas);

const carrinhoHasProdutoRotas = require("../routes/carrinho_has_produto.js");
app.use("/carrinho-has-produtos", carrinhoHasProdutoRotas);

const cartaoPagamentoRotas = require("../routes/cartao_pagamento_rotas");
app.use("/cartoes-pagamento", cartaoPagamentoRotas);

const categoriaRotas = require("../routes/categoria_rotas");
app.use("/categorias", categoriaRotas);

const coresRotas = require("../routes/cores_rotas");
app.use("/cores", coresRotas);

const cuponsHasCategoriaRotas = require("../routes/cupons_has_categoria.js");
app.use("/cupons-has-categorias", cuponsHasCategoriaRotas);

const cuponsHasProdutoRotas = require("../routes/cupons_has_produtos_rotas");
app.use("/cupons-has-produtos", cuponsHasProdutoRotas);

const enderecoRotas = require("../routes/endereco_rotas");
app.use("/enderecos", enderecoRotas);

const enderecoHasClienteRotas = require("../routes/endereco_has_cliente_rotas");
app.use("/endereco-has-clientes", enderecoHasClienteRotas);

const formasPagamentoRotas = require("../routes/formas_pagamento_rotas");
app.use("/formas-pagamento", formasPagamentoRotas);

const freteRotas = require("../routes/frete_rotas");
app.use("/fretes", freteRotas);

const imagemProdutoRotas = require("../routes/imagem_produto_rotas");
app.use("/imagens-produto", imagemProdutoRotas);

const marcaRotas = require("../routes/marca_rotas");
app.use("/marcas", marcaRotas);

const pedidosRotas = require("../routes/pedidos_rotas");
app.use("/pedidos", pedidosRotas);

const pedidosHasProdutoRotas = require("../routes/pedidos_has_produto");
app.use("/pedidos-has-produtos", pedidosHasProdutoRotas);

const produtoRotas = require("../routes/produto_rotas");
app.use("/produtos", produtoRotas);

const produtoHasCoresRotas = require("../routes/produto_has_cores_rotas");
app.use("/produto-has-cores", produtoHasCoresRotas);

const promocaoRotas = require("../routes/promocao_rotas");
app.use("/promocoes", promocaoRotas);

const promocaoHasCategoriaRotas = require("../routes/promocao_has_categoria_rotas");
app.use("/promocao-has-categorias", promocaoHasCategoriaRotas);

const promocaoHasProdutoRotas = require("../routes/promocao_has_produto_rotas");
app.use("/promocao-has-produtos", promocaoHasProdutoRotas);

const tamanhoRotas = require("../routes/tamanho_rotas");
app.use("/tamanhos", tamanhoRotas);

const tamanhoHasProdutoRotas = require("../routes/tamanho_has_produto_rotas");
app.use("/tamanho-has-produtos", tamanhoHasProdutoRotas);

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});