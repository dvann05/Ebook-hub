/* ==========================================
   LOGIN EBOOKHUB
========================================== */

console.log("login.js berhasil dimuat");
const loginModal = document.getElementById("loginModal");
const nameInput = document.getElementById("nameInput");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");

const loginUserName = document.getElementById("userName");
const loginUserAvatar = document.getElementById("userAvatar");
const loginGreeting = document.getElementById("greeting");

/* ==========================================
   LOCAL STORAGE
========================================== */

const STORAGE_KEY = "ebookhub_username";

/* ==========================================
   GREETING
========================================== */

function getGreeting(){

    const hour = new Date().getHours();

    if(hour < 11){

        return "Selamat Pagi";

    }

    if(hour < 15){

        return "Selamat Siang";

    }

    if(hour < 18){

        return "Selamat Sore";

    }

    return "Selamat Malam";

}

/* ==========================================
   UPDATE USER
========================================== */

function updateUser(name){

    if(loginUserName){
        loginUserName.textContent = name;
    }

    if(loginUserAvatar){
        loginUserAvatar.textContent =
            name.charAt(0).toUpperCase();
    }

    if(loginGreeting){
        loginGreeting.textContent =
            getGreeting();
    }

}

/* ==========================================
   LOGIN
========================================== */

function login(){

    console.log("Login dipanggil");

    const name = nameInput.value.trim();

    loginError.textContent = "";

    if(name.length < 3){

        loginError.textContent =
            "Nama minimal 3 karakter.";

        nameInput.focus();

        return;

    }

    if(name.length > 30){

        loginError.textContent =
            "Nama maksimal 30 karakter.";

        nameInput.focus();

        return;

    }

    loginBtn.disabled = true;

    loginBtn.textContent = "Memuat...";

    localStorage.setItem(
        STORAGE_KEY,
        name
    );

    updateUser(name);

    setTimeout(() => {

        loginModal.style.display = "none";

        loginBtn.disabled = false;

        loginBtn.textContent = "Masuk";

    },400);

}

/* ==========================================
   CEK LOGIN
========================================== */

const savedName =
    localStorage.getItem(STORAGE_KEY);

if(savedName){

    updateUser(savedName);

    loginModal.style.display = "none";

}else{

    loginModal.style.display = "flex";

}

/* ==========================================
   EVENT
========================================== */

loginBtn.addEventListener(
    "click",
    login
);

nameInput.addEventListener(
    "keypress",
    function(e){

        if(e.key === "Enter"){

            login();

        }

    }
);
