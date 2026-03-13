/* DARK MODE */

const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
darkBtn.textContent="🔅";
}else{
darkBtn.textContent="🌙";
}

});


/* STICKY NAVBAR */

window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.classList.add("sticky");
}else{
navbar.classList.remove("sticky");
}

});


/* SMOOTH SCROLL */

document.querySelectorAll(".navbar__links a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});


/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText="0";

const updateCounter = ()=>{

const target = +counter.getAttribute("data-target");

const c = +counter.innerText;

const increment = target / 100;

if(c < target){

counter.innerText = `${Math.ceil(c + increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});


/* FORM VALIDATION */

const form = document.getElementById("contactForm");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const pesan = document.getElementById("pesan");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

if(nama.value === "" || email.value === "" || pesan.value === ""){

formMessage.style.color="red";
formMessage.textContent="Harap isi semua field!";

}else{

formMessage.style.color="lightgreen";
formMessage.textContent="Pesan berhasil dikirim!";

}

});
// tambahan 
/* ================================
STICKY NAVBAR SCROLL
================================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});
/* ================================
SMOOTH SCROLL NAVIGATION
================================ */

const navLinks = document.querySelectorAll(".navbar__links a");

navLinks.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const targetId = this.getAttribute("href");

const targetSection = document.querySelector(targetId);

targetSection.scrollIntoView({
behavior:"smooth"
});

});

});
/* ================================
SCROLL REVEAL
================================ */

window.addEventListener("scroll", reveal);

function reveal(){

const reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight;

const revealTop = reveals[i].getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

reveals[i].classList.add("active");

}

}

}