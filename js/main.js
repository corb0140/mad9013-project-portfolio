let toTopBtn = document.getElementById("to-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 280) {
    toTopBtn.style.visibility = "visible";
  } else {
    toTopBtn.style.visibility = "hidden";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let activeItem = document.querySelectorAll(".footer__item");

activeItem.forEach((item) => {
  item.addEventListener("mouseenter", (ev) => {
    if (!ev.target.classList.contains("active")) {
      ev.target.style.scale = "1.10";
      ev.target.style.color = "#ffc857";
    }
  });

  item.addEventListener("mouseout", (ev) => {
    if (!ev.target.classList.contains("active")) {
      ev.target.style.scale = "1";
      ev.target.style.color = "#fafafa";
    }
  });
});
