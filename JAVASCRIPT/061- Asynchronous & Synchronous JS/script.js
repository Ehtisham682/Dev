const img = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
	xhr.responseType = "json";
	xhr.addEventListener("load", () => {
		img.src = xhr.response.message;
	});
	xhr.send();

	// onload updates the data as it it fetched after calling
	// xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
	// xhr.responseType = "json";
	// xhr.send();
	// xhr.onload = () => {
	// 	img.src = xhr.response.message;
	// };
	
});
