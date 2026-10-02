const username = "Anurag";
let userAge = 25;
var x = 50;

function add() {
	// debugger;
	const username = "Akash";
	const x = 5;
	const y = 8;
	console.log(x + y);
	console.log(username);
}

function subtract() {
	const y = 18; //it will get x from global scope bcz it is laxical scope
	console.log(x - y);
	console.log(username);
}

function parent() {
	const parentName = "This is parent";
	console.log(parentName);
	child();

	function child() {
		const childName = "This is child";
		console.log(childName);
		grandChild();

		function grandChild() {
			const GrandChildName = "This is Grand Child";
			console.log(GrandChildName);
			{
				const myName = "Ehtisham"; // will give error as variable is in block scope
			}
			console.log(myName);
		}
	}
}

// add();
// subtract();
parent();

console.log("Program Ended");
