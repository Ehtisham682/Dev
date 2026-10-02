const ar1 = [1,2,3,4,5]
const ar2 = [6,7,8,9,10]
const addedAr=[...ar1,...ar2] //spread operator

// const ob1= {name:'Ehti',age:1}
// const ob2= {place:'earth',rank:'noob'}
// const addedOb = {...ob1,...ob2} //spread operator

function add(){
	let sum = 0
	for ( let i = 0; i < arguments.length; i++){
		// debugger
		sum = sum + arguments[i]
	}
	return sum
}

console.log(add(...addedAr))