"use strict";

var menu = document.getElementById("mobile-menu");
var menuLinks = document.querySelector(".nav-menu");
menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});