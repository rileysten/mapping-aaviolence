// leaflet quickstart guide
// (https://leafletjs.com/examples/quick-start/)

//javascripting english major course
//(https://the-javascripting-english-major.org/v1/contents)

var mymap = L.map('mapid').setView([34.0522, -118.2437], 9);

//map data
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoicmlsZXlzdGVuIiwiYSI6ImNrb2pjejBjcjFmcmYyd3MzcjZzaXE0eHIifQ.KlQu9BRf9gk7mfpScxL7NA'
}).addTo(mymap);

//map points
var marker = L.marker([33.7701, -118.1937]).addTo(mymap);
  marker.bindPopup("<b>Long Beach, April 1992</b><br>Cambodian and Vietnamese businesses ransacked and burned in Long Beach.");

var marker = L.marker([33.7420, -117.8236]).addTo(mymap);
  marker.bindPopup("<b>Tustin, 1996</b><br>Thien Minh Ly, a Vietnamese American murdered by two white supremacists who bragged that they had killed a “Jap”.");

var marker = L.marker([34.2794, -118.5022]).addTo(mymap);
  marker.bindPopup("<b>Granada Hills, 1999</b><br>Postal worker Joseph Santos Ileto murdered by white supremacist.");

var marker = L.marker([37.9577, -121.2908]).addTo(mymap);
  marker.bindPopup("<b>Cleveland Elementary School Massacre, 1989</b><br>Five Southeast Asian schoolchildren (4 Khmer, 1 Vietnamese) and one white teacher killed, 31 other mainly Southeast Asian children wounded.");
