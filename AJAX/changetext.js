document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("get-message").onclick = function () {
    document.getElementsByClassName("message")[0].textContent =
      "Here is the message";
  };
});
