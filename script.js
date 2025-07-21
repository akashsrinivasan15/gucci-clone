const text = document.querySelector(".com-name");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        text.classList.add("shrink");
        navbar.classList.add("show");
    }
    else {
        text.classList.remove("shrink");
        navbar.classList.remove("show");
    }
})