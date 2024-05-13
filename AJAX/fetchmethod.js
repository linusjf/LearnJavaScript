document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = () => {
    fetch("/json/cats.json")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").innerHTML = JSON.stringify(data);
      });
  };
});
