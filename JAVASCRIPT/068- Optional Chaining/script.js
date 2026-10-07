const user = {
	userName: "Ehtisham",
	age: 24,
	firstName: "Ehti",
	lastName: "Sham",
    fullName() {
        return `${user.firstName} ${user.lastName}`
    }
};

// console.log(user.address.city)

//if function is not there or called it will throw error
// console.log(user.fullName());
console.log(user.fullName?.());
