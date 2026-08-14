/*====================================================
 BANCO DE DADOS - LIZA VARIEDADES
 PARTE 1
====================================================*/

DROP DATABASE IF EXISTS Lizavariedades;
CREATE DATABASE Lizavariedades;
USE Lizavariedades;

-- =====================================
-- TABELA LOJISTA
-- =====================================

CREATE TABLE Lojista(
    idLojista INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    cnpj VARCHAR(18) UNIQUE,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20)
);

-- =====================================
-- TABELA ENDERECO
-- =====================================

CREATE TABLE Endereco(
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(100) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    bairro VARCHAR(80) NOT NULL,
    numero INT,
    complemento VARCHAR(150),
    tipo VARCHAR(45)
);

-- =====================================
-- FORMA PAGAMENTO
-- =====================================

CREATE TABLE Forma_Pagamento(
    idForma_Pagamento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    link VARCHAR(255),
    ativo BOOLEAN DEFAULT TRUE
);

-- =====================================
-- CATEGORIA
-- =====================================

CREATE TABLE Categoria(
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE
);

-- =====================================
-- MARCA
-- =====================================

CREATE TABLE Marca(
    idMarca INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    logo longblob
);

-- =====================================
-- TAMANHO
-- =====================================

CREATE TABLE Tamanho(
    idTamanho INT PRIMARY KEY AUTO_INCREMENT,
    tm VARCHAR(20)
);

-- =====================================
-- CORES
-- =====================================

CREATE TABLE Cores(
    idCores INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    codigo_cor VARCHAR(20)
);

-- =====================================
-- LOJA
-- =====================================

