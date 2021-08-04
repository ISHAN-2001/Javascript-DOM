
// METHOD-1
//const btns = document.querySelector(".fa-plus-square");
// btns.forEach(function(btn){
    
//     btn.addEventListener("click",function(e){
//         article= e.currentTarget.parentElement.parentElement;

//         const answer = article.querySelector(".answer");

//         answer.classList.toggle("show");

//     });
// });


// METHOD-2
const articles = document.querySelectorAll(".article");

articles.forEach(function(article){
    
    const btn = article.querySelector(".fa-plus-square");

   btn.addEventListener("click",function(){
    const answer = article.querySelector(".answer");
    answer.classList.toggle("show");
    btn.classList.toggle("fa-rotate-90");


    // if answer is not current answer then remove show class (closes the answer)
    const allanswers =document.querySelectorAll(".answer");
    allanswers.forEach(function(item){
        if(item!=answer){
            item.classList.remove("show");
        }
    });
   });

});
