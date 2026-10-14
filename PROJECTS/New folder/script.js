const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".region-dropbox");
const searchInput = document.querySelector('.search-box input')
const themeChange = document.querySelector('.theme-mode')
let allCountries = []

// Home page
fetch("https://api.restcountries.com/countries/v5?limit=100&offset=1", {
	headers: { Authorization: "Bearer rc_live_fc16a793c3004b40bee6e3a6e5d16ccb" },
})
	.then((response) => response.json())
	.then((data) => {
        allCountries = data.data.objects
        renderCountries(allCountries)
    });

//Region Filter functionality
filterByRegion.addEventListener("change", (e) => {
    fetch(`https://api.restcountries.com/countries/v5?region=${e.target.value}&pretty=1`,
    { headers: { 'Authorization': 'Bearer rc_live_fc16a793c3004b40bee6e3a6e5d16ccb' }})
    .then((res)=>res.json())
    .then((data) => renderCountries(data.data.objects))
});

// Search Countries by names
searchInput.addEventListener('input',(e)=>{
    const searchByName = allCountries.filter((country)=> country.names.common.toLowerCase().includes(e.target.value.toLowerCase()))
    renderCountries(searchByName)
})

//countries card creation
function renderCountries(countries) {
    countriesContainer.innerHTML=""
	countries.forEach((country) => {
		const countryCard = document.createElement("a");
		countryCard.classList.add("country-card");
		countryCard.href = `/country.html?name=${country.names.common}`;
		countryCard.innerHTML = `
        <img src="${country.flag.url_svg}" alt="${country.names.common}flag" />
	        <div class="card-content">
		     <h3 class="card-title">${country.names.common}</h3>
		        <div class="card-text">
			        <p><b>Population: </b> ${country.population.toLocaleString("en-IN")}</p>
		         	<p><b>Region: </b> ${country.region}</p>
		    	    <p><b>Capital: </b> ${country.capitals?.[0]?.name ?? country.names.common}</p>
	    	    </div>
	        </div>
        `;
		countriesContainer.append(countryCard);
	});
}

themeChange.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode')
})