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

// Select all images-slider boxes
const sliderBox = document.getElementsByClassName("slider_box");

// Select images-slider arrows
const rightArrow = document.querySelector(".slider_arrow--right");
const leftArrow = document.querySelector(".slider_arrow--left");

// Add event listeners to image-slider arrows
rightArrow.addEventListener("click", () => {
    plusSlide(1);
});

leftArrow.addEventListener("click", () => {
    plusSlide(-1);
});

// Set initial index for image-slider
let sliderIndex = 1;

// Increment or decrement slideIndex
function plusSlide(n) {
    slideImage(sliderIndex += n);
}


// Image Slider
function slideImage(n) {

    if (n > sliderBox.length) {
        sliderIndex = 1;
    }
    if (n < 1) {
        sliderIndex = sliderBox.length;
    }
    for (let i = 0; i < sliderBox.length; i++) {
        sliderBox[i].style.display = "none";
    }

    sliderBox[sliderIndex - 1].style.display = "flex";


}