const user_icon = document.querySelector(".user-header__icon");
const user_menu = document.querySelector(".user-header__menu");

// по клику на иконку user_icon открываем меню user_menu
user_icon.addEventListener('click', function(e){
   user_menu.classList.toggle('open');
});

const menuBurger = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header__menu');
menuBurger.addEventListener('click', function(e){
  menuBurger.classList.toggle('_active');
  headerMenu.classList.toggle('_open');
});

// назначаем обработчик на весь document
document.addEventListener('click', function(e){
  // если мы кликнули не на блок меню, то забираем у меню user-header класс .open и оно закрывается
if(!e.target.closest('.user-header')){
  user_menu.classList.remove('open');
}
})