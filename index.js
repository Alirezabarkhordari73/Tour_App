const navbar = document.querySelector(".Header-Container .Navbar");

document.querySelector("#Menu-Btn").onclick = () => {
  navbar.classList.add("active");
};
document.querySelector("#Nav-Close").onclick = () => {
  navbar.classList.remove("active");
};
