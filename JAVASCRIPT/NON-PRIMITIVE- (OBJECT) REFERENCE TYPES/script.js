// creating object
const myName = {
	name: "Ehtisham",
	age: 24,
};
console.log(myName);
// {age: 24, name: "Ehtisham"} expected output

// accessing keyvalues in Objects
console.log(myName.name); //Dot Notation

console.log(myName["name"]); //Bracket Notation
console.log(myName["na" + "me"]);

// updating objects
myName.qualification = "Diploma";
console.log(myName);
// {name: 'Ehtisham', age: 24, qualification: 'Diploma'}

// creating object within object
const user = {
	firstName: "Itachi",
	lastName: "Uchiha",
	About: {
		Role: "Shinobi",
        family: 'All Dead',
        job: 'Akatsuki member',
		speciality: {
			jutsu: "Genjutsu",
			dojutsu: "Mangekyu Sharingan",
            trump: 'Isanagi'
		},
	},
};
console.log(user)

user.firstName='Late. Itachi'
console.log(user)