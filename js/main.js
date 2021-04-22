var menuButton = document.querySelector('.menuButton');
var menu = document.querySelector('.header');
let langToggle = document.querySelector('.languageTogglerNav')

menuButton.addEventListener ('click', click)

function click(){
  menuButton.classList.toggle('menu-button-active')
  menu.classList.toggle('header-active');
  langToggle.classList.toggle('languageTogglerNavActive')
  console.log('клик')
}