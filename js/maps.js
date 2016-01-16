// Google Maps Script
var map;
function initMap() {
  var myLatLng = {lat: 39.596217, lng: -74.800530};

  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Precision-Tech'
  });
}
