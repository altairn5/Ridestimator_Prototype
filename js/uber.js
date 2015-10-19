
var uberClientId = "nve8UVY7Ehtc9_2BlbLqRFpKf_sR4URb"
  , uberServerToken = "T8mbwylMDwaXXDZMPt8wimfkhh2B3x6ONr_ZkeI9";

  var userLatitude
  , userLongitude;

 $(document).ready(function(){

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
    console.log("longitude: "+ userLongitude + "and" + userLatitude);
});

});