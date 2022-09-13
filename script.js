const menu = document.getElementById("menuicn");
const search = document.getElementById("searchicn");
const hideMenu = document.getElementById("hide");
const headerNav = document.getElementById("headerNav");

function showNav() {
  // menu.style.backgroundColor = "red";
  menu.style.display = "none";
  hideMenu.style.display = "block";
  headerNav.style.display = "block"
}

function hideNav() {
  hideMenu.style.display = "none";
  menu.style.display = "block";
  headerNav.style.display = "none"
}
