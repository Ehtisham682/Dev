console.log("Program Start");

// let i = 0
// while(i <=100){
//     console.log(i);
//     i++
// }

const arr=['anas','ayan','asif','zaid','aman']
let i=0
while(i < arr.length){
    console.log(`${i+1}. ${arr[i]}`)
    arr[i]= arr[i]+' Procoddr'
    i++
}

console.log('Program End');