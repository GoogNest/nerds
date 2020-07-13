var btn_wu = document.querySelector(".button-write-us");
var mod_wu = document.querySelector(".modal.write-us");
var close  = mod_wu.querySelector(".modal-close");
var login  = mod_wu.querySelector("#name");
var email  = mod_wu.querySelector("#email");
var text   = mod_wu.querySelector("textarea");
var form   = mod_wu.querySelector("form");

var isStorageSupport = true;
var storage_login = "";
var storage_email = "";

try {
    storage_login = localStorage.getItem("login");
    storage_email = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

btn_wu.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_wu.classList.add("modal-show");
    
    if (storage_login && storage_email) {
        login.value = storage_login;
        email.value = storage_email;
        text.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    mod_wu.classList.remove("modal-show");
    mod_wu.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    
    if (!login.value || !email.value) {
        evt.preventDefault();
        mod_wu.classList.remove("modal-error");
        mod_wu.offsetWidth = mod_wu.offsetWidth;
        mod_wu.classList.add("modal-error");
        console.log("введите логин и емайл");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
        }
    }
});



window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mod_wu.classList.contains("modal-show")) {
            mod_wu.classList.remove("modal-show");
            mod_wu.classList.remove("modal-error");
            localStorage.clear();
        }
    }
});
