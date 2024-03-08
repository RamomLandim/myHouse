$('.produtos').click(function () {
    $('.menu ul .tipos-produtos').toggleClass('mostra');
    $('.menu ul .tipos-produtos').removeClass('fecha');
    $('.menu ul .seta').toggleClass('gira');
});

function desabilitarCheckbox() {
    var minhaCheckbox = document.getElementById('close-menu');
    var meusLinks = document.getElementsByClassName('itens-menu');

    for (var i = 0; i < meusLinks.length; i++) {
        meusLinks[i].addEventListener('click', function () {
            minhaCheckbox.checked = false;
        });
    }

}

function dasabilitarSubMenu() {
    var subMenu = document.getElementsByClassName('itens-sub-menu');

    for (var i = 0; i < subMenu.length; i++) {
        subMenu[i].addEventListener('click', function () {
            $('.menu ul .tipos-produtos').toggleClass('fecha');
            $('.menu ul .tipos-produtos').removeClass('mostra');
            $('.menu ul .seta').removeClass('gira');
        });
    }

}

desabilitarCheckbox();
dasabilitarSubMenu();
