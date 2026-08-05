// CRIANDO VARIAVEIS
/* nome das váriaveis não pode ter:
-acentos 
-espaço
-simbolos
-não pode começar com numeros 
-não deve ser escrito com a primeira letra em maiusculo 
*/

// variaveis que alteram de valor 
let preco_promocional = 55.99;
let preco_antigo = 115.0;
let desconto = "50%";
let quantidade = 6;
let favorito = false;
//variaveis que são constantes/ não alteram de valor
const nomeProduto = "paleta de maquiagens";
const cores = ["Preto", "Branco", "Azul"];
const tamanhos = ["P", "M", "G", "GG"];
const avaliacoes = 5.0;
const img_miniaturas =
    [
        "/assets/paleta1.png",
        "/assets/paleta2.png",
        "/assets/paleta3.png",
        "/assets/paleta4.png"
    ];

const img_principal = "/assets/paleta3.png";
const descricao = "paletas de maquiagens em cores nudes ";
let frete;
// botoes e arquivos 
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade
let bnt_calcular_frete;


// CODIGO PARA PREENCHER AS IMAGENS NO HTML 

//CRIANDO UMA VÁRIAVEL PARA RECONHER O ID DA IMAGEM LATERAL
const lateral = document.getElementById("img-lateral");



//LENDO A QUANTIDADE DE IMAGENS CADASTRADAS E CRIANDO AS TAGS IMG

/* ForEach: percorre uma lista de itens até o final
- ele percorre o primeiro, se ver que tem outro, ele lê o outro
- quando chega no ultimo ele para de ler e finaliza a execução
- img_miniatura é chamado pq é ele que contém a lista de imagens
- depois o ForEach é chamado para ler a lista
- e dentro do ForEach passamos o tipo de documento lido (imagem)
 */
img_miniaturas.forEach(imagem => {
    // CRIANDO UMA VÁRIAVEL QUE CRIE A TAG IMG NA DIV DO HTML
    const img = document.createElement("img");

    // criando o código que mostra as imagens no site
    img.src = imagem;//ele joga o caminho da imagem na tag img
    img.classList.add("img-lateral");//jogar a tag criada na div

    /*criando o código que substitui a imagem 
     principal pela miniatura clicada*/
    img.addEventListener("click", () => {
        document.getElementById("imagem-maior").src =
            imagem;
    });//ver se a pessoa clicou na imagem
    lateral.appendChild(img);//mostra a imagem adicionada

});//fechar o ForEach

// preencher a imagem principal
document.getElementById("imagem-maior").src = img_principal;


// --------------------PREENCHER DADOS DO PRODUTO-----------------------

document.getElementById("nome-produto").textContent = nomeProduto;
document.getElementById("valor-avaliacao").textContent = avaliacoes;
document.getElementById("preco-antigo").textContent = preco_antigo;
document.getElementById("preco-promocional").textContent = preco_promocional;
document.getElementById("desconto").textContent = desconto;

//----------------CORES D0 PRODUTO------------------------------------
// ELE VAI LER QUANTAS CORES O PRODUTO E
// VAI CIRAR BOTOES PARA AS CORES 
// Exemplo de arrays


// ----------- CORES --------------------
const listaDeCores = document.getElementById("cores");

cores.forEach(cor => {
    const botao = document.createElement("button");
    botao.textContent = cor;
    listaDeCores.appendChild(botao);
});

// ----------- TAMANHOS --------------------
const listaTamanhos = document.getElementById("tamanhos");

tamanhos.forEach(tamanho => {
    const botao = document.createElement("button");
    botao.textContent = tamanho;
    listaTamanhos.appendChild(botao);
});

//--------------------QUANTIDADE DE PRODUTO---------------------------------------------
/* O LIMITE DE QUANTIDADE VAI SER IGUAL A QUANTIDADE DE PRODUTOS QUE LOJISTA CADASTROU NO ESTOQUE.
QUANDO O CLIENTE CLICAR NO BOTÃO + A QUANTIDADE COMPRADA AUMENTA DE 1 EM 1.
QUANDO ELE CLICAR NO BOTÃO DE - A QUANTIDADE COMPRADA DIMINUI DE 1 EM 1 
INICIALMENTE O VALOR DA QUANTIDADE APARECE COMO 1 */
let quantidade_inicial = 1;

// Chamar os elementos do HTML
btn_add_quantidade = document.getElementById("aumentar");
btn_remover_quantidade = document.getElementById("diminuir");
const numero = document.getElementById("numero-quantidade");

// Exibir a quantidade inicial
numero.textContent = quantidade_inicial;


// Aumentar quantidade
btn_add_quantidade.addEventListener("click", () => {

    if (quantidade_inicial < quantidade) {
        quantidade_inicial++;
        numero.textContent = quantidade_inicial;
    } else {
        alert("voce antigiu o limite do estoque ");

    }


});
// criando o codigo de diminuir a quantidade de 1 em 1
btn_remover_quantidade.addEventListener("click", () => {
    if (quantidade_inicial > 0) {
        quantidade_inicial--
        numero.textContent = quantidade_inicial;
    }

});


