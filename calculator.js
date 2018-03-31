// LAHacks_2018
// 
// Alcohol Information Helper
//
// Andrew Nguyen & Jeniffer
// 

var maleGender = document.querySelector("#gender_male_sec");

var femaleGender = document.querySelector("#gender_female_sec");

var weight = document.querySelector("#weight_sec");

var shotsConsumed = document.querySelector("#shot_quantity_sec");

var timeElapsed = document.querySelector("#time_elapsed_sec");

var next_1 = document.querySelector("#next_1");

next_1.addEventListener("click", function()
{
	var section1 = document.getElementById("gender_sec_container");
	section1.style.visibility = "hidden";
	var section2 = document.getElementById("weight_sec_container");
	section2.style.visibility = "visible";
})

var next_2 = document.querySelector("#next_2");

next_2.addEventListener("click", function()
{
	var section1 = document.getElementById("weight_sec_container");
	section1.style.visibility = "hidden";
	var section2 = document.getElementById("shot_quantity_sec_container");
	section2.style.visibility = "visible";
})

var next_3 = document.querySelector("#next_3");

next_3.addEventListener("click", function()
{
	var section1 = document.getElementById("shot_quantity_sec_container");
	section1.style.visibility = "hidden";
	var section2 = document.getElementById("time_elapsed_sec_container");
	var section3 = document.getElementById("submit_button_container");
	section2.style.visibility = "visible";
	section3.style.visibility = "visible";
})

var submit_button = document.querySelector("#submit_button");

submit_button.addEventListener("click", function (){
	var section1 = document.getElementById("time_elapsed_sec_container");
	var section2 = document.getElementById("submit_button_container");
	section1.style.visibility = "hidden";
	section2.style.visibility = "hidden";
	var bac = BloodAlcoholContent(weight.value, maleGender.value, shotsConsumed.value, timeElapsed.value);
	console.log(weight.value, maleGender.value, shotsConsumed.value, timeElapsed.value);
	printmessage(bac);
	console.log("Submit pressed.");
})

var recalculate_button = document.querySelector("#recalculate_button");

recalculate_button.addEventListener("click", function()
{
	var section1 = document.getElementById("weight_sec");
	var section2 = document.getElementById("shot_quantity_sec");
	var section3 = document.getElementById("time_elapsed_sec");
	section1.value = "";
	section2.value = "";
	section3.value = "";
	document.getElementById("gender_sec_container").style.visibility = "visible";
	//section4.style.visibility = "hidden";
	//section5.style.visibility = "hidden";
})

function printmessage(bac){
	console.log("Bac", bac);
	document.getElementById("bac_value").innerHTML = (bac*100).toPrecision(5) + "%";
	if(bac < .08){
		console.log("Mild impairement, but you're safe to drive!");
		document.getElementById("bac_message").innerHTML = "Mild impairement, but you're safe to drive!";
	} else if ((bac >= .08) && (bac <= .10)){
		console.log("You are legally drunk, and cannot drive. Drink Water!");
		document.getElementById("bac_message").innerHTML = "You are legally drunk, and cannot drive. Drink Water!";
	} else if(bac > .10){
		console.log("You might vomit or black out soon. Stop drinking and drink water!");
		document.getElementById("bac_message").innerHTML = "You might vomit or black out soon. Stop drinking and drink water!";
	}
	else
	{
		console.log("That is not a valid BAC.");
		document.getElementById("bac_message").innerHTML = "Are you sure you entered in the correct values?";
	}
}

function BloodAlcoholContent(weight, gender, shots, hours){

	var genderconstant = (gender) ? .73 : .66;

	var bac = (shots * 5.14 / weight * genderconstant) - .015 * hours;

	return bac;
}

/*
var x = BloodAlcoholContent(160, 19, 'male', 5, 1);
printmessage(x);
console.log(x);
*/

/* Function that prompts user for input:

function promptUser(){
	var userweight = prompt("Please Enter your weight");
	var usergender = prompt("Are you male or female?");
	var usershots = prompt("How many drinks have you consumed?(oz). One shot is one oz.");
	var hours = prompt("How many hours has it been?");

	var bac = BloodAlcoholContent(userweight, usergender, usershots, hours);

	return bac;
}
*/

/* Testing functions: 
var x = BloodAlcoholContent(160, 19, 'male', 5, 1);
printmessage(x);
console.log(x);
*/ 

