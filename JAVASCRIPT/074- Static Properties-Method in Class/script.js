class CreateUser {
	// static property "greet" belong to class itself
	static greet = "Hello";

	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	birthYear() {
		return new Date().getFullYear() - this.age;
	}
	// static method
	static getFullName() {
		return this.firstName + " " + this.lastName;
	}
}
const user1 = new CreateUser("Mohd", "Ehti", 32);
const user2 = new CreateUser("M", "Ash", 72);

class Calculator {

	static #check(num1,num2){
		if (!Number.isFinite(num1) || !Number.isFinite(num2)){
			throw new Error("Both inputs must be numbers.")
		}
	}
	static add(num1, num2) {
		Calculator.#check(num1,num2)
		return num1 + num2;
	}
	static subtract(num1, num2) {
		Calculator.#check(num1,num2)
		return num1 - num2;
	}
	static multiply(num1, num2) {
		Calculator.#check(num1,num2)
		return num1 * num2;
	}
	static divide(num1, num2) {
		Calculator.#check(num1,num2)
		if (num2 === 0) {
			throw new Error("invalid number, please do not divide by 0");
		}
		return num1 / num2;
	}
}