CREATE TABLE Loja(
    idLoja INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    whatsapp VARCHAR(20),
    instagram VARCHAR(100),
    facebook VARCHAR(100),
    linkedin VARCHAR(100),
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,

    Endereco_idEndereco INT,
    Lojista_idLojista INT,

    CONSTRAINT fk_loja_endereco
        FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_loja_lojista
        FOREIGN KEY (Lojista_idLojista)
        REFERENCES Lojista(idLojista)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- =====================================
-- CLIENTE
-- =====================================

CREATE TABLE Cliente(
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,

    Loja_idLoja INT,

    CONSTRAINT fk_cliente_loja
        FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- =====================================
-- CUPOM
-- =====================================

CREATE TABLE Cupom(
    idCupom INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    data_validade DATE,
    quantidade INT,
    desconto DECIMAL(10,2),

    Loja_idLoja INT,

    CONSTRAINT fk_cupom_loja
        FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- =====================================
-- BANNER
-- =====================================

CREATE TABLE Banner(
    idBanner INT PRIMARY KEY AUTO_INCREMENT,
    imagem VARCHAR(255) NOT NULL,
    data_inicio DATE NOT NULL,
    data_final DATE,
    status_visibilidade BOOLEAN DEFAULT TRUE
);

-- =====================================
-- CARRINHO
-- =====================================

CREATE TABLE Carrinho(
    idCarrinho INT PRIMARY KEY AUTO_INCREMENT,

    Cliente_idCliente INT,

    quantidade_produto INT DEFAULT 0,

    preco_total DECIMAL(10,2),

    CONSTRAINT fk_carrinho_cliente
        FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- =====================================
-- PRODUTO
-- =====================================

-- ==========================================
-- TABELA PRODUTO
-- ==========================================

CREATE TABLE Produto (

    idProduto INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(120) NOT NULL,

    descricao TEXT NOT NULL,

    codigo VARCHAR(45) NOT NULL UNIQUE,

    preco_antigo DECIMAL(10,2) NOT NULL,

    preco_promocional DECIMAL(10,2),

    quantidade_estoque INT NOT NULL,

    ativo BOOLEAN DEFAULT TRUE,

    Loja_idLoja INT NOT NULL,

    Marca_idMarca INT,

    Categoria_idCategoria INT,

    -- ==========================================
    -- CHAVES ESTRANGEIRAS
    -- ==========================================

    CONSTRAINT fk_Produto_Loja
        FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja (idLoja),

    CONSTRAINT fk_Produto_Marca
        FOREIGN KEY (Marca_idMarca)
        REFERENCES Marca (idMarca),

    CONSTRAINT fk_Produto_Categoria
        FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria (idCategoria)

);

/*====================================================
 BANCO DE DADOS - LIZA VARIEDADES
 PARTE 2
====================================================*/

-- =====================================
-- PEDIDOS
-- =====================================

CREATE TABLE Pedidos(

    idPedidos INT PRIMARY KEY AUTO_INCREMENT,

    data_pedido DATE NOT NULL,

    data_entrega DATE,

    nota_fiscal LONGBLOB,

    status_entrega VARCHAR(45) NOT NULL,

    valor_total DECIMAL(10,2) NOT NULL,

    Cliente_idCliente INT NOT NULL,

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- PROMOCAO
-- =====================================

CREATE TABLE Promocao(

    idPromocao INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    data_inicio DATE NOT NULL,

    data_final DATE NOT NULL,

    valor_promocao DECIMAL(10,2)

);

-- =====================================
-- CARTAO PAGAMENTOS
-- =====================================

CREATE TABLE Cartao_Pagamentos(

    idCartao_Pagamentos INT PRIMARY KEY AUTO_INCREMENT,

    numero VARCHAR(19) NOT NULL,

    data_vencimento CHAR(5) NOT NULL,

    cvc CHAR(3) NOT NULL,

    cpf CHAR(11) NOT NULL,

    nome_proprietario VARCHAR(200) NOT NULL,

    nome_identificacao VARCHAR(100) NOT NULL,

    bandeira VARCHAR(45) NOT NULL

);

-- =====================================
-- IMAGEM PRODUTOS
-- =====================================

CREATE TABLE Imagem_Produtos(

    idImagem_Produtos INT PRIMARY KEY AUTO_INCREMENT,

    arquivo VARCHAR(255) NOT NULL,

    Produto_idProduto INT NOT NULL,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- AVALIACAO
-- =====================================

CREATE TABLE Avaliacao(

    idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,

    data_avaliacao DATE NOT NULL,

    nota DECIMAL(2,1) NOT NULL,

    descricao TEXT

);

-- =====================================
-- ENDERECO X CLIENTE
-- =====================================

CREATE TABLE Endereco_has_Clientes(

    Endereco_idEndereco INT,

    Cliente_idCliente INT,

    PRIMARY KEY
    (
        Endereco_idEndereco,
        Cliente_idCliente
    ),

    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- TAMANHO X PRODUTO
-- =====================================

CREATE TABLE Tamanho_has_Produtos(

    Tamanho_idTamanho INT,

    Produto_idProduto INT,

    PRIMARY KEY
    (
        Tamanho_idTamanho,
        Produto_idProduto
    ),

    FOREIGN KEY (Tamanho_idTamanho)
        REFERENCES Tamanho(idTamanho)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- PRODUTO X CORES
-- =====================================

CREATE TABLE Produtos_has_Cores(

    Produto_idProduto INT,

    Cores_idCores INT,

    PRIMARY KEY
    (
        Produto_idProduto,
        Cores_idCores
    ),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Cores_idCores)
        REFERENCES Cores(idCores)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- PEDIDOS X PRODUTOS
-- =====================================

CREATE TABLE Pedidos_has_Produtos(

    Pedidos_idPedidos INT,

    Produto_idProduto INT,

    PRIMARY KEY
    (
        Pedidos_idPedidos,
        Produto_idProduto
    ),

    FOREIGN KEY (Pedidos_idPedidos)
        REFERENCES Pedidos(idPedidos)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- PROMOCAO X PRODUTO
-- =====================================

CREATE TABLE Promocao_has_Produtos(

    Promocao_idPromocao INT,

    Produto_idProduto INT,

    PRIMARY KEY
    (
        Promocao_idPromocao,
        Produto_idProduto
    ),

    FOREIGN KEY (Promocao_idPromocao)
        REFERENCES Promocao(idPromocao)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- PROMOCAO X CATEGORIA
-- =====================================

CREATE TABLE Promocao_has_Categoria(

    Promocao_idPromocao INT,

    Categoria_idCategoria INT,

    PRIMARY KEY
    (
        Promocao_idPromocao,
        Categoria_idCategoria
    ),

    FOREIGN KEY (Promocao_idPromocao)
        REFERENCES Promocao(idPromocao)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria(idCategoria)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- BANNER X PRODUTO
-- =====================================

CREATE TABLE Banner_has_Produtos(

    Banner_idBanner INT,

    Produto_idProduto INT,

    PRIMARY KEY
    (
        Banner_idBanner,
        Produto_idProduto
    ),

    FOREIGN KEY (Banner_idBanner)
        REFERENCES Banner(idBanner)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- CARRINHO X PRODUTO
-- =====================================

CREATE TABLE Carrinho_has_Produtos(

    Carrinho_idCarrinho INT,

    Produto_idProduto INT,

    PRIMARY KEY
    (
        Carrinho_idCarrinho,
        Produto_idProduto
    ),

    FOREIGN KEY (Carrinho_idCarrinho)
        REFERENCES Carrinho(idCarrinho)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- AVALIACAO X PRODUTO
-- =====================================

CREATE TABLE Avaliacao_has_Produtos(

    Avaliacao_idAvaliacao INT,

    Produto_idProduto INT,

    PRIMARY KEY
    (
        Avaliacao_idAvaliacao,
        Produto_idProduto
    ),

    FOREIGN KEY (Avaliacao_idAvaliacao)
        REFERENCES Avaliacao(idAvaliacao)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

-- =====================================
-- CUPOM X CATEGORIA
-- =====================================

CREATE TABLE Categoria_has_Cupom(

    Categoria_idCategoria INT,

    Cupom_idCupom INT,

    PRIMARY KEY
    (
        Categoria_idCategoria,
        Cupom_idCupom
    ),

    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categoria(idCategoria)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (Cupom_idCupom)
        REFERENCES Cupom(idCupom)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

/*====================================================
 BANCO DE DADOS - LIZA VARIEDADES
 PARTE 3 - INSERTS
====================================================*/

-- =====================================
-- LOJISTA
-- =====================================

INSERT INTO Lojista
(nome, cpf, cnpj, email, senha, telefone)
VALUES
(
'Raniely Lima',
'123.456.789-00',
'12.345.678/0001-99',
'contato@lizavariedades.com',
'123456',
'(63)99999-9999'
);

-- =====================================
-- ENDERECO
-- =====================================

INSERT INTO Endereco
(rua, cep, bairro, numero, complemento, tipo)
VALUES
(
'Avenida Cônego João Lima',
'77803-010',
'Centro',
1500,
'Próximo ao Banco do Brasil',
'Comercial'
);

-- =====================================
-- LOJA
-- =====================================

INSERT INTO Loja
(
nome,
whatsapp,
instagram,
facebook,
linkedin,
telefone,
email,
Endereco_idEndereco,
Lojista_idLojista
)
VALUES
(
'Liza Variedades',
'(63)99999-9999',
'@lizavariedades',
'facebook.com/lizavariedades',
'linkedin.com/company/lizavariedades',
'(63)3414-0000',
'contato@lizavariedades.com',
1,
1
);

-- =====================================
-- CATEGORIAS
-- =====================================

INSERT INTO Categoria(nome)
VALUES
('Feminino'),
('Masculino'),
('Infantil'),
('Calçados'),
('Bolsas'),
('Acessórios'),
('Perfumes'),
('Promoções');

-- =====================================
-- MARCAS
-- =====================================

INSERT INTO Marca(nome,logo)
VALUES
('Nike','nike.png'),
('Adidas','adidas.png'),
('Puma','puma.png'),
('Liza Fashion','liza.png');

-- =====================================
-- TAMANHOS
-- =====================================

INSERT INTO Tamanho(tamanho)
VALUES
('PP'),
('P'),
('M'),
('G'),
('GG'),
('36'),
('38'),
('40'),
('42'),
('44');

-- =====================================
-- CORES
-- =====================================

INSERT INTO Cores(nome,codigo_cor)
VALUES
('Preto','#000000'),
('Branco','#FFFFFF'),
('Azul','#0000FF'),
('Vermelho','#FF0000'),
('Verde','#008000'),
('Rosa','#FFC0CB');

-- =====================================
-- FORMAS DE PAGAMENTO
-- =====================================

INSERT INTO Forma_Pagamento
(nome,link,ativo)
VALUES
('PIX','',1),
('Cartão de Crédito','',1),
('Cartão de Débito','',1),
('Dinheiro','',1);

-- =====================================
-- CLIENTES
-- =====================================

INSERT INTO Cliente
(
nome,
cpf,
telefone,
email,
senha,
data_nascimento,
Loja_idLoja
)
VALUES
(
'João Pedro',
'987.654.321-00',
'(63)99111-1111',
'joao@gmail.com',
'123456',
'2000-08-10',
1
),
(
'Maria Clara',
'741.852.963-00',
'(63)99222-2222',
'maria@gmail.com',
'123456',
'1999-02-20',
1
);

-- =====================================
-- PRODUTOS
-- =====================================

INSERT INTO Produto
(
nome,
descricao,
codigo,
preco_antigo,
preco_promocional,
quantidade_estoque,
ativo,
Loja_idLoja,
Marca_idMarca,
Categoria_idCategoria
)
VALUES
(
'Camiseta Feminina',
'Camiseta básica de algodão',
'CAM001',
79.90,
49.90,
50,
1,
1,
4,
1
),
(
'Tênis Nike Air',
'Tênis esportivo original',
'TEN001',
599.90,
449.90,
20,
1,
1,
1,
4
),
(
'Bolsa Feminina',
'Bolsa em couro sintético',
'BOL001',
199.90,
149.90,
15,
1,
1,
4,
5
),
(
'Perfume Importado',
'Fragrância feminina 100ml',
'PER001',
299.90,
249.90,
30,
1,
1,
4,
7
);

-- =====================================
-- IMAGENS DOS PRODUTOS
-- =====================================

INSERT INTO Imagem_Produtos
(arquivo,Produto_idProduto)
VALUES
('camiseta.jpg',1),
('tenis.jpg',2),
('bolsa.jpg',3),
('perfume.jpg',4);

-- =====================================
-- BANNER
-- =====================================

INSERT INTO Banner
(
imagem,
data_inicio,
data_final,
status_visibilidade
)
VALUES
(
'banner1.jpg',
'2026-01-01',
'2026-12-31',
1
);

/*====================================================
 BANCO DE DADOS - LIZA VARIEDADES
 PARTE 4 - RELACIONAMENTOS E DADOS DE TESTE
====================================================*/

-- =====================================
-- CUPOM
-- =====================================

INSERT INTO Cupom
(
nome,
data_validade,
quantidade,
desconto,
Loja_idLoja
)
VALUES
(
'BEMVINDO10',
'2026-12-31',
100,
10.00,
1
),
(
'PROMO20',
'2026-12-31',
50,
20.00,
1
);

-- =====================================
-- PROMOÇÃO
-- =====================================

INSERT INTO Promocao
(
nome,
data_inicio,
data_final,
valor_promocao
)
VALUES
(
'Black Friday',
'2026-11-20',
'2026-11-30',
40.00
),
(
'Natal',
'2026-12-01',
'2026-12-25',
25.00
);

-- =====================================
-- PEDIDOS
-- =====================================

INSERT INTO Pedidos
(
data_pedido,
data_entrega,
nota_fiscal,
status_entrega,
valor_total,
Cliente_idCliente
)
VALUES
(
'2026-08-05',
'2026-08-10',
NULL,
'Em separação',
499.90,
1
);

-- =====================================
-- CARRINHO
-- =====================================

INSERT INTO Carrinho
(
Cliente_idCliente,
quantidade_produto,
preco_total
)
VALUES
(
1,
2,
499.90
);

-- =====================================
-- CARTÃO
-- =====================================

INSERT INTO Cartao_Pagamentos
(
numero,
data_vencimento,
cvc,
cpf,
nome_proprietario,
nome_identificacao,
bandeira
)
VALUES
(
'4111111111111111',
'12/30',
'123',
'98765432100',
'João Pedro',
'Cartão Principal',
'Visa'
);

-- =====================================
-- AVALIAÇÃO
-- =====================================

INSERT INTO Avaliacao
(
data_avaliacao,
nota,
descricao
)
VALUES
(
'2026-08-05',
5,
'Produto excelente.'
),
(
'2026-08-05',
4.5,
'Entrega rápida.'
);

-- =====================================
-- PRODUTO X TAMANHO
-- =====================================

INSERT INTO Tamanho_has_Produtos
VALUES
(3,1),
(4,1),
(6,2),
(7,2);

-- =====================================
-- PRODUTO X CORES
-- =====================================

INSERT INTO Produtos_has_Cores
VALUES
(1,1),
(1,2),
(2,1),
(2,3),
(3,2),
(3,6),
(4,2);

-- =====================================
-- PEDIDO X PRODUTO
-- =====================================

INSERT INTO Pedidos_has_Produtos
VALUES
(1,2),
(1,3);

-- =====================================
-- CARRINHO X PRODUTO
-- =====================================

INSERT INTO Carrinho_has_Produtos
VALUES
(1,2),
(1,3);

-- =====================================
-- PROMOÇÃO X PRODUTO
-- =====================================

INSERT INTO Promocao_has_Produtos
VALUES
(1,2),
(1,3),
(2,4);

-- =====================================
-- PROMOÇÃO X CATEGORIA
-- =====================================

INSERT INTO Promocao_has_Categoria
VALUES
(1,4),
(1,5),
(2,7);

-- =====================================
-- BANNER X PRODUTO
-- =====================================

INSERT INTO Banner_has_Produtos
VALUES
(1,1),
(1,2),
(1,3),
(1,4);

-- =====================================
-- AVALIAÇÃO X PRODUTO
-- =====================================

INSERT INTO Avaliacao_has_Produtos
VALUES
(1,2),
(2,3);

-- =====================================
-- ENDEREÇO X CLIENTE
-- =====================================

INSERT INTO Endereco_has_Clientes
VALUES
(1,1),
(1,2);

-- =====================================
-- CATEGORIA X CUPOM
-- =====================================

INSERT INTO Categoria_has_Cupom
VALUES
(4,1),
(5,1),
(7,2);

-- =====================================
-- CONSULTAS PARA TESTE
-- =====================================

-- Listar produtos
SELECT * FROM Produto;

-- Listar clientes
SELECT * FROM Cliente;

-- Listar lojas
SELECT * FROM Loja;

-- Produtos com categoria e marca
SELECT
    p.idProduto,
    p.nome AS Produto,
    c.nome AS Categoria,
    m.nome AS Marca,
    p.preco_promocional
FROM Produto p
LEFT JOIN Categoria c ON p.Categoria_idCategoria = c.idCategoria
LEFT JOIN Marca m ON p.Marca_idMarca = m.idMarca;

-- Pedidos dos clientes
SELECT
    pe.idPedidos,
    cl.nome,
    pe.status_entrega,
    pe.valor_total
FROM Pedidos pe
INNER JOIN Cliente cl
ON pe.Cliente_idCliente = cl.idCliente;

-- =====================================
-- FIM DO SCRIPT
-- =====================================


show tables;

USE Lizavariedades;
select * from categoria;
select * from marca;
select * from cores;
select * from tamanho;

select * from produto;

