const startButton = document.querySelector(".start-btn");
const startBtnContainer = document.querySelector(".start-btn-container");
const home = document.querySelector(".home");
const quizStart = document.querySelector(".quiz-page");
const selectOption = document.querySelectorAll(".options");
const optionContainer = document.querySelectorAll(".options-container");
const answer = document.querySelectorAll(".answer");
// const answer = [...answerList];

const allOptions = JSON.parse(localStorage.getItem("allOptions")) || {
	first: "",
	second: "",
	third: "",
	forth: "",
};

startButton.addEventListener("click", () => {
	home.classList.add("quiz-start");
	quizStart.classList.add("start");
});

let answered = false;

selectOption.forEach((option) => {
	option.addEventListener("click", () => {
		console.log(option.id);
		if (answered) return;
		const answerText = option.querySelector(".answer").textContent.trim();

		if (answerText === "script Tag") {
			option.classList.add("correct");
			const optionNum = option.classList[1];
			allOptions[option.id] = optionNum;
			localStorage.setItem("allOptions", JSON.stringify(allOptions));
			answered = true;
		} else {
			option.classList.add("wrong");
			const optionNum = option.classList[1];
			allOptions[option.id] = optionNum;
			localStorage.setItem("allOptions", JSON.stringify(allOptions));
		}
	});
});




// for (const option of selectOption) {
// 	option.addEventListener("click", () => {
// 		if (answered) return;
// 		const answer = option.querySelector(".answer").textContent.trim();
// 		if (answer === "script Tag") {
// 			option.classList.add("correct");
// 			answered = true;
// 		} else option.classList.add("wrong");
// 	});
// }
