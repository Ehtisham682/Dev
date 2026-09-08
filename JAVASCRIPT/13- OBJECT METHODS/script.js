const user= {
    firstName: "Sosuke",
    lastName: "Aizen",
    age: 3240
}
Object.seal(user)
// object.seal() doesn't let us add or remove properties.
// it let as change existing properties only.
user.job = "Shinigami"
user.firstName ="Planner"
console.log(user)
// {firstName: 'Aizen', lastName: 'Sosuke', age: 2000} Output

const user2 ={
    firstName: "Kisake",
    lastName: "Urahata",
    age: 3500
}
Object.freeze(user2)
// can't add, delete properties, also can't change existing once.
user2.job = "Squad Captain- Gotei thirteen"
user2.firstName = "Candy shop keeper"
console.log(user2)


// 'in' operator - used to check if the property is present in object.

console.log('job' in user)
console.log('firstName' in user2)