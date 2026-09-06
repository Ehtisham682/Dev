// const dayNumber = 8
// debugger
// switch(dayNumber){
//     case 0:
//         console.log('It is Sunday Today')
//         break
//     case 1:
//         console.log('It is Monday Today')
//         break
//     case 2:
//         console.log('It is Tuesday Today')
//         break
//     case 3:
//         console.log('It is Wednesday Today')
//         break
//     case 4:
//         console.log('It is Thursday Today')
//         break
//     case 5:
//         console.log('It is Friday Today')
//         break
//     case 6:
//         console.log('It is Saturday Today')
//         break
//     default:
//         console.log('Please Enter valid number (0-6)')
// }

// New Program
// const username =  'Ehti'
// const userAge = 214
// switch (true) {
//     case (userAge >= 0 && userAge <= 4):
//     {console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
//     break}

//     case (userAge >= 5 && userAge <= 17): {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
//     break}

//     case (userAge >= 18 && userAge <= 24): {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
//     break}

//     case (userAge >= 25 && userAge <= 45): {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
//     break}

//     case (userAge > 45 && userAge < 121): {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
//     break}

//     case (userAge >= 121): {
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
//     break}

//     default:
//     console.log('Please Enter a Valid Age');
// }

// const name='r'
// debugger
// switch(name){
//     case 'ehti':
//         console.log('Not the correct name')
//         break
//     case 'Ehtis':
//         console.log('Still not valid name')
//         break
//     case 'Ehtisham':
//         console.log('Name matched');
//         break
//     default:
//         console.log('Idiot!!')
// }

// New Program
const grade = prompt("enter grade")
debugger
switch (grade.toLocaleUpperCase()) {
	case "A+":
		console.log("Student scored between 90-100");
		break;
	case "A":
		console.log("Student scored between 80-90");
		break;
	case "B+":
		console.log("Student scored between 70-80");
		break;
	case "B":
		console.log("Student scored between 60-70");
		break;
	case "C":
		console.log("Student scored between 50-60");
		break;
	case "D":
		console.log("Student scored between 40-50");
		break;
	case "E":
		console.log("Student scored between 30-40");
		break;
	default:
        console.log("Student has failed the Exam")
}
console.log("Program Ended!!");
