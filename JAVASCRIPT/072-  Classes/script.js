class CreateUser {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	birthYear() {
		return new Date().getFullYear() - this.age;
	}
	getFullName() {
		return firstName + " " + lastName;
	}
}
const user1 = new CreateUser("Aman", "Mishra", 32);
const user2 = new CreateUser("Anurag", "Singh", 72);