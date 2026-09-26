const container = document.querySelector(".container");
const h1 = document.querySelector("h1");

// for (let i = 2; i <=100 ; i++) {
//     const newCard = card.cloneNode(true);
//     newCard.innerText = i;
// 	container.appendChild(newCard)
// }

// const PokeImage = document.querySelector(".image")
// for( let i = 2; i<=100;i++){
//     // container.append(PokeImage.cloneNode())
//     // PokeImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`

//     const newImg=PokeImage.cloneNode()
//     newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImg)
// }

//creating element with document,createElement
// const para = document.createElement('p')
// para.innerText = "Pokemon Images";
// para.classList.add("poke-list"); //adding class to element
// para.id ="pokemons" //adding id to new element
// container.append(para)

// for (let i = 1; i <= 1000; i++) {
// 	const div = document.createElement("div");
//     div.classList.add("image-div")

// 	const image = document.createElement("img");
// 	image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

// 	const para = document.createElement("p");
// 	para.innerText = `${i}`;

// 	div.append(image,para);
//     container.append(div);
// }

// let myHTML =  ``
// for(let i=1; i<=100;i++){
//     myHTML+= `
//     <div class="image-div">
//     <img class="image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"/>
//     <p>${i}</p>
//     </div>
//     `
// }
// container.innerHTML = myHTML