let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let rootStyle = rootStyles.getPropertyValue('--color');

console.log(rootStyle);




function changeBgBlue(){
    root.style.setProperty('--color', '#362FD9');
};
function changeBgRed(){
    root.style.setProperty('--color', '#FF0032');
};
function changeBgGreen(){
    root.style.setProperty('--color', '#54B435');
};
function changeBgPurple(){
    root.style.setProperty('--color', '#6F38C5');
};
function changeBgYellow(){
    root.style.setProperty('--color', '#FFB200');
};
