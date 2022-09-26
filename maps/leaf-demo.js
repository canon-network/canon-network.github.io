// See post: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map('map', {
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2,
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)

var myURL = jQuery('script[src$="leaf-demo.js"]')
  .attr('src')
  .replace('leaf-demo.js', '')

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
})

for (var i = 0; i < markers.length; ++i) {
  L.marker([markers[i].lat, markers[i].lng], { icon: myIcon })
    .bindPopup(
          '<img src="img2/g69.png" height="50px" width="150px"/>'
           + "<dl><dt>Country</dt>"
           + "<dd>" + markers[i].country + "</dd>"
           + '<img src="' + markers[i].img + '" height="18px" width="25px"/>'
           + "<dt>CANoN Collaborator</dt>"
           + "<dd>" + markers[i].name + "</dd>"
           + "<dt>Area of expertise</dt>"
           + "<dd>" + markers[i].field + "</dd>"
           + "<dt>Institution</dt>"
           + "<dd>" + markers[i].institution + "</dd>"
           + "<dt>Website</dt>"
           + "<dd>" + markers[i].url + "</dd>"
           + "<dt>Contact</dt>"
           + "<dd>" + markers[i].email + "</dd>"
           + "<dt>Description</dt>"
           + "<dd>" + markers[i].description + "</dd>"


    )
    .addTo(map)
}
