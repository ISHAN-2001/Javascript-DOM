btn = document.querySelector(".btn");
cross = document.querySelector(".fa-times");
overlay = document.querySelector(".overlay");

cross.addEventListener("click",function(){
    overlay.style.display = "none";
});

btn.addEventListener("click",function(){
    overlay.style.display= "flex";
});