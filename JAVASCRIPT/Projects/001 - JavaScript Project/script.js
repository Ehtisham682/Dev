const allCheckBox = document.querySelectorAll(".goal-checkbox");
const goalContainer = document.querySelectorAll(".goal-container");
const inputFields = document.querySelectorAll(".goal-input");
const warningLabel = document.querySelector(".warning-label");
const progressBar = document.querySelector(".progress-bar")
const myBar = document.querySelector(".myBar")

allCheckBox.forEach((checkbox) => {
	checkbox.addEventListener("click", (e) => {
		const inputFieldChecks = [...inputFields].every((input) => {
			return input.value;
		});
		if (inputFieldChecks) {
			checkbox.parentElement.classList.toggle("completed");
			myBar.style.width = '33.33%' // not preferred
		} else {
            progressBar.classList.add('show-warning')
        }
	});
});

inputFields.forEach((input) => {
	input.addEventListener("focus", () => {
		progressBar.classList.remove("show-warning");
	});
});

// if (goalContainer.)