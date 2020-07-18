const typewriter = (querySelector, interval) => () => {
  const element = document.querySelector(querySelector);
  const text = element.innerHTML;
  element.innerHTML = "";

  let i = 0;
  const type = () => {
    element.innerHTML += text[i];
    i++;
    if (i < text.length) setTimeout(type, interval);
  };
  type();
};

const scroll = (down) => () => {
  const OFFSET = 100;
  const elements = document.querySelectorAll("header, section");
  for (const element of down ? elements : Array.from(elements).reverse()) {
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

const modalOpen = (modalID) => () => {
  document.querySelector("#modals").classList.add("show");
  document
    .querySelectorAll(`#modals article`)
    .forEach((element) => element.classList.remove("show"));
  document.getElementById(modalID).classList.add("show");
};

const modalClose = () => {
  document.querySelector("#modals").classList.remove("show");
  document
    .querySelectorAll(`#modals article`)
    .forEach((element) => element.classList.remove("show"));
};

document.onload = window.onload = typewriter("#landing h1", 250);

document.querySelector("#scroll-down").onclick = scroll(true);
document.querySelector("#scroll-up").onclick = scroll(false);

document
  .querySelectorAll("[href*=modal]")
  .forEach(
    (element) => (element.onclick = modalOpen(element.getAttribute("href")))
  );

document
  .querySelectorAll("#modals .close")
  .forEach((element) => (element.onclick = modalClose));

window.onclick = (event) => {
  if (event.target == document.getElementById("modals")) modalClose();
};
