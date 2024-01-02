// Toggle Class Active for humberger menu
const navbarNav = document.querySelector(".navbar-nav");
// Hamburger Menu Click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click out of sidebar for remove the element
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const cartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cartButton.contains(e.target) && !scb.contains(e.target)) {
    scb.classList.remove("active");
  }
});

// Toggle Class Active for search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle Shopping-cart
const scb = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  scb.classList.toggle("active");
  e.preventDefault();
};

// Model Box
const itemDetailmodel = document.querySelector("#item-detail-model");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailmodel.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtons.onclick = (e) => {
  itemDetailmodel.style.display = "flex";
  e.preventDefault();
};

// close click
document.querySelector(".model .close-icon").onclick = (e) => {
  itemDetailmodel.style.display = "none";
  e.preventDefault();
};

// klik anywhere close (model)
window.onclick = (e) => {
  if (e.target === itemDetailmodel) {
    itemDetailmodel.style.display = "none";
  }
};
