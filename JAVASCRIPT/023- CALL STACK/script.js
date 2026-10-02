debugger

console.log('Program Start')

function callMe(){
    console.log("Calling you")
    return callAgain()
}

callMe()

function callAgain(){
    console.log('Calling again with - callAgain')
}

console.log('Program End')

// doing Stack Overflow

// function stack(){
//     console.log("Stack will overflow")
//     stack()
// }

// stack()