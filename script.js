let i1 = document.getElementsByClassName("i1")[0];
let i2 = document.getElementsByClassName("i2")[0];
let i3 = document.getElementsByClassName("i3")[0];
let i4 = document.getElementsByClassName("i4")[0];

let hidd1 = document.getElementsByClassName("hidd1")[0];
let hidd2 = document.getElementsByClassName("hidd2")[0];
let hidd3 = document.getElementsByClassName("hidd3")[0];
let hidd4 = document.getElementsByClassName("hidd4")[0];

i1.addEventListener("click", () =>{
    hidd1.style.display = "block";
})

i2.addEventListener("click", () =>{
    hidd2.style.display = "block";
})

i3.addEventListener("click", () =>{
    hidd3.style.display = "block";
})

i4.addEventListener("click", () =>{
    hidd4.style.display = "block";
})

