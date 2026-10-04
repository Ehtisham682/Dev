const img = document.querySelector("img");
const btn = document.querySelector("button");
const asyncBtn = document.querySelector('.asyncBtn')
btn.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
	xhr.responseType = "json";
	xhr.addEventListener("load", () => {
		img.src = xhr.response.message;
	});
	xhr.send();
});

asyncBtn.addEventListener('click',()=>{
	const date= Date.now()
	let currentDate = date
	while( date +2000 >currentDate){
		currentDate = Date.now()
		console.log(currentDate)
	}
})
