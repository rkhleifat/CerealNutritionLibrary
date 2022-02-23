# Library-Project---Rami
The series of functions assist people with finding specified cereals, or information about a specifc cereal. 
#
This function gets the image of the inputed cereal, and gives out the link for the image
###### @param cereal {string} - this is the name of the cereal
###### @return {string} - this returns the link of the image as a string
**'function getImage(cereal)'**
#
This function turns each serving of cereal into cups and then finds the cereal with least sugar per cup.
###### @return {list} - this returns a list of the least sugar cereals that meet the criteria
**function getLeastSugarCereal()'**
#
This function gets the highest protein per serving cereals from the protien column. 
###### @return {list} - this returns a list of the high protein cereals that meet the criteria
**'function getHighProteinCereal()'**
#
This function takes an input of "calories" and "amount". You can choose between (under or over) for the "amount" parametre. If over is inputed, it will find cereals with calories over the inputed calorie number, and vice versa. 
###### @param amount {string} - a string that decides if its over/under
###### @param calorie {number} - a number for the calorie amount you need
###### @return {list} - this list returns the final list of what meets the parameters. 
**function getCerealsByCalorie(amount, calorie)'**
#
This function takes different nutrient facts from cereals (including sugar, sodium, and fat) and finds the healthiest ones.
###### @return {list} - this returns a list of the healthy cereals that meet the criteria
**function getHealthiestCereals()'**
