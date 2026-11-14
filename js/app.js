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
$(document).ready(function () {
  /* Contact form submit */
  $('.contactForm').on('submit', function (e) {
    e.preventDefault(); // stop the page from reloading
    $(this).find('button').text('Message Sent ✓');
    this.reset(); // clear the fields
  });
});