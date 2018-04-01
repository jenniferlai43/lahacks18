// This file contains the user-interaction with the BAC Calculator
// including buttons and inputting the user information

var maleGender = document.querySelector("#gender_male_sec");

var femaleGender = document.querySelector("#gender_female_sec");

var weight = document.querySelector("#weight_sec");

var shotsConsumed = document.querySelector("#shot_quantity_sec");

var timeElapsed = document.querySelector("#time_elapsed_sec");

var next_1 = document.querySelector("#next_1");

next_1.addEventListener("click", function()
{
	var section1 = document.getElementById("first_box");
	section1.style.display = "none";
	var section2 = document.getElementById("second_box");
	section2.style.display = "inline-block";
})

var next_2 = document.querySelector("#next_2");

next_2.addEventListener("click", function()
{
	var section1 = document.getElementById("second_box");
	section1.style.display = "none";
	var section2 = document.getElementById("third_box");
	section2.style.display = "inline-block";
})

var next_3 = document.querySelector("#next_3");

next_3.addEventListener("click", function()
{
	var section1 = document.getElementById("third_box");
	section1.style.display = "none";
	var section2 = document.getElementById("fourth_box");
	section2.style.display = "inline-block";
})

var submit_button = document.querySelector("#submit_button");

submit_button.addEventListener("click", function (){
	var section1 = document.getElementById("fourth_box");
	var section2 = document.getElementById("bac_print");
	section1.style.display = "none";
	var bac = BloodAlcoholContent(weight.value, maleGender.value, shotsConsumed.value, timeElapsed.value);
	console.log(weight.value, maleGender.value, shotsConsumed.value, timeElapsed.value);
	printmessage(bac);
	section2.style.display = "block";
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
	document.getElementById("first_box").style.display = "block";
	document.getElementById("bac_print").style.display = "none";
})

function printmessage(bac){
	console.log("Bac", bac);
	document.getElementById("bac_value").innerHTML = bac.toPrecision(5) + "%";
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
	var genderconstant;
	if(gender == 'Male'){
		genderconstant = .73;
	} else{
		genderconstant = .66;
	}

	var bac = (shots * 5.14 / weight * genderconstant) - .015 * hours;

	return bac;
}