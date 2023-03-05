let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#seconds");


setInterval(() => {
    let currentDate = new Date();

    let hr = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;
    

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    second.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);