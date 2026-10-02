
const userName= prompt("Enter your name:") ||("Ehtisham");
const age= parseInt(prompt("Enter your age:")) || (24)

debugger

console.log(`Name- ${userName}`);
console.log(`Age- ${age}`);

if(age>=0 && age<=5){
    console.log(`${userName} is child`)
}


else if(age>=5 && age<=17){
    console.log(`${userName} is school ka bccha`)
}


else if(age>=18 && age<=25){
    console.log(`${userName} is college ka bccha`)
}



else if(age>=25 && age<=45){
    console.log(`${userName} is working professional`)
}

else if(age>45 && age<125){
    console.log(`${userName} is retired Man/Women`)
}


else{
    console.log(`${userName} is an Alien or Immortal`)
}