const links= document.querySelector('.my-link')
console.log(links)

console.log(links.parentElement)
console.log(links.parentElement.parentElement)
console.log(links.parentElement.parentElement.parentElement)
console.log(links.parentElement.parentElement.parentElement.parentElement)
// console.log(links.parentElement.parentElement.parentElement.parentElement.parentElement)
//last console prints null as html dont have any parent element


console.log(links.children) // this element have no children
// console.log(links.parentElement.firstElementChild)

console.log(links.nextElementSibling) //return next sibling element
console.log(links.nextSibling) //nextSibling returns the next sibling node
console.log(links.previousElementSibling) //return previous sibling element
console.log(links.nextElementSibling.nextElementSibling) // next to next element

links.chil