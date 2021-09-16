"use strict";

// Leaflet
var mymap = L.map('mapid').setView([52.647327, 1.26459], 17);
mymap.scrollWheelZoom.disable();
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoia2F5dm9udCIsImEiOiJja3RsOWgxaWswNzF4MnhvM3ZpbWJnaWh5In0.rUyAYbXJeXgkUyElCz0CsA'
}).addTo(mymap);
var marker = L.marker([52.647327, 1.26459]).addTo(mymap);
marker.bindPopup("<b>Terracotta Catering</b><br>16 Zobel Close<br>Norwich, Norfolk<br>NR3 2BY").openPopup(); // validation

var contactbutton = document.getElementById("submit_button");
var firstInput = document.getElementById("first_name");
var lastInput = document.getElementById("last_name");
var msgInput = document.getElementById("message-contact");
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('telephone');
var gdprInput = document.getElementById('gdpr');
var firstLabel = document.getElementById('firstLabel');
var lastLabel = document.getElementById('lastLabel');
var emailLabel = document.getElementById('email-label');
var phoneLabel = document.getElementById('phone-label');
var emailMessage = document.getElementById('email-message');
var phoneMessage = document.getElementById('phone-message');
var buttonMessage = document.getElementById("button-message");
contactbutton.addEventListener('click', function () {
  var grabbedEmail = emailInput.value;
  var grabbedPhone = phoneInput.value;

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    var re = /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    return re.test(phone);
  }

  if (grabbedEmail != "" && grabbedPhone != "" && firstInput.value != "" && lastInput.value != "" && msgInput.value != "" && gdprInput.checked) {
    buttonMessage.classList.remove('shown');
    firstLabel.classList.remove('error');
    firstInput.classList.remove('error');
    lastLabel.classList.remove('error');
    lastInput.classList.remove('error');
    msgInput.classList.remove('error');
    gdprInput.classList.remove('error');
    emailMessage.classList.remove('shown');
    emailInput.classList.remove('error');
    emailLabel.classList.remove('error');
    phoneMessage.classList.remove('shown');
    phoneInput.classList.remove('error');
    phoneLabel.classList.remove('error');

    if (!validateEmail(grabbedEmail)) {
      emailMessage.classList.add('shown');
      emailInput.classList.add('error');
      emailLabel.classList.add('error');
    }

    if (validateEmail(grabbedEmail)) {
      emailMessage.classList.remove('shown');
      emailInput.classList.remove('error');
      emailLabel.classList.remove('error');
    }

    if (!validatePhone(grabbedPhone)) {
      phoneMessage.classList.add('shown');
      phoneInput.classList.add('error');
      phoneLabel.classList.add('error');
    }

    if (validatePhone(grabbedPhone)) {
      phoneMessage.classList.remove('shown');
      phoneInput.classList.remove('error');
      phoneLabel.classList.remove('error');
    }

    alert("Your message has been sent!");
  } else {
    console.log("Please fill out the fields");
    buttonMessage.classList.add('shown');
    firstLabel.classList.add('error');
    firstInput.classList.add('error');
    lastLabel.classList.add('error');
    lastInput.classList.add('error');
    msgInput.classList.add('error');
    gdprInput.classList.add('error');
    emailMessage.classList.add('shown');
    emailInput.classList.add('error');
    emailLabel.classList.add('error');
    phoneMessage.classList.add('shown');
    phoneInput.classList.add('error');
    phoneLabel.classList.add('error');
  }
});