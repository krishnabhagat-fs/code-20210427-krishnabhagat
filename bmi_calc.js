//Bmi clculator application
module.exports = (height, weight) =>{

    let bmi = (weight/(height*height)).toFixed(2);//bmi formula with value having two decimal points
    let val; // Health details
    let risk; // storing the type of risk you having

    if(bmi<=18.4)
    {
    val = "Under Weight";
    risk = "Malnutrition risk";
    }
    else if (bmi>=18.5 && bmi<=24.9)
    {
    val = "Normal Weight";
    risk = "Low risk"
    }

    else if (bmi>25.0 &&  bmi<=29.9)
    {
        val = "over Weight";
        risk = "Enhanced risk"
    }
    else if (bmi>30.0 &&  bmi<=34.9)
    {
     val = "Moderately obese";
     risk = "Medium risk"
    }
    else if (bmi>35.0 &&  bmi<=39.9)
    {
     val = " Severely obese";
     risk = "High risk"
    }
    else if(bmi>=40.0)
    {
        val = "Very severely obese";
        risk = "Very high risk"
    }


    return {
        bmi: bmi,
        index: val,
        risk: risk,
    }

};
