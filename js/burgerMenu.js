var burger = document.getElementById('menuButton');
var burgerMenuList = document.getElementById('burgerMenuList');


burger.addEventListener('click', function() {
    if(getComputedStyle(burgerMenuList, null).right == '-1000px') {
        burgerMenuList.style.right = '0px';
        burgerMenuList.style.display = 'block';
    }
    else {
        burgerMenuList.style.right = '-1000px';
        burgerMenuList.style.display = 'none';
    }
});
