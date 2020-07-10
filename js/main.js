var btn_wu = document.querySelector(".button-write-us");
var mod_wu = document.querySelector(".modal.write-us");
var close  = mod_wu.querySelector(".modal-close");
var login  = mod_wu.querySelector("#name");
var email  = mod_wu.querySelector("#email");
var form   = mod_wu.querySelector("form");

btn_wu.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_wu.classList.add("modal-show");
    login.focus();
    
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_wu.classList.remove("modal-show");
});

form.addEventListener("submit", function () {
    
});

console.log(form);