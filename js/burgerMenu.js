var menu = document.getElementById('menu');
var burger = document.getElementById('menu-button');
var burgerMenuList = burgerMenuList.getElementById('burgerMenuList')

burger.addEventListener("click", function() {
    burgerMenuList.style.position = 'absolute';
    burgerMenuList.style.right = '0px';
} )