`use strict`;
const menuBntOpen = document.querySelector(`.open`);
const menuBntClose = document.querySelector(`.close`);
const socialBOX = document.querySelector(`.social-box__js`);

menuBntOpen.addEventListener(`click`, function () {
  menuBntOpen.style.display = `none`;
  menuBntClose.style.display = `block`;
  socialBOX.classList.add(`mob-nav`);
});

menuBntClose.addEventListener(`click`, function () {
  menuBntOpen.style.display = `block`;
  menuBntClose.style.display = `none`;
  socialBOX.classList.remove(`mob-nav`);
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth >= 500) {
    menuBntOpen.style.display = `none`;
    menuBntClose.style.display = `none`;
    socialBOX.classList.remove(`mob-nav`);
  }
  if (this.window.innerWidth <= 500) {
    menuBntOpen.style.display = `block`;
  }
});
