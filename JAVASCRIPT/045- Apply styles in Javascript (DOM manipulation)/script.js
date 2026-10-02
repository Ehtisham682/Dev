const h1 = document.querySelector("h1");
h1.style.color = "white";
h1.style.background = "crimson";
h1.style.fontFamily = "cursive";

const anchor = document.querySelectorAll("a");

// for(let i = 0; i<anchor.length; i++){
//     anchor[i].style.color = 'teal'
// }

for (const link of anchor) {
	// link.style.color= 'teal';
	// link.style.textDecoration= 'none'
	// link.style.fontWeight= '900'
	// link.style.fontFamily = 'cursive'

	// link.style.cssText = `
    // color: brown;
    // text-decoration:none;
    // font-weight: 900;
    // font-family: cursive;`

    // link.className ='links'
    //if we already have a class and we give new class like this, it will otherwise than class.
    // link.className='my-link links'
     // we have mention both class to get both effects of styles. or we can use classList add(f)
    link.classList.add('links')

    console.log(link.classList)
}

// const para = document.querySelector("p");
// para.style.cssText = "color: green";

//classList usage
const h2 = document.querySelector('h2')
h2.classList.add('styling')