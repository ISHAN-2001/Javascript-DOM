const btn = document.querySelector(".nav-toggle");
const links =document.querySelector(".links");

btn.addEventListener("click",function(){
    let a= links.classList;
    /*if(a.contains("hide")){
        a.remove("hide");
    }
    else{
        a.add("hide");
    } long method*/


    a.toggle("hide");
});