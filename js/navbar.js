/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } 
  else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

//  JS for drop down menu
document.addEventListener("DOMContentLoaded", function() {
   const exploreButton = document.querySelector('.explore-button');
   const dropdownMenu = document.querySelector('.dropdown-menu');

   exploreButton.addEventListener('click', function() {
       const isActive = dropdownMenu.classList.contains('active');

       // Close all dropdowns
       document.querySelectorAll('.dropdown-menu').forEach(menu => {
           menu.classList.remove('active');
       });

       // Toggle the clicked dropdown
       if (!isActive) {
           dropdownMenu.classList.add('active');
       }
   });

   // Close dropdowns when clicking outside
   window.addEventListener('click', function(e) {
       if (!e.target.closest('.nav__item')) {
           document.querySelectorAll('.dropdown-menu').forEach(menu => {
               menu.classList.remove('active');
           });
       }
   });
});
