const week = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday",
];

const din = week.map((a, b, array) => {
	// console.log(b, a);
	return a;
});

const network = ["3g", "4g", "5g"];

const coverageType = network.map((netType, i, array) => {
	// console.log(i,netType) //gets each element with function and return it to netType
	// console.log(array) // it will provide the whole array
	return netType.toLocaleUpperCase(); //takes the result of each function calling and put it in new array
});
// console.log(coverageType)

//***************************************filter()****************************************** */

// const filtered= ['bankai','gensuga','aizen','aino','ifa','gohan','bleach','kyokasugetsu']
// const filteredType = filtered.filter((str,i,array)=>{
//     // console.log(str)
//     return str.length<=5 //remove the element having character length > 5 in the new array.
// })
// console.log(filteredType) // it will return the new array made with filtered elements which were true to the condition.

const string = [
	"bankai",
	"gensuga",
	"aizen",
	"aino",
	"Ifa",
	"gohan",
	"bleach",
	"kyokasugetsu",
];
const filteredStr = string.filter((str, i, array) => {
	// console.log(str);
	return str.toLocaleLowerCase().includes("i");
});
// console.log(filteredStr);

const num = [0, 1, 2, 3, 5, 10, 20, 30, 40, 50];
const filterNum = num.filter((no, i) => {
	// console.log(no);
	return no.toString().includes("0");
});

const students = [
	{
		name: "Anas",
		age: 24,
	},
	{
		name: "F",
		age: 18,
	},
	{
		name: "Aman",
		age: 21,
	},
	{
		name: "Ayan",
		age: 17,
	},
	{
		name: "Kala",
		age: 22,
	},
	{
		name: "Zaid",
		age: 25,
	},
];

const filteredStud = students.filter((info,i)=>{
    // return info.age>18
    return info.age >= 18
}
).map((student)=>{
    return student.name
})
//using map() chained with filter()
// console.log(filteredStud)