// top 
// srtting
const hamburger = document.querySelector(".setting_hamburger");
const X = document.querySelector(".setting_X");
const setting_open = document.querySelector(".setting_open");


hamburger.addEventListener("click", function(){
    hamburger.style.display="none";
    X.style.display="block";
    setting_open.style.display="block";
});

X.addEventListener("click", function(){
    X.style.display="none";
    hamburger.style.display="block";
    setting_open.style.display="none";
});
