// Reduce Array Methods
// const array = [1,1,2,2,1,1]

// const reduce = array.reduce((accumulator,current,i) => {
//     debugger
//     // console.log(accumulator)
//     console.log(accumulator) //initialValue is given to it will start form array[0]
//     return accumulator + current
// },0)

const array = [1,2,3,4]

const number = array.reduce((acc,current,i) => {
    console.log(acc);
    return acc + current
},0)