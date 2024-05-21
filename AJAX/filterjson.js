document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("get-message").onclick = function () {
    const req = new XMLHttpRequest();
    req.open("GET", "/json/cats.json", true);
    req.send();
    req.onload = function () {
      let json = JSON.parse(req.responseText);
      let html = "";
      // Add your code below this line

      json = json.filter(function (val) {
        return val.id !== 1;
      });
      // Add your code above this line
      json.forEach(function (val) {
        html += "<div class = 'cat'>";

        html +=
          "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

        html += "</div>";
      });
      document.getElementsByClassName("message")[0].innerHTML = html;
    };
  };
});
