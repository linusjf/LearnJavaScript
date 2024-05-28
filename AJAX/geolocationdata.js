// Add your code below this line
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById("data").innerHTML =
      "latitude: " +
      position.coords.latitude +
      "<br>longitude: " +
      position.coords.longitude;
  });
}

// Add your code above this line
