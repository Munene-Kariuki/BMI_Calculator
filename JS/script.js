function BMICalculator (weight,height) {

    var weight = document.getElementById("weight").value;
    var weight = parseInt(weight);
    var height = document.getElementById("weight").value;
    var height = parseFloat(height);

    var BMI = (weight / (height * height ));

    if (BMI < 18 ) {
        alert ("Your BMI is " + BMI + " you are underweight");
    }
    if (BMI >18 && BMI <= 25 ) {
         alert ("Your BMI is " + BMI + " you have normal weight");

    }
    if (BMI > 25) {
         alert ("Your BMI is " + BMI + " you are overweight");
    }
}
document.querySelector("button").addEventListener("click", BMICalculator)
