burger = document.querySelector(".burger");
navBar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".right-nav");

burger.addEventListener("click", function(){
    navBar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
})