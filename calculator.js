// LAHacks_2018
// 
// Alcohol Information Helper
//
// Andrew Nguyen & Jeniffer
// 
function printmessage(BloodAlcoholContent){

	if(BloodAlcoholContent < .08){
		console.log("Mild impairement, but you're safe to drive!");
	} else if ((BloodAlcoholContent >= .08) && (BloodAlcoholContent <= .10)){
		console.log("You are legally drunk, and cannot drive. Drink Water!");
	} else if(BloodAlcoholContent > .10){
		console.log("You might vomit or black out soon. Stop drinking and drink water!");
	}
}

var x = BloodAlcoholContent(160, 19, 'male', 5, 1);
printmessage(x);
console.log(x);




function BloodAlcoholContent(weight, gender, shots, hours){

	var genderconstant;
	(gender == 'male' || gender =='MALE') ? genderconstant = .73 : genderconstant = .66

	var bac = (shots * 5.14 / weight * genderconstant) - .015 * hours;

	return bac;
}

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

