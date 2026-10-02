const heading =document.querySelector('h1')

// keypress event
// heading.addEventListener('keypress', (e) => {
//     console.log(e.code)
//     console.log(e.key)
// })

// keyup event
// heading.addEventListener('keyup', (e) => {
//     console.log(e.code)
//     console.log(e.key)
// })

// keydown event
heading.addEventListener('keydown', (e) => {
    console.log(e.code)
    console.log(e.key)
})