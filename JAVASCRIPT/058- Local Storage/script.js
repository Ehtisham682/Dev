const nameElement = document.querySelector(".name");
const nameInput = document.querySelector(".name-input");
const ageElement = document.querySelector(".age");
const ageInput = document.querySelector(".age-input");
const button = document.querySelector('.botton')

// nameInput.addEventListener('input',(e)=>{
//     localStorage.setItem('myName',e.target.value)
//     nameElement.innerText = localStorage.getItem('myName')
// })

// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem('age',e.target.value )
//     ageElement.innerText = localStorage.getItem('age')
// })
// nameElement.innerText= localStorage.getItem('myName');
// ageElement.innerText= localStorage.getItem('age');

// const myData = {name:"",age:""} || {}
const myData= JSON.parse(localStorage.getItem('myData')) || {} //fetching localStorage item

nameInput.addEventListener("input", (e) => {
    myData.name = e.target.value
    nameElement.innerText = e.target.value
    localStorage.setItem('myData',JSON.stringify(myData))  //setting localStorage item
});

ageInput.addEventListener("input", (e) => {
    myData.age = e.target.value
    ageElement.innerText = e.target.value
    localStorage.setItem('myData',JSON.stringify(myData))   
});
if (myData.name)
    nameElement.innerText= myData.name
if (myData.age)
    ageElement.innerText= myData.age

button.addEventListener('click',(e)=>{
    localStorage.removeItem('myData') //localStorage items can be removed with this
})