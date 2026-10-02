// const timer1 = setTimeout(`console.log("Hello 1sec")`,1000)
// const timer2 = setTimeout(`console.log("Hello 2sec")`,2000)
// const timer3 = setTimeout(a,3000,"myNamw",67,76)
// clearTimeout(timer1) //"Hello 4" will not present as we have cleared the timer for timer1.

// const timer1 = setInterval(`console.log("Hello 1sec")`,1000)
// const timer2 = setInterval(`console.log("Hello 2sec")`,2000)
// const timer3 = setInterval(a,3000,"myName",67,76)
// clearInterval(timer1) //"Hello 1sec" will not print as we have cleared the interval.

function a(){
    console.log(arguments)
    // console.log('Hello everyone')
}

// console.log("This will print first as its synchronous") // setTimeout is asynchronous

const tm= setInterval(function(){
    console.log("declaring anonymous function")
},2000)