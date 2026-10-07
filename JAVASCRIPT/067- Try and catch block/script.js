// try{
// console.log(err)
// } catch(err){
//     console.log(err)
// } finally{
//     console.log('finally')
// }

async function request() {
	try {
		const url = "https://httpbin.org/delay/2"; // will catch error if error is thrown
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
request().then(console.log);
