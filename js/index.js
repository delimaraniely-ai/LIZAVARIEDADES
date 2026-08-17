/* ==========================================================
   INDEX.JS
   LIZA VARIEDADES
========================================================== */


/* ==========================================================
   AGUARDAR O HTML CARREGAR
========================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ======================================================
       PESQUISA
    ====================================================== */

    const campoPesquisa =
        document.getElementById("campoPesquisa");

    const btnPesquisa =
        document.getElementById("btnPesquisa");


    if (btnPesquisa && campoPesquisa) {

        btnPesquisa.addEventListener("click", function () {

            const texto =
                campoPesquisa.value.trim();

            if (texto === "") {

                alert("Digite o que você está procurando.");

                return;

            }

            console.log(
                "Pesquisa:",
                texto
            );

        });


        campoPesquisa.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    btnPesquisa.click();

                }

            }
        );

    }



    /* ======================================================
       BANNER
    ====================================================== */

    const imagemBanner =
        document.getElementById("imagemBanner");

    const btnAnterior =
        document.getElementById("btnAnterior");

    const btnProximo =
        document.getElementById("btnProximo");


    const indicadores =
        document.querySelectorAll(".indicador");


    /*
       Caso você tenha mais banners,
       coloque os nomes aqui.
    */

    const banners = [

        "../assets/BANNER.png",

        "../assets/BANNER2.png",

        "../assets/BANNER3.png"

    ];


    let bannerAtual = 0;


    function atualizarBanner() {

        if (!imagemBanner) {
            return;
        }


        imagemBanner.src =
            banners[bannerAtual];


        indicadores.forEach(
            function (indicador, indice) {

                indicador.classList.toggle(
                    "ativo",
                    indice === bannerAtual
                );

            }
        );

    }


    if (btnProximo) {

        btnProximo.addEventListener(
            "click",
            function () {

                bannerAtual++;

                if (
                    bannerAtual >=
                    banners.length
                ) {

                    bannerAtual = 0;

                }

                atualizarBanner();

            }
        );

    }


    if (btnAnterior) {

        btnAnterior.addEventListener(
            "click",
            function () {

                bannerAtual--;

                if (bannerAtual < 0) {

                    bannerAtual =
                        banners.length - 1;

                }

                atualizarBanner();

            }
        );

    }


    /* ======================================================
       INDICADORES DO BANNER
    ====================================================== */

    indicadores.forEach(
        function (indicador, indice) {

            indicador.addEventListener(
                "click",
                function () {

                    bannerAtual = indice;

                    atualizarBanner();

                }
            );

        }
    );



    /* ======================================================
       FAVORITOS
    ====================================================== */

    const botoesFavorito =
        document.querySelectorAll(
            ".btn-favorito"
        );


    botoesFavorito.forEach(
        function (botao) {

            botao.addEventListener(
                "click",
                function () {

                    botao.classList.toggle(
                        "favoritado"
                    );


                    if (
                        botao.classList.contains(
                            "favoritado"
                        )
                    ) {

                        botao.style.background =
                            "#f8d7e2";

                    } else {

                        botao.style.background =
                            "#ffffff";

                    }

                }
            );

        }
    );



    /* ======================================================
       ADICIONAR AO CARRINHO
    ====================================================== */

    const botoesCarrinho =
        document.querySelectorAll(
            ".btn-carrinho"
        );


    botoesCarrinho.forEach(
        function (botao) {

            botao.addEventListener(
                "click",
                function () {

                    alert(
                        "Produto adicionado ao carrinho!"
                    );

                }
            );

        }
    );


});