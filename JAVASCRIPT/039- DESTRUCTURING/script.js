const arr = ["one", "two", "teen", "chaar"];
// const [first] = arr // destructure value based on index of array and var.
const [, , third] = arr; //it will leave 2 indexes and take 3rd value
// console.log(third);

const { 2: thirdValue } = arr;
// console.log(thirdValue); // we can use index:variableName to get the desired value in new variable from middle of array without giving previous indexes



const obj = {
	name: "Ehtisham",
	age: 20,
	location: { address: "New mumbai", city: "Thane" },
};
const {name,age} = obj
// console.log(name,age)
const {location:{address}} =obj //destructing with nested objects properties
// console.log(address)

 //*******************destructuring array in function**************************
function count([a,b,c]){
	// console.log(a,b)
	console.log([a,c])
}
count(arr)

function count2({3:forth}){
	console.log(forth)
}
count2(arr)


 //*******************destructuring Objects properties in function**************************
function info({name,location}){
	console.log(name)
	console.log(location)
}
info(obj)

function info2({name,location:{city}}){ //nested object properties destructuring
	console.log(city)
}
info2(obj)