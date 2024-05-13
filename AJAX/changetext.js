document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    document.getElementsByClassName("message")[0].textContent =
      "Here is the message";
  };
});
