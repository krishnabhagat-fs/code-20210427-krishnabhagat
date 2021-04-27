
let jsonFile = require('./data.js')//importing the smaple data
let bmi = require('./bmi_calc')// importing the calculator function
//let jsonData = JSON.parse(jsonFile);
//console.log(jsonFile);
let overweight = 0 // Overweight count variable intialization
jsonFile.forEach((value,index)=>  //iterating over json array
{
  let height = value.HeightCm/100 // unit conversion of height
  let result = bmi(height,value.WeightKg) // calling the bmi function with parameters height and weight
  console.log(result) 
  if(result.bmi>25.0 &&  result.bmi<=29.9) // calculating the no of overweights in the list
  overweight++;                           
  if(index==jsonFile.length-1) // if it reaches to the last value of array print overweight count
  console.log("over weighted people from the given input  " +overweight);
})
//console.log(overweight);

