// first
let first = document.querySelector(".first");
let close = document.querySelector(".close");
console.log(first);
console.log(close);

window.onload = function () {
    first.classList.remove("hidden");
    first.style.top = "20%";
}

close.onclick = function () {
    first.classList.add("hidden");
}
// first


// conter
let countDownDate = new Date("oct 20, 2022 22:59:59").getTime();
console.log(countDownDate);

let counter = setInterval(function () {
    //get date now 
    let dateNow = new Date().getTime();

    //get  difference between countDownDate(date of event) and now date 
    let dateDiff = countDownDate - dateNow;

    // get time units
    //days
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    //hours
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // minutes
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    //seconds
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff <= 0) {
        clearInterval();
    }
}, 1000)
// conter


//slideshow
let myImage = document.getElementById("slideshow");
let images = ["images/landing/548360-pizza.jpg",
    "images/landing/715534.webp",
    "images/landing/PyUskj.webp",
    "images/landing/715490.webp",
    "images/landing/CurryLentilBurger.webp",
    "images/landing/4587540-food-burgers-french-fries.jpg",
    "images/landing/1229282-fried-beef-steak.jpg"];
// console.log(myImage);
// console.log(images);

let i = 0;

function slideshow() {
    myImage.setAttribute("src", images[i]);


    if (i === images.length - 1) {
        i = 0;
    } else {
        i++;
    }

    setTimeout(() => {

        slideshow();

    }, 2000);
}
slideshow();

//slideshow


//logo
let yum = document.getElementById("yum");
let icons = document.getElementsByClassName("icons")[0];
// console.log(yum);
// console.log(icons);

yum.onclick = function () {
    icons.classList.toggle("hide");
}
//logo



// breakfast
let main = document.getElementById("main");
let small = document.querySelectorAll(".small");
// console.log(main);
// console.log(small);


small.forEach(function (ele) {
    ele.onmouseenter = function () {
        main.src = ele.src
    }
    // console.log(ele);
})

// breakfast


// lunch
let lunch = document.getElementById("lunch");
let photos = [
    "images/lunch/csm_VH_veg_Schnitzel_1920x400_a1b8ffff75 (1).jpg",
    "images/lunch/cheesesteak_1920x600 (1).jpg",
    "images/lunch/frys_trad_burger_5214_final_2019.jpeg",
    "images/lunch/Gormet-Menu-large-.jpg",
    "images/lunch/h_rezept_wirsingschnitzel_bavaria_blu.jpg",
    "images/lunch/Chefs-Compliments-bbq-cooking-lesson-2.png",
    "images/lunch/BBQ-tips (1).jpg",
    "images/lunch/sausages-burgers-banner.jpg",
    "images/lunch/secondarybanner-recipespage-1920x600-1.jpg",
    "images/lunch/Menu.jpg",
];
// console.log(lunch);
// console.log(photos);



let l = 0;


function lunchPic() {
    lunch.setAttribute("src", photos[l]);


    if (l === photos.length - 1) {
        l = 0;
    } else {
        l++;
    }

    setTimeout(() => {

        lunchPic();

    }, 2000);
}
lunchPic();

// lunch


// up button 
let up = document.getElementById("up");
// console.log(up);

window.onscroll = function () {
    if (window.scrollY >= 270) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
}

up.onclick = function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
}
// up button