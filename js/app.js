/* Boris Portfolio - main script */
let menuOpen = false;

function toggleMenu() {
  if (!menuOpen) { // open the menu
    $('nav').animate({ right: 0 }, 300);
  }
  else { // close the menu
    $('nav').animate({ right: -280 }, 240);
  }
  menuOpen = !menuOpen;
} // toggleMenu()

function closeMenu() {
  if (menuOpen) {
    $('nav').animate({ right: -280 }, 240);
    menuOpen = false;
  }
} // closeMenu()