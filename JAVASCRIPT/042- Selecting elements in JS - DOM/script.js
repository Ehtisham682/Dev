// selecting elements by Tag Name
// document.images
document.getElementsByTagName("img");

// selecting elements by Class Name
const allElements = document.getElementsByClassName("web");

// Selecting elements by ID
// document.getElementById("img1").src= 'https://i.pinimg.com/1200x/ac/b0/9a/acb09a764a83097a1f515217b93d8964.jpg'
// document.getElementById("img2").src='https://i.pinimg.com/736x/df/3b/d8/df3bd89b63389a7d78257a0f694fc0d4.jpg'
// document.getElementById("img3").src= 'https://i.pinimg.com/1200x/7b/72/d2/7b72d21b5102feb1718b1fb720cd2c56.jpg'

const select = document.querySelector(".web");
// document.querySelector('#img3')

const selectAll = document.querySelectorAll(".web");

// changing image with querySelector
// const image1 = document.querySelector('[src="./images/html-css-javascript.png"]');
// image1.src =
// 	"https://i.pinimg.com/1200x/ac/b0/9a/acb09a764a83097a1f515217b93d8964.jpg";
// const image2 = document.querySelector('[alt="css"]');
// image2.src =
// 	"https://i.pinimg.com/736x/df/3b/d8/df3bd89b63389a7d78257a0f694fc0d4.jpg";
// const image3 = document.querySelector('[alt="javascript"]');
// image3.src =
// 	"https://i.pinimg.com/1200x/7b/72/d2/7b72d21b5102feb1718b1fb720cd2c56.jpg";

const imageUrl = [
	"https://i.pinimg.com/1200x/ac/b0/9a/acb09a764a83097a1f515217b93d8964.jpg",
	"https://i.pinimg.com/736x/df/3b/d8/df3bd89b63389a7d78257a0f694fc0d4.jpg",
	"https://i.pinimg.com/1200x/7b/72/d2/7b72d21b5102feb1718b1fb720cd2c56.jpg",
];

const allImage = document.querySelectorAll("img");

    // for (let i = 0; i < allImage.length; i++) {
    // 	allImage[i].src = imageUrl[i];
    // }

allImage.forEach((image,i) => {
    image.src= imageUrl[i]
})