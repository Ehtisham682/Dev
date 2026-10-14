const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("name");
const countryInfo = document.querySelector(".country-info");
const countryTitle = document.querySelector(".country-title");
const countryFlag = document.querySelector(".country-flag");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const tld = document.querySelector(".tld");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector('.border')

fetch(`https://api.restcountries.com/countries/v5/names.common?q=${myParam}`, {
	headers: { Authorization: "Bearer rc_live_fc16a793c3004b40bee6e3a6e5d16ccb" },
})
	.then((res) => res.json())
	.then((data) => {
		const info = data.data.objects?.[0];
		countryFlag.classList.add("country-flag");
		countryFlag.src = info.flag.url_svg;
		countryTitle.innerText = info.names.common;

		if (info.names.native[0]) {
			nativeName.innerText = Object.values(info.names.native)[0]?.common;
		} else nativeName.innerText = info.names.common;

		population.innerText = info.population.toLocaleString("en-IN");

		if (info.region) {
			region.innerText = info.region;
		}
		if (info.subregion) {
			subRegion.innerText = info.subregion;
		}
		if (info.capitals[0]) {
			capital.innerText = Object.values(info.capitals)[0]?.name;
		}
        
        tld.innerText = info.tlds.join(' , ')
        
        if (info.currencies){
			currencies.innerText = Object.values(info.currencies).map((curr)=> curr.name).join(', ')
        }
        languages.innerText = info.languages.map((language)=> language.name).join(', ')
		
		if (info.borders){
			
		}
		info.borders.forEach((border)=>{
			fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${border}?response_fields=names.common,codes.alpha_3`,
				{ headers: { 'Authorization': 'Bearer rc_live_fc16a793c3004b40bee6e3a6e5d16ccb' } })
				.then((response) => response.json())
				.then((data) => {
					const borderCountry = document.createElement('a')
					borderCountry.innerText = data.data.objects[0].names.common
					borderCountry.classList.add('border-countries')
					borderCountry.href= `/country.html?name=${data.data.objects[0].names.common}`
					borderCountries.append(borderCountry)
				});

		})
	});

const themeChange = document.querySelector('.theme-mode')
themeChange.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode')
	themeChange.innerHTML = `<i class="fa-regular fa-sun"></i>&nbsp;Light Mode`
})