const container = document.querySelector(".container");
const card = document.querySelector(".card");
const h1 = document.querySelector("h1");

for (let i = 2; i <=100 ; i++) {
    const newCard = card.cloneNode(true);
    newCard.innerText = i;
	container.appendChild(newCard)
}

container.append("HELLLOW") //append allow to append string directly


//appending string with appendChild
const newText =document.createTextNode('Hello World')
container.appendChild(newText)

// container.appendChild(h1)
