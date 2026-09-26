const h1 = document.querySelector("h1");	
const container = document.querySelector(".container");
const cardBtn = document.querySelector('.card')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1;

cardBtn.addEventListener("click", () => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	container.append(cardDiv);
	cardDiv.innerText = count;
	count += 1;
	console.log("Clicked")
});

// for (let i = 1; i<=1000; i++){
// 	cardBtn.click()
// }

// Click event SIMULATION
// const intervalId = setInterval(()=>{
//    if (count > 999){
// 	clearInterval(intervalId)
//    }
// 	cardBtn.click() 
// },5)

// focus SIMULATION
// setTimeout(() => {
// 	input.focus() 
// 	console.log('Focus Event triggered')
// }, 1000);

// blur SIMULATION
// setTimeout(() => {
// 	input.blur() 
// 	console.log('Blur Event triggered')
// }, 3000);

// submit SIMULATION
// setTimeout(() =>{
// 	form.submit()
// 	console.log("Submit Event triggered")
// },3000)

// reset SIMULATION
setTimeout(() =>{
	form.reset()
	console.log("Reset Event triggered")
},3000)