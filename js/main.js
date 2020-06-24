document.addEventListener("DOMContentLoaded", function () {
  var text = "Aakash Kc";
  var element = document.querySelector("#landing h1");
  element.innerHTML = "&nbsp;";

  var i = 0;
  (function type() {
    if (i <= text.length + 5) {
      element.innerHTML =
        text.substring(0, i) + (i >= text.length + 5 ? "" : "|");
      i++;
      setTimeout(type, 250);
    }
  })();
});
