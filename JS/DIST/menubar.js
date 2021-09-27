"use strict";

var menu = document.querySelector(".hamburger");
var menuLinks = document.querySelector(".nav-menu");
menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});