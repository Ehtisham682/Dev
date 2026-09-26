"strict mode";

function greet() {
	console.log("Hello, there");
}

function clicked() {
	console.log("Clicked");
}

const sayHi = document.querySelector("h1");
sayHi.onclick = greet; //2nd method: event listener with existing function call
// we can only add one event listener with above method.

function doubleClicked() {
	console.log("Double Clicked");
}

//addEventListener method

// const cardContainer = document.querySelector('.card')
// cardContainer.addEventListener('click',()=>{
//     console.log("addEventListener's click event used")})

const para = document.querySelector("p"); // we can add multiple event listeners with addEventListener.
para.addEventListener("dblclick", doubleClicked);
para.addEventListener("dblclick", clicked);

const container = document.querySelector(".container");

//arrow function

// firstCard.addEventListener("click", () => {
// 	const cardDiv = document.createElement("div");
// 	cardDiv.classList.add("card");
// 	container.append(cardDiv);
// 	cardDiv.innerText = i;
// 	i += 1;
// });

// function declaration was used to create click-event to create new card 

const firstCard = document.getElementById("firstCard");

function newCard(value) {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	container.append(cardDiv);
	cardDiv.innerText = value;
}

let i = 0;

firstCard.addEventListener("click", () => {
		i += 1;
		newCard(i);
});