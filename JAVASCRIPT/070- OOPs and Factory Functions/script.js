// const user={
//     name:"Ehtisham",
//     age: 24,
//      //Abstraction
//     getAgeYear: function(){
//         return new Date().getFullYear() - user.age
//     }
// }

//Factory Function
// function createUser(name, age) {
// 	const user = {
// 		name: name,
// 		age: age,
// 		getAgeYear: function () {
// 			return new Date().getFullYear() - this.age;
// 		},
// 	};
//     return user
// }

// const user1 = createUser('Ann',26)
// const user2 = createUser('Jake',18)

function createCounter() {
	let count = 0;
	return {
		increment() {
			count++;
		},
		decrement() {
			if (count > 0) count--;
		},
		reset() {
			count = 0;
		},
		getCount() {
			return count;
		},
	};
}
const a = createCounter();

function createUser(name, password) {
	let pass = password;
	return {
		name: name,
		checkPassword(attempt) {
			if (attempt === pass) {
				return true;
			} else {
				return false;
			}
		},
		changePassword(oldPassword, newPassword) {
			if (oldPassword !== pass) {
				console.log("Invalid Password");
				return false;
			}
			if (typeof newPassword !== "string" || newPassword.length < 4) {
				console.log("New password must be at least 4 characters");
				return false;
			}
			pass = newPassword;
			return true;
		},
	};
}
const user = createUser("Ehtisham", "Ehti");
