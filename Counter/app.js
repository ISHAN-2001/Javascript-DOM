const counter = document.getElementById('counter');
const btns = document.querySelectorAll('.btn');
let value = 0;
btns.forEach(function(btn,index){
    btn.addEventListener("click",function(e){
        style = e.currentTarget.classList;
        if(style.contains("decrease")){
            value--;
        }
        else if(style.contains("increase")){
            value++;
        }
        else{
            value =0 ;
        }
        counter.textContent =value;
        if(value ==0 ){
            counter.style.color ='black';
        }
        else if(value >0){
            counter.style.color = 'green';
        }
        else{
            counter.style.color = 'red';
        }
    });
});
