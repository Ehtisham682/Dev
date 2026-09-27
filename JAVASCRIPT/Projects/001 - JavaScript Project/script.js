const allCheckBox = document.querySelectorAll(".goal-checkbox");
const goalContainer = document.querySelectorAll(".goal-container");
const inputFields = document.querySelectorAll(".goal-input");
const warningLabel = document.querySelector(".warning-label");
const progressBar = document.querySelector(".progress-bar");
const myBar = document.querySelector(".myBar");
const progressBarLabel = document.querySelector(".progress-label");

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
	first:{
		name:"",
		completed: false
	},
	second:{
		name:"",
		completed: false
	},
	third:{
		name:"",
		completed: false
	}
};

const allQuotes = [
	"Raise the bar by completing your goals!",
	"Well begun is half done",
	"Just a step away, keep going!",
	"You just completed all the gaols :D",
];

let goalCount = Object.values(allGoals).filter((goal) => goal.completed).length;
myBar.style.width = `${(goalCount / 3) * 100}%`;
myBar.firstElementChild.innerText = `${goalCount}/3 Completed`;
progressBarLabel.innerHTML = allQuotes[goalCount]

allCheckBox.forEach((checkbox) => {
	checkbox.addEventListener("click", (e) => {
		const inputFieldChecks = [...inputFields].every((input) => {
			return input.value;
		});
		if (inputFieldChecks) {
			checkbox.parentElement.classList.toggle("completed");
			const inputId = checkbox.nextElementSibling.id;
			allGoals[inputId].completed = !allGoals[inputId].completed;
			localStorage.setItem("allGoals", JSON.stringify(allGoals));
			goalCount = Object.values(allGoals).filter(
				(goal) => goal.completed,
			).length;
			myBar.style.width = `${(goalCount / 3) * 100}%`;
			myBar.firstElementChild.innerText = `${goalCount}/3 Completed`;
			progressBarLabel.innerHTML = allQuotes[goalCount];
		} else {
			progressBar.classList.add("show-warning");
		}
	});
});

inputFields.forEach((input) => {
	input.value = allGoals[input.id].name;

	if (allGoals[input.id].completed) {
		input.parentElement.classList.add("completed");
	}

	input.addEventListener("focus", () => {
		progressBar.classList.remove("show-warning");
	});

	input.addEventListener("input", (e) => {
		if (allGoals[input.id].completed) {
			input.value = allGoals[input.id].name;
			return;
		}
		allGoals[input.id].name = input.value,
		localStorage.setItem("allGoals", JSON.stringify(allGoals));
	});
});
