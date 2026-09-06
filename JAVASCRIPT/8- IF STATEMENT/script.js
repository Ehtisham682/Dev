// const name= prompt("What's your name: ");
// console.log("Name: ",name);
// const myPowerLevel= prompt("What's your Power Level: ");
// const yourPowerLevel= 3000;
// const power= 9000;


// if(myPowerLevel>yourPowerLevel && myPowerLevel>power) {
//     console.log("It's over 9000");
//     console.log('if condition is true so it ran')
// }

// else{
//     console.log('Weakling')
//     console.log("if state was false. this is the result of else statement")
// }   


const userName= prompt("Enter your name:") ||("Ehtisham");
const age= parseInt(prompt("Enter your age:")) || (24)

console.log(`Name- ${userName}`);
console.log(`Age- ${age}`);

if(age>=25 && age<=45){
    console.log(`${userName} is working professional`)
}
// it will only print this if the input is meeting both conditions

else{
    console.log(`${userName} is not working professional and ${gender} is ${age} years old`)
}