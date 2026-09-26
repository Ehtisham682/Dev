const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


// window.addEventListener('click',(e) =>{
//     console.log('Window Event Clicked')
// })

// document.addEventListener('click',(e) =>{
//     console.log('Document Event Clicked')
// })

// document.body.addEventListener('click',(e) =>{
//     console.log('Body Event Clicked')
// })

// green.addEventListener('click',(e) =>{
//     console.log('Green Event Clicked')
// })

// pink.addEventListener('click',(e) =>{
//     console.log('Pink Event Clicked')
// })

blue.addEventListener('click',(e) =>{
    e.stopPropagation();  //we can use stopPropogation() to prevent event bubbling
    console.log('Blue Event Clicked')
})

blue.addEventListener('click',(e) =>{
    e.stopPropagation();  
    console.log('Blue Event Clicked')
},{once:true}) //it will run the listener once only.

