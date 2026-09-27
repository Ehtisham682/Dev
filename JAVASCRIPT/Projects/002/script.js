const headerContent = document.querySelector(".header-content");
const burgerContainerIcon = document.querySelector(".burger-container");
const menuCloseIcon = document.querySelector(".menu-close-icon");
const nav = document.querySelector("nav");

burgerContainerIcon.addEventListener("click", (e) => {
	e.stopPropagation();
	headerContent.classList.add("menu-opened");
});

nav.addEventListener('click',(e)=>{
    e.stopPropagation()
})

menuCloseIcon.addEventListener("click", (e) => {
	headerContent.classList.remove("menu-opened");
});

window.addEventListener('click',()=>{
    headerContent.classList.remove("menu-opened");
})