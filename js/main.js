// window.addEventListener("DOMContentLoaded", typewriter("#landing h1", 250));
document.onload = window.onload = typewriter("#landing h1", 250);

document.querySelector("#scroll-down").onclick = scroll(true);
document.querySelector("#scroll-up").onclick = scroll(false);

function typewriter(querySelector, interval) {
  return function () {
    var element = document.querySelector(querySelector);
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    (function type() {
      element.innerHTML += text[i];
      i++;
      if (i < text.length) setTimeout(type, interval);
    })();
  };
}

function scroll(down) {
  var OFFSET = 100;
  return function () {
    var elements = document.querySelectorAll("header, section");
    for (var element of down ? elements : Array.from(elements).reverse()) {
      if (
        down
          ? element.offsetTop > scrollY + OFFSET
          : element.offsetTop < scrollY - OFFSET
      ) {
        element.scrollIntoView();
        break;
      }
    }
  };
}
