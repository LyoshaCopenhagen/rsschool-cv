window.addEventListener("DOMContentLoaded", () => {
  // BURGER
  const burger = document.querySelector(".menu__burger");
  const menuLinks = document.querySelectorAll(".menu_link");
  const logo = document.querySelector(".header_logo");
  const menu = document.querySelector(".menu");

  function menuOpen() {
    burger.classList.add("active");
    menu.classList.add("active");
  }
  function menuClose() {
    burger.classList.remove("active");
    menu.classList.remove("active");
  }

  burger.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("active")) {
      menuClose();
    } else {
      menuOpen();
    }
  });
  logo.addEventListener("click", () => {
    menuClose();
  });
  menuLinks.forEach((link) =>
    link.addEventListener("click", () => {
      menuClose();
    })
  );
});
