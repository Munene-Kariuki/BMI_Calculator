function BMICalculator (weight,height) {

    var weight = document.getElementById("weight").value;
    var weight = parseInt(weight);
    var height = document.getElementById("height").value;
    var height = parseFloat(height);

    var BMI = Math.floor (weight / (height * height ));

    if (BMI < 18 ) {
        console.log(document.getElementById("jsAlert"). value = BMI + " you are underweight");
    }
    else if (BMI >18 && BMI <= 25 ) {
        console.log(document.getElementById("jsAlert"). value = BMI + " you have normal weight");

    }
    else  {
        console.log(document.getElementById("jsAlert"). value = BMI + " you are overweight");
    }
}
document.querySelector("button").addEventListener("click", BMICalculator)
