let mobi_nav = document.querySelector("#mobi-nav");
let close_nav = document.querySelector(".close");
let harmburger = document.querySelector(".harmburger");

harmburger.addEventListener('click', ()=>{
    close_nav.style.display = "block";
    harmburger.style.display = "none";
    mobi_nav.style.display = "block";
})
