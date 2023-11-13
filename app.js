let mobi_nav = document.querySelector("#mobile-navi");
let close_nav = document.querySelector(".close");
let harmburger = document.querySelector(".hamburger");

harmburger.addEventListener('click', ()=>{
    close_nav.style.display = "block";
    harmburger.style.display = "none";
    mobi_nav.style.display = "block";
})
