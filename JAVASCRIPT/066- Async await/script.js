async function request(){
	const response = await fetch('https://httpbin.org/delay/3')
	const data = await response.json()
	return data
	// console.log(data)
}
request().then((data)=> console.log(data))

console.log('whatisgoing')
