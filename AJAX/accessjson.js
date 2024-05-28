document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("get-message").onclick = function() {
    const req = new XMLHttpRequest();
    req.open("GET", "/json/cats.json", true);
    req.send();
    req.onload = function() {
      const json = JSON.parse(req.responseText);
      document.getElementsByClassName("message")[0].innerHTML =
        JSON.stringify(json);

      console.log(json[2].codeNames[1]);
    };
  };
});
