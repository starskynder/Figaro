// Select navbar
const nav = document.querySelector("nav");

// Select navbar items
const navItems = document.querySelectorAll(".nav_item");

// Select hamburger icon of navbar
const trigger = document.getElementsByClassName("nav_item--trigger")[0];

// On page scroll change navbar background from transparent to color
window.onscroll = () => {

    if (this.scrollY >= 10) {
        nav.classList.add("js-nav--scroll");
    } else {
        nav.classList.remove('js-nav--scroll');
    }

};

// Set listener to navbar hamburger icon
trigger.addEventListener("click", showFullNav);
trigger.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        showFullNav();
    }
})

// When the hamburger icon is clicked full navigation will show up
function showFullNav() {

    for (let i = 1; i < navItems.length; i++) {
        navItems[i].classList.toggle("nav_item--visible");
    }
    nav.classList.toggle("js-nav--black");

}