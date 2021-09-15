"use strict";

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
marker.bindPopup("<b>Terracotta Catering</b><br>16 Zobel Close<br>Norwich, Norfolk<br>NR3 2BY").openPopup();