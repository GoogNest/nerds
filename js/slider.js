var slide1 = document.querySelector(".advantage-item-slide1");
var slide2 = document.querySelector(".advantage-item-slide2");
var slide3 = document.querySelector(".advantage-item-slide3");

var sliderBtn1 = document.querySelector(".slider-button.button1");
var sliderBtn2 = document.querySelector(".slider-button.button2");
var sliderBtn3 = document.querySelector(".slider-button.button3");


sliderBtn1.addEventListener("click", function (evt) {
    
    slide1.classList.add("slide-show");
    slide2.classList.remove("slide-show");
    slide3.classList.remove("slide-show");
});

sliderBtn2.addEventListener("click", function (evt) {
    
    slide2.classList.add("slide-show");
    slide1.classList.remove("slide-show");
    slide3.classList.remove("slide-show");
});

sliderBtn3.addEventListener("click", function (evt) {
    
    slide3.classList.add("slide-show");
    slide2.classList.remove("slide-show");
    slide1.classList.remove("slide-show");
});