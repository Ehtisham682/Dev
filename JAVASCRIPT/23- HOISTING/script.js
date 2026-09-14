console.log(username); // will output undefined as its declared before initializing

var username = "Ehtisham";

// console.log(name);
// const name = "meeeem"; //const,let and class can't be accessed before initialization as they in temporal dead zone until initialized.

my() //function is hoisted as its value is already stored in memory creation phase.

//Function Declaration
function my(){ 
    console.log("Hello")
}

 //Function Expression
const me = function(){     //Anonymous function
    console.log('hiii')
}
me()