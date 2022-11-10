let start = document.getElementById("start");
let loader = document.getElementById("loader");
let pages = document.getElementById("pages");
start.addEventListener('click', ()=>{
    loader.style.display = "none";
    pages.style.display = "block";
})