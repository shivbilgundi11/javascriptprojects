function calculate(){
    let weight = parseInt(document.getElementById("weight-range").value);
    let height = parseInt(document.getElementById("height-range").value);

    let result = document.getElementById("result");
    let category = document.getElementById("category");

    document.getElementById('kg').innerHTML = `${weight} kg`;
    document.getElementById('cm').innerHTML = `${height} cm`;

    let bmi = (weight / (Math.pow((height / 100), 2))).toFixed(1);

    result.innerHTML = bmi;


    if(bmi < 18.5){
        category.innerHTML = "Underweight";
        result.style.color = "#ffc44d";
    }else if(bmi >= 18.5 && bmi < 24.9){
        category.innerHTML = "Normal Weight";
        result.style.color = "#0be881";
    }else if(bmi >= 25 && bmi < 29.9){
        category.innerHTML = "Overweight";
        result.style.color = "#ff884d";
    }else{
        category.innerHTML = "Obese";
        result.style.color = "#ff5e57";
    }
};