const array =[
    {
        id :1,
        author :"Mr Sherlock",
        job : "The Detective",
        desc : "Yes, I live in Baker Street. You can contact me if anything's lost" 
    },
    {
        id : 2,
        author : "Dr. Watson",
        job : "His's Assistance",
        desc : "Sherlock is kidding. We solve only serious crimes."  
    },
    {
        id : 3,
        author : "Mr 300iq",
        job : "System Designer",
        desc : "Has 300iq to solve any kind of complex problems"  
    },
    {
        id : 4,
        author : "Mr Baker",
        job : "Baker",
        desc : "Cakes, Pastries, Chocolates, Sandwiches, best in the town!"  
    },
    {
        id : 5,
        author : "Lipun Raja",
        job : "Boss",
        desc : "Boss of all. I'll hire and fire at my own will. Best of all."  
    }
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const desc = document.getElementById("desc");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const random = document.querySelector(".btn");

let current =0

left.addEventListener("click",function(){
    current--;
    if(current<0){
        current= array.length-1;
    }
    showContent();
});

right.addEventListener("click",function(){
    current++;
    if(current==array.length){
        current =0;
    }
    showContent();
});

random.addEventListener("click",function(){
    current =Math.floor(Math.random()*array.length);
    console.log(current);
    showContent();
});

function showContent(){
    item = array[current];
    author.textContent = item.author;
    job.textContent = item.job;
    desc.textContent = item.desc;
}

window.addEventListener("DOMContentLoaded",function(){
    showContent();
})


// for automatic change of slide...
// setInterval(function () {
//     showContent();
//     current++;
//     if(current==array.length){
//         current =0;
//     }
// }, 3000);