// Garante que script será executado após carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    let menuIsOpen = false;

    function handleMenuView() {
        if (menuIsOpen) {
            closeVerticalMenu();
            menuIsOpen = !menuIsOpen;
        } else {
            openVerticalMenu();
            menuIsOpen = !menuIsOpen;
        }
    }

    // Altera estilo para mostrar menu na vertical
    function openVerticalMenu() {
        // Altera cor do contanier de apresentação
        document.getElementsByClassName("container-presentation")[0].style.backgroundColor = "rgba(223, 187, 254, 1)";

        // Altera raio das bordas inferiores do header que contém logo e ícone de menu
        const headerLogoMenuIcon = document.getElementsByClassName("header-logo-menu-icon")[0];
        headerLogoMenuIcon.style.borderBottomLeftRadius = "16px";
        headerLogoMenuIcon.style.borderBottomRightRadius = "16px";

        // Oculta imagem com as logos
        document.getElementsByClassName("container-presentation__logos-img")[0].style.display = "none";

        // Oculta a div com as informações (título e descrição)
        document.getElementsByClassName("header-info")[0].style.display = "none";

        // Mostra categorias abaixo da logo e do botão de menu
        document.getElementsByClassName("header")[0].style.display = "block";

        // Mostra categorias na vertical
        const headerCategories = document.getElementsByClassName("header-categories")[0];

        headerCategories.style.display = "flex";
        headerCategories.style.flexDirection = "column";

        // Altera cor do texto das categorias
        const categoriesList = document.getElementsByClassName("header-categories__category");
        for (let i = 0; i < categoriesList.length; i++) {
            categoriesList[i].style.color = "black";
        }

        // Mostrar back-img
        document.getElementsByClassName("header-categories__back-img")[0].style.display = "block";
    }

    // Reverte as alterações de estilo provocadas pela exibição do menu vertical
    function closeVerticalMenu() {
        document.getElementsByClassName("container-presentation")[0].style.backgroundColor = "";

        const headerLogoMenuIcon = document.getElementsByClassName("header-logo-menu-icon")[0];
        headerLogoMenuIcon.style.borderBottomLeftRadius = "";
        headerLogoMenuIcon.style.borderBottomRightRadius = "";

        document.getElementsByClassName("container-presentation__logos-img")[0].style.display = "";

        document.getElementsByClassName("header-info")[0].style.display = "";

        document.getElementsByClassName("header")[0].style.display = "";

        const headerCategories = document.getElementsByClassName("header-categories")[0];
        headerCategories.style.display = "";
        headerCategories.style.flexDirection = "";

        const categoriesList = document.getElementsByClassName("header-categories__category");

        for (let i = 0; i < categoriesList.length; i++) {
            categoriesList[i].style.color = "";
        }

        document.getElementsByClassName("header-categories__back-img")[0].style.display = "";
    }

    function checkWindowWidth() {
        if (window.innerWidth > 768) {
            // Restaura o estilo para o padrão: visualização em desktop
            closeVerticalMenu();
        }
    }

    document.getElementsByClassName("header-categories__menu-icon")[0].addEventListener("click", handleMenuView);
    document.getElementsByClassName("header-categories__back-img")[0].addEventListener("click", closeVerticalMenu);
    window.addEventListener("resize", checkWindowWidth);
});