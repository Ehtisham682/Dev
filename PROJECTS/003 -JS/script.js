const button = document.querySelector(".button");
const popup = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".close-icon");
const container =document.querySelector('.popup-container')


button.addEventListener("click", () => {
	container.classList.add("popup-opened")
});

closeBtn.addEventListener("click", (e) => {
	e.stopPropagation();
	container.classList.remove('popup-opened')
});

container.addEventListener('click',(e)=>{
	container.classList.remove('popup-opened')
})

popup.addEventListener('click',(e)=>{
	e.stopPropagation()
})