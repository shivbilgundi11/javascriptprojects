let slider = document.getElementById("slider");
let passLength = document.getElementById("pass-length");
let output = document.getElementById("output");
let genPass = document.getElementById("btn");
let options = document.querySelectorAll(".option input");
let copyIcon = document.getElementById("copy-icon");
let passStrength = document.querySelector(".pass-strength");

//selecting all checkboxes
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

let sliderValue;

slider.addEventListener("input", () => {
  sliderValue = slider.value;
  passLength.innerHTML = sliderValue;
  randomPass();
});

function randomPass() {
  let characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&*#@",
  };

  let staticPassword = "";
  options.forEach((option) => {
    if (option.checked) {
      staticPassword += characters[option.id];
    }
  });

  if(sliderValue <= 7 && uppercase.checked && numbers.checked && symbols.checked){
    passStrength.id = "medium";
  }else if(sliderValue >= 8 && uppercase.checked && numbers.checked && symbols.checked){
    passStrength.id = "strong";
  }else if(sliderValue >= 7 && !uppercase.checked && !numbers.checked && !symbols.checked){
    passStrength.id = "weak";
  }else if(sliderValue >= 8 && !uppercase.checked && numbers.checked && symbols.checked){
    passStrength.id = "intermediate";
  }else if(sliderValue >= 8 && uppercase.checked && !numbers.checked && symbols.checked){
    passStrength.id = "intermediate";
  }else if(sliderValue >= 8 && uppercase.checked && numbers.checked && !symbols.checked){
    passStrength.id = "intermediate";
  }else if(sliderValue >= 7 || uppercase.checked || numbers.checked || symbols.checked){
    passStrength.id = "medium";
  }else if(sliderValue <= 7){
    passStrength.id = "weak";
  }

  let password = "";
  for (let i = 0; i < slider.value; i++) {
    password +=
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
  }
  output.setAttribute("value", password);
}

genPass.addEventListener("click", randomPass);

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  copyIcon.classList.replace("uil-copy", "uil-check");

  setTimeout(() => {
    copyIcon.classList.replace("uil-check", "uil-copy");
  }, 1500);
});
