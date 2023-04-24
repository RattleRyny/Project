
var burger = document.getElementById('menuButton');
var burgerMenuList = document.getElementById('burgerMenuList');

burger.addEventListener('click', function() {
    if(burgerMenuList.style.right == '-1000px') {
        burgerMenuList.style.right = '0px';
        burger.style.marginRight = '250px';
    }
    else {
        burgerMenuList.style.right = '-1000px';
        burger.style.marginRight = '0px';
    }
    
});
