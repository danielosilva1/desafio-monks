let menuIsOpen = false;
// Números que serão somados na verificação de segurança
let number1 = -1;
let number2 = -1;

// Lida com a abertura e fechamento do menu (quando está na visualização mobile)
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

// Função retorna um número aleatório entre 1 e 1000
function getAleatoryNumber() {
    return Math.floor(Math.random() * 1000 + 1);
}

// Função obtém dois números aleatórios x e y e adicione "x + y" à caixa de texto
function setSumNumbers() {
    number1 = getAleatoryNumber();
    number2 = getAleatoryNumber();

    document.getElementsByClassName("security_area__sum")[0].value = `${number1} + ${number2}`;
}

// Função realiza a verificação de segurança: se falhar, caixa de resultado fica com borda e background vermelhos. Caso contrário, fica com borda e background verdes
function securityVerify() {
    const sumResultElement = document.getElementsByClassName("security_area__sum-result")[0];
    const result = parseInt(sumResultElement.value);

    if (result == (number1 + number2)) {
        sumResultElement.style.border = "solid 1px green";
        sumResultElement.style.backgroundColor = "rgba(33, 250, 0, 0.21)";
    } else {
        sumResultElement.style.border = "solid 1px rgb(250, 33, 0)";
        sumResultElement.style.backgroundColor = "rgba(250, 33, 0, 0.21)";
    }
}

// Garante que script será executado após carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    
    setSumNumbers();

    document.getElementsByClassName("header-categories__menu-icon")[0].addEventListener("click", handleMenuView);
    document.getElementsByClassName("header-categories__back-img")[0].addEventListener("click", closeVerticalMenu);
    document.getElementsByClassName("container-form__button")[0].addEventListener("click", securityVerify);
    window.addEventListener("resize", checkWindowWidth);
});