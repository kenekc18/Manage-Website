let mobi_nav = document.querySelector("#mobile-navi");
let close_nav = document.querySelector(".close");
let harmburger = document.querySelector(".hamburger");
let main = document.querySelector("body");

harmburger.addEventListener('click', ()=>{
    close_nav.style.display = "block";
    harmburger.style.display = "none";
    mobi_nav.style.display = "block";
})

close_nav.addEventListener('click',()=>{
    mobi_nav.style.display = "none";
    close_nav.style.display = "none";
    harmburger.style.display = "block";

})
