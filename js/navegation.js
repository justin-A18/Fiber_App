document.querySelector(".bars__menu").addEventListener("click", animateBars);

let liner1__bars = document.querySelector(".line1__bars-menu");
let liner2__bars = document.querySelector(".line2__bars-menu");
let liner3__bars = document.querySelector(".line3__bars-menu");

// funcion menu-burger
function animateBars(){
    
    // llamamos a las clases que tenemos creadas en el css.

    liner1__bars.classList.toggle("activeline1__bars-menu");
    liner2__bars.classList.toggle("activeline2__bars-menu");
    liner3__bars.classList.toggle("activeline3__bars-menu");
}   

document.getElementById("burger").addEventListener("click",mostrar);

let aparecer = document.getElementById("content");

function mostrar() { 
    
    aparecer.classList.toggle("content__burger-visibility");

}