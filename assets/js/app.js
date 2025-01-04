// honor card background color

const honorCards = document.querySelectorAll(".honors-card");
const iconContainer = document.querySelectorAll(".fa-chevron-left");
const moblieNav = document.querySelector(".moblie-nav");
const headerNav = document.querySelector(".header-nav");
const ctrlBtn = document.querySelector(".ctrl-btn");
const body = document.body;
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

for (var i = 0;i < honorCards.length;i++) {
  honorCards[i].classList.add(`card-${Number(i) + 1}`);
  iconContainer[i].classList.add(`card-${Number(i) + 1}`);
}

if (innerWidth <= 768) {
    moblieNav.style.display = "";
    headerNav.style.display = "none";
} else {
    moblieNav.style.display = "none";
    headerNav.style.display = "";
}

ctrlBtn.addEventListener("click", () => {
    body.classList.toggle("layer-body", "hidden-scroll");
    sideBar.classList.toggle("show");
    document.documentElement.classList.toggle("hidden-scroll");
});
closeBtn.addEventListener("click", () => {
    body.classList.remove("layer-body", "hidden-scroll");
    sideBar.classList.toggle("show");
    document.documentElement.classList.toggle("hidden-scroll");
});
