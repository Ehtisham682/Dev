debugger
// console.log(intro);
var my='ehtisham'
let me = 'Ehtisham'
// we can change the value of a variable by reassigning it to a new value

// we can add strings together using the + operator to variable to add more value to it
let intro= 'My name is ' + me

let fav='my favourite animes are DBZ and Bleach'

// we can add variable just as we can add strings together
intro + fav 

const bday= '28-02-2002'
// bday = 007  // This would cause an error since bday is a constant and its value can't be changed

const myage= 22
// myage=24  // This would cause an error since myage is a constant and its value can't be changed

{
    let x=6
}
{
    var y=7
}

// let sum= x + y // This would cause an error since x is not defined outside the block it was declared in, but y is accessible since it was declared with var
// let ad =x
// ad variable will give error because let keyword can only be accessed within the block it was declared in, but var can be accessed outside the block it was declared in
let sm=y
// sm variable will not give error because var keyword can be accessed outside the block it was declared in, but let can only be accessed within the block it was declared in