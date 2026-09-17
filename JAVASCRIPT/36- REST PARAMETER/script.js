// function add(...rest){
// 	console.log(rest)
// }

// add(1,2,3,4,5)

// function add(a,b,c,...rst){
// 	console.log(a)
// 	console.log(b)
// 	console.log(c)
// 	console.log(rst)
// }
// add(1,2,3,4,5,6,7,8,9,10)



// function add(...rst) {
// 	return rst.reduce((acc,current) => acc + current)
// }

function add(...rst) {
	return [...arguments].reduce((acc,current) => acc + current)
}

function add(...rst) {
	return Array.from(arguments).reduce((acc,current) => acc + current)
}


console.log(add(1,2,4,5))