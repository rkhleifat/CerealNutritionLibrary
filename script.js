const url = "https://raw.githubusercontent.com/rkhleifat/Library-Project---Rami/main/Cereal%20Nutrition.csv";

function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }



const cerealImage = getColumn(url,10);
const cerealName = getColumn(url,1); 
const cerealServing = getColumn(url,9);
const cerealSugar = getColumn(url,8);
const cerealProtein = getColumn(url,3);
const cerealCalorie = getColumn(url,2);
const cerealSodium = getColumn(url,5);
const cerealFat = getColumn(url,4);


//this parameter gets the image of the inputed cereal, and gives out the link
//cereal {string} - this is the name of the cereal
//return {string} - this returns the link of the image as a string
function getImage(cereal){
  var theImage = "Not found, try a different search.";
  for(var i in cerealImage){
    if(cereal.toLowerCase() == cerealName[i].toLowerCase()){
      theImage = cerealImage[i];
    }
  }
  return theImage;
}


//This function turns each serving of cereal into cups and then finds the cereal with least sugar per cup.
//return {list} - this returns a list of the least sugar cereals that meet the criteria
function getLeastSugarCereal(){
  var leastSugarCereal = "";
  var allLeastSugar = [];
  var leastSugar = 100;
  
  for(var i in cerealName){
     var sugarPerCup = (cerealSugar[i]/cerealServing[i]);
    if(sugarPerCup < leastSugar){
      leastSugar = sugarPerCup;
      leastSugarCereal = cerealName[i];
    }
  }
  for(var i in cerealName){
    var sugarPerCup = (cerealSugar[i]/cerealServing[i]);
    if(sugarPerCup == leastSugar){
      allLeastSugar.push(cerealName[i]);
    }
  }
  return allLeastSugar;
}


//This function gets the highest protein per serving cereals from the protien column. 
//return {list} - this returns a list of the high protein cereals that meet the criteria
function getHighProteinCereal(){
  var highProteinCereals = [];
  for(var i in cerealName){
    if(Number(cerealProtein[i]) >= 4){
      highProteinCereals.push(cerealName[i]);
    }
  }
  return highProteinCereals;
}


//This function takes an input of calories and amount. You can choose between under or over for the amount parametre. If this is over, it will find cereals with calories over this number, and vice versa. 
// amount {string} - a string that decides if its over/under
// calorie {number} - a number for the calorie amount you need
// return {list} - this list returns the final list of what meets the parameters. 
function getCerealsByCalorie(amount, calorie){
  var finalList = [];
  for(var i in cerealName){
    if(amount.toLowerCase() == "over" && cerealCalorie[i] >= calorie){
      finalList.push(cerealName[i]);
      
    }
    if(amount.toLowerCase() == "under" && cerealCalorie[i] <= calorie){
      finalList.push(cerealName[i]);
      
    }
    else{
      return "Try a differen input. Current input not found."
    }
  }
  return finalList;
}
console.log(getCerealsByCalorie("under", 100));


//This function takes different nutrient facts from cereals (including sugar, sodium, and fat) and finds the healthiest ones.
//return {list} - this returns a list of the healthy cereals that meet the criteria
function getHealthiestCereals(){
  var healthiestCereals = [];
  for(var i in cerealName){
    if(Number(cerealSodium[i]) < 130 && Number(cerealSugar[i]) < 6 && Number(cerealFat[i]) <= 1){
      healthiestCereals.push(cerealName[i]);
    }
  }
  return healthiestCereals;
}
