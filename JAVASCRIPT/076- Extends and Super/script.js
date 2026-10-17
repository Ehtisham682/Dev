class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	birthYear() {
		return new Date().getFullYear() - this.age;
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

// here Student is child and User is Parent
class Student extends User{
	constructor(firstName, lastName, age,education){
		super(firstName, lastName, age) //refer's User class constructor and methods
		this.education = education
	}
}
class Employee extends User{
	constructor(firstName, lastName, age,company){
		super(firstName, lastName, age) //refer's User class constructor and methods
		this.company = company
	}
}

const user = new User("Mohd", "Ehtisham",20);
const student1 = new Student('Ehti','Sham',26,'B.Tech')
const majduur1 = new Employee('real','labour',26,'Wipro')