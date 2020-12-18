document.querySelector("#country").addEventListener("change", function(){
var selectedCountry=document.querySelector("#country").value;

if (selectedCountry=="") {
	document.querySelector("#haeder-2").style.display ="none";
	document.querySelector("#bdDivision").style.display ="none";
	document.querySelector("#indiaStates").style.display ="none";
}else if (selectedCountry=="bd") {
	document.querySelector("#bdDivision").style.display ="block";
	document.querySelector("#haeder-2").style.display ="block";
	document.querySelector("#indiaStates").style.display ="none";
}else if (selectedCountry=="in") {
	document.querySelector("#indiaStates").style.display ="block";
	document.querySelector("#haeder-2").style.display ="block";
	document.querySelector("#bdDivision").style.display ="none";
}

})