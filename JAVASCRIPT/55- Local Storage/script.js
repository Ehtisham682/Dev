let nameElement = document.querySelector(".name");
let inputField = document.querySelector(".input");

// nameElement.innerText= localStorage.myName 
nameElement.innerText= localStorage.getItem('myName');  

inputField.addEventListener('input',(e)=>{
    localStorage.myName = e.target.value 
    nameElement.innerText = e.target.value
})
