document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector("#landing h1");
  var text = element.innerHTML;
  element.innerHTML = "&nbsp;";

  var i = 0;
  (function type() {
    if (i <= text.length) {
      element.innerHTML = text.substring(0, i);
      i++;
      setTimeout(type, 250);
    }
  })();
});

document.getElementById("scroll").onclick = function () {
  for (const element of document.body.children) {
    if (element.offsetTop > window.scrollY) {
      element.scrollIntoView();
      break;
    }
  }
};
