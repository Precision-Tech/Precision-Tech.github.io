// Google Maps Script
var map;
function initMap() {
  var myLatLng = {lat: 39.596217, lng: -74.800530};
  var useragent = navigator.userAgent;

  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15,
    draggable: false
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Precision-Tech',
  });

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    map.setOptions({
      draggable: false,
      disableDefaultUI: true,
      disableDoubleClickZoom: true
    });
  }
}
