//some() check atleast one elements passed the condition and return true. Otherwise return false
const number = [0,2,4,6,7,8,10]

const oddCheck = number.some((num,i) => {
    if (num % 2 === 1)
        console.log("Index "+i +": "+num)
    return num % 2 === 1 ;
})
console.log(oddCheck) //returns true



//every() check if all elements passed the condition and return true.if even one element fails the condition, returns false.
const evenCheck2 = number.every((n,i) => {
    // debugger
    if (n % 2 === 1)
        console.log("Index "+ i +": "+n)
    return n % 2 === 0 ;
})
console.log(evenCheck2)