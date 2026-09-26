const inputUserName = document.getElementById("userName");
let inputUserValue = document.getElementById("inputValue");

//click event
// inputUserName.addEventListener("click", () => {
// 	console.log("Input clicked");
// });

//input event
// inputUserName.addEventListener("input", (e) => {
// 	console.log(e.target.value);
// 	inputUserValue.innerText = e.target.value;
// });

//change event
// inputUserName.addEventListener("change", (e) => {
// 	console.log(e.target.value);
// 	inputUserValue.innerText = e.target.value;
// });

// focus event
// inputUserName.addEventListener("focus", (e) => {
// 	console.log(e.target.value);
// 	inputUserValue.innerText = e.target.value;
// });

// blur event
// inputUserName.addEventListener("blur", (e) => {
// 	console.log(e.target.value);
// 	inputUserValue.innerText = e.target.value;
// });

//submit event
const formSubmission = document.querySelector('form')
// formSubmission.addEventListener('submit', (e) => {
//     e.preventDefault()
//     // console.log(e)
//     console.log(e.target)
// })

formSubmission.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
})