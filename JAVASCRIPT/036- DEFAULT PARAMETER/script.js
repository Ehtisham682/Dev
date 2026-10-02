function rollDice(numbersOfSides = 6) { //default parameter
	return Math.floor(Math.random() * numbersOfSides) + 1;
}

// function rollDice(numbersOfSides){
//     if (numbersOfSides == undefined){
//         numbersOfSides=6
//         return Math.floor(Math.random()*numbersOfSides)+1
//     }
// }
