const powerLevel= 9000
const enemylevel= 1900
const myPowerLevel= 5000

console.log(myPowerLevel>powerLevel && enemylevel<powerLevel)
// if one condition is false it will result in false because of the && operator.

console.log(myPowerLevel<enemylevel || enemylevel<powerLevel)
// in this case, one condition is true so it will result in true because of the || operator.

// ! changes value from truthy to falsy and falsy to truthy
console.log(!powerLevel && myPowerLevel)
console.log(powerLevel && !myPowerLevel)

console.log(!powerLevel || myPowerLevel)
// it will print mypowerLevel because the first condition is false and the second condition is true.

console.log(1 && 2)
console.log(0 && 1) // 0 because 0 is falsy
