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
    time_format_child.style.display="none";
    time_update_child.style.display="none";
    movement_child.style.display="none";
    
});


// setting_open -> time_format
const time_format = document.querySelector(".time_format");
const time_format_child = document.querySelector(".time_format_child");

time_format.addEventListener("click", function(){
    time_format_child.style.display="block";
    setting_open.style.display="none";
});

// mode_setting -> time_format_child
const time_format_OT = document.querySelector(".time_format_OT");
const time_format_TF = document.querySelector(".time_format_TF");
const ok1 = document.querySelector(".ok1");

time_format_OT.addEventListener("click", function(){
    time_format_OT.style.color="white";
    time_format_OT.style.backgroundColor="black";
    
    time_format_TF.style.color="black";
    time_format_TF.style.backgroundColor="white";
});

time_format_TF.addEventListener("click", function(){
    time_format_OT.style.color="black";
    time_format_OT.style.backgroundColor="white";
    
    time_format_TF.style.color="white";
    time_format_TF.style.backgroundColor="black";
});

ok1.addEventListener("click", function(){
    time_format_child.style.display="none";
    X.style.display="none";
    hamburger.style.display="block";
});


// setting_open -> time_update
const time_update = document.querySelector(".time_update");
const time_update_child = document.querySelector(".time_update_child");

time_update.addEventListener("click", function(){
    time_update_child.style.display="block";
    setting_open.style.display="none";
});

// mode_setting -> time_update_child

const ok2 = document.querySelector(".ok2");


ok2.addEventListener("click", function(){
    time_update_child.style.display="none";
    X.style.display="none";
    hamburger.style.display="block";
});



function enter(e){
    if(e.keyCode == 13){
        alert("입력함");
    }
}

function region(e){
    if(e.keyCode == 13){
        alert("dd");
    }
}










// setting_open -> movement
const movement = document.querySelector(".movement");
const movement_child = document.querySelector(".movement_child");

movement.addEventListener("click", function(){
    movement_child.style.display="block";
    setting_open.style.display="none";
});

// mode_setting -> movement_child
const movement_on = document.querySelector(".movement_on");
const movement_off = document.querySelector(".movement_off");
const ok3 = document.querySelector(".ok3");

movement_on.addEventListener("click", function(){
    movement_on.style.color="white";
    movement_on.style.backgroundColor="black";
    
    movement_off.style.color="black";
    movement_off.style.backgroundColor="white";
});

movement_off.addEventListener("click", function(){
    movement_on.style.color="black";
    movement_on.style.backgroundColor="white";
    
    movement_off.style.color="white";
    movement_off.style.backgroundColor="black";
});

ok3.addEventListener("click", function(){
    movement_child.style.display="none";
    X.style.display="none";
    hamburger.style.display="block";
});



// 데이터 가져오기
const API_KEY = "a301c150ca64fe4099067ec1e348d72a";

fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric&lang=kr`
)
.then(response => response.json())
.then(data => {
    console.log(data);
});













