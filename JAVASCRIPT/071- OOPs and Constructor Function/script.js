// function CreateUser(firstName, lastName, age) {
// 	const user = {
// 		firstName,
// 		lastName,
// 		age,
// 		getAgeYear: CreateUser.common.getAgeYear,
// 	};
// 	return user;
// }
// CreateUser.common = {
// 	getAgeYear() {
// 		return new Date().getFullYear() - this.age;
// 	},
// };


function CreateUser(firstName, lastName,age){
	this.firstName =firstName
	this.lastName = lastName
	this.age = age
}

//inheritance

CreateUser.prototype.birthYear = function(){
	return new Date().getFullYear() - this.age
}

const user1 = new CreateUser("Aman", "Mishra", 32);
const user2 = new CreateUser("Anurag", "Singh", 72);