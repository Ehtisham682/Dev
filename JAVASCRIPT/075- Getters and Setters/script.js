// const user = {
// 	firstName:"Mohd",
// 	lastName: "Ehtisham",
// 	get fullName(){
// 		return `${user.firstName} ${user.lastName}`
// 	},
// 	set fullName(val){
// 		// const split = val.trim().split(" ");
// 		// this.firstName= split[0]
// 		// this.LastName= split[1]
// 		const [firstName,lastName] = val.trim().split(" ");
// 		this.firstName= firstName
// 		this.lastName= lastName
// 	}
// }
// user.fullName = "Mohd Ehtisham"

class CreateUser {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	get fullName() {
		return `${this.firstName}  ${this.lastName}`;
	}
	set fullName(val) {
		const [firstName, lastName] = val.trim().split(" ");
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
const user = new CreateUser("Mohd", "Ehtisham");

class Rectangle {
	#width = 0;
	#height = 0;

	constructor(width, height) {
		this.width = width; // goes through the setter, so validation runs
		this.height = height;
	}

	get width() {
		return this.#width;
	}
	set width(value) {
		if (!Number.isFinite(value) || value <= 0) {
			throw new Error("Width must be a positive number");
		}
		this.#width = value;
	}

	get height() {
		return this.#height;
	}
	set height(value) {
		if (!Number.isFinite(value) || value <= 0) {
			throw new Error("Height must be a positive number");
		}
		this.#height = value;
	}

	get area() {
		// read-only: calculated
		return this.#width * this.#height;
	}

	get perimeter() {
		// read-only: calculated
		return 2 * (this.#width + this.#height);
	}
}
