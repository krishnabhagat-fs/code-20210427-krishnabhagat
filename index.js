
let jsonFile = require('./data.js')
let bmi = require('./bmi_calc')
//let jsonData = JSON.parse(jsonFile);
//console.log(jsonFile);
let overweight = 0
jsonFile.forEach((value,index)=>
{
  let height = value.HeightCm/100
  let result = bmi(height,value.WeightKg)
  console.log(result) 
  if(result.bmi>25.0 &&  result.bmi<=29.9)
  overweight++;
  if(index==jsonFile.length-1)
  console.log("over weighted people from the given input  " +overweight);
})
//console.log(overweight);

