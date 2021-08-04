const menu = document.querySelector(".fa-bars");
const section = document.querySelector(".section");
const cross =document.querySelector(".fa-times");
menu.addEventListener("click",function(){

    menu.classList.toggle("fa-rotate-90");
    section.classList.toggle("show-section");
});

cross.addEventListener("click",function(){
    menu.classList.toggle("fa-rotate-90");
    section.classList.toggle("show-section");
})