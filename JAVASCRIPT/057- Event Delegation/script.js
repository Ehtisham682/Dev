const sayHi = document.querySelector("h1");
const container = document.querySelector(".container");
const addCardBtn = document.getElementById("addCardBtn");
const addedCard = document.querySelectorAll(".card");

let i = 1;

addCardBtn.addEventListener("click", (e) => {
	const newCard = document.createElement("div");
	newCard.classList.add("card");
	newCard.innerText = i;
	i += 1;
	// newCard.addEventListener("click", () => {
	// 	newCard.remove();
	// });
	container.append(newCard);
});

container.addEventListener('click',(e)=> {
	if (e.target!== container)
		e.target.remove()
})