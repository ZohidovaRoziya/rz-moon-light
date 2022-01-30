let stars_El = document.getElementById("stars");
let moon_El = document.getElementById("moon");
let mountain_El = document.getElementById("mountain");
let road_El = document.getElementById("road");
let siteHeading_El = document.getElementById("site-heading");



window.addEventListener("scroll", ()=>{
    var value = window.scrollY;


    stars_El.style.top = value * 0.5 + "px";
    moon_El.style.left = -value * 0.5 + "px";
    mountain_El.style.top = -value * 0.15 + "px";
    road_El.style.top = value * 0.15 + "px";    
    siteHeading_El.style.top = value * 1 + "px";
})