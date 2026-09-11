// Shallow Copy
const ar1 = ["ehtisham", 101];
const ar2 = ar1;

const obj1 = { first: "ehti", last: "sham" };
const obj2 = obj1;

//this also changes the value of first object and array
// as both share property reference

obj2.last = "ehti";
console.log(obj2);
console.log(obj1);

ar2[1] = 202;
console.log(ar1);
console.log(ar2);

const fruits1 = { first: "apple", second: "banana", third: "kiwi" };
// const fruits2={}
// Object.assign(fruits2,fruits1)
const fruits2 = { ...fruits1 };

//this only changes the second object/array as both object/array have different reference
fruits2.second = "Kella";
console.log(fruits2);

const fall1 = ["orange", "santara", "papaya"];
// const fall2= []
// Object.assign(fall2,fall1)
// const fall2=[...fall1]
// const fall2=[].concat(fall1)
const fall2 = fall1.slice();
fall2.push("ananas");
console.log(fall2);

const place = {
	country: "India",
	state: "UP",
	City: "Kanpur",
	address: {
		location: "Nope",
		pincode:123456,
	},
};

// const place2={...place}

// DEEP COPY
const place2= JSON.parse(JSON.stringify(place));
place2.address.location='CNB nagar'
place2.address.pincode= 456664  
