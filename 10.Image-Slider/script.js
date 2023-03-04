// let buttons = document.getElementsByClassName("btn");
let buttons = document.querySelectorAll(".btn");
let images = document.querySelectorAll(".img");

let flag = 0;

function controller(x){
    flag = flag + x;
    slideShow(flag);
};

function slideShow(num) {
    let slides = document.getElementsByClassName("img");

    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for(let y of slides){
        y.style.display = "none";
    }
    for(let x of buttons){
        x.classList.remove("active");
    }

    slides[num].style.display = "block";
    buttons[num].classList.add("active");
}



function dot(index){
    for (let y of images) {
      y.style.display = "none";
    }

    for (let x of buttons) {
      x.classList.remove("active");
    }

    images[index].style.display = "block";
    buttons[index].classList.add("active");
}