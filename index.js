const menu = document.querySelector('.icono--menu');
const menuLista = document.querySelector('.menu__lista');
const shadow = document.querySelector('.shadow');

menu.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(menuLista.classList.contains('inactive')) {
        shadow.classList.remove('inactive');
        menuLista.classList.remove('inactive');
    } else {
        shadow.classList.add('inactive');
        menuLista.classList.add('inactive');
    }
}