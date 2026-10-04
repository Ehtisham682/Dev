const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

// const promise = new Promise((resolve, reject) => {
// 	resolveBtn.addEventListener("click", () => {
// 		resolve("Promise Fulfilled");
// 	});
// 	rejectBtn.addEventListener("click", () => {
// 		reject("Promise Failed/Rejected");
// 	});
// });

const promise = new Promise((resolve, reject) => {
	resolveBtn.addEventListener("click", () => {
		resolve("Promise Fulfilled");
	});
	rejectBtn.addEventListener("click", () => {
		reject("Promise Failed/Rejected");
	});
});

promise
	.then((data) => {
		console.log(data);
        return data
	}).then((data)=>{
        console.log(data)
    })
	.catch((data) => {
		console.log(data);
	}).finally(()=>{
        console.log('Finally')
    });


const del= function delay(ms){
    const promise= new Promise((resolve,reject)=>{
        setTimeout(resolve("hello"),ms)
    })
    promise.then((data)=>{
        return data
    })
}

console.log(del(2))