const btn = document.getElementById('btn');
const colour = document.getElementById('colour');
const array = ['red', 'blue' ,'yellow', 'green', 'orange','violet' , 'white','aqua','brown','gold','grey'];

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()*(array.length));
    document.body.style.backgroundColor = array[random];
    colour.innerHTML= array[random];
    console.log(random);
});