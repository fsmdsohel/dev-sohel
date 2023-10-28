const links = document.querySelectorAll(".alternate-style"),
  totalLinks = links.length;

function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}
// Body Skin
const bodySkin = document.querySelectorAll(".body-skin"),
  totalbodySkin = bodySkin.length,
  styleSwitcher = document.querySelector(".style-switcher");

for (let i = 0; i < totalbodySkin; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value == "dark") {
      document.body.className = "dark";
    } else {
      document.body.className = " ";
    }
  });
}
document
  .querySelector(".toggler-style-switcher")
  .addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
  });
