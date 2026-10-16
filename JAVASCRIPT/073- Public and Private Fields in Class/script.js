class CreateUser {
	// private field
	#age
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.#age = age;
	}
	birthYear() {
		return new Date().getFullYear() - this.#age;
	}
	#getFullName() {
		return firstName + " " + lastName;
	}
	// public field
	h1= "Hello World"
}
const user1 = new CreateUser("Aman", "Mishra", 32);
const user2 = new CreateUser("Anurag", "Singh", 72);
// console.log(user1.#h1)