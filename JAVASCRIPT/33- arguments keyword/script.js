// const arg = function () {
// 	let sum = 0;
// 	for (i = 0; i < arguments.length; i++) {
// 		console.log(arguments[i]);
// 		sum += arguments[i];
// 	}
//     return sum
// };
// console.log(arg(1,2,3,4,5,6,7,8))

const array = [];
const arg = function(){
    for( i=0 ;i< arguments.length;i++){
        console.log(arguments[i])
        array.push(arguments[i])
    }
    // return array
}

console.log(arg(10,20,30,40))
console.log(array)
