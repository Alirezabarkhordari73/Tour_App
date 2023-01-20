const navbar = document.querySelector(".Header-Container .Navbar");
const searchForm = document.querySelector(".Search-Form");

document.querySelector("#Menu-Btn").onclick = () => {
  navbar.classList.add("active");
};
document.querySelector("#Nav-Close").onclick = () => {
  navbar.classList.remove("active");
};
document.querySelector("#Search-btn").onclick = () => {
  searchForm.classList.add("active");
};
document.querySelector("#Close-Search").onclick = () => {
  searchForm.classList.remove("active");
};
