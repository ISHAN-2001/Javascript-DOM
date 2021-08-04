const btn = document.getElementById("btn");
const colour = document.getElementById("colour");
const array = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
const cont = document.querySelector('.container');
console.log(cont);
btn.addEventListener("click",function(){

    let value ='#'
    for(let i=0;i<6;i++){
        random = Math.floor(Math.random()*array.length);
        value += array[random];
    }
    console.log(value);
    // document.body.style.backgroundColor = value;
    cont.style.backgroundColor = value;
    colour.innerHTML = value
});