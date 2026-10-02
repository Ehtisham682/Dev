//Higher order function
function a(b){
    console.dir(b)
    b()
}

function name(){
    console.log("Ehtisham")
}

a(name)


//Callback function

a(function(){
    console.log('Hello there')
})
