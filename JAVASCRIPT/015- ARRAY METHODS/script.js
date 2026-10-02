const array= ['Bleach','Ichigo',1000]

console.log(array.push('year')) //adds element at the end of array

console.log(array.pop()) //removes element from the end

array.shift() // removes element from the start of the array
console.log(array) 

array.unshift('Blood War') //adds the element at the start of the array
console.log(array)


const ar1 = [1,2,3,4,5]
const ar2= [6,7,8,9,10]
const addedArray =console.log(ar1.concat(ar2)) //merges arrays and return it in new array.

const ind= [10,20,30,40,50,60,70,80]
console.log(ind.indexOf(50)) // returns are index of the element in array

const ulta= ['one','two','three','four']
// console.log(ulta.includes('three')) // checks whether element is present in array or not
console.log(ulta.reverse()) // reverses the array from end to start.
console.log(ulta.sort())

const kato =['kaioken','supa-saiyajin','sage','bankai','vasta-lord','hadonokyoju','excaliber','katon','masenko']
// console.log(kato.slice(2,7)) //return a copy of portion of array from start and end indexes(optional)

console.log(kato.splice(3,4,'Goku','Vegeta')) 
//changes array by removing,replacing and adding new element in place.
// (Output) ['kaioken', 'supa-saiyajin', 'sage', 'Goku', 'Vegeta', 'katon', 'masenko']