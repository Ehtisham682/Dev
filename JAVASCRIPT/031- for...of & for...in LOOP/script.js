const itemList= ['book','cable','coffee','water','keyboard']

// for( const item of itemList){
//     console.log(item)
// }

const name ="Ehtisham"

// for( const letter of name){
//     console.log(letter)
// }


const person = {
    name: "Ehti",
    age: 23,
    city: "Delhi"
};

// for (const key in person) {
//     console.log(person[key]);
// }

const PersonKey = Object.keys(person)
// for(var key of PersonKey){
//     console.log(person[key])
// }

const personValue = Object.values(person)
for(var info in personValue){
    console.log(personValue[info])
}

const personEntries =Object.entries(person)
// for(var key of personEntries){
//     console.log(key)
// }