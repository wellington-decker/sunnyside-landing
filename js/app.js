const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const exitNav = document.querySelector(".close");

const mobileHandler = () => {
  mobileNav.classList.add("show");
};

const exitHandler = () => {
  mobileNav.classList.remove("show");
};

burgerBtn.addEventListener("click", mobileHandler);
exitNav.addEventListener("click", exitHandler);
