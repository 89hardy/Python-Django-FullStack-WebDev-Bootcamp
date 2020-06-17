var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var age = prompt("Enter your age(in numbers): ");
var height = prompt("Enter your height(in cms): ");
var petName = prompt("Enter your pet name: ");


//Conditions
var nameCond = false
var ageCond = false
var heightCond = false
var petCond = false

if(firstName[0] === lastName[0]){
	nameCond = true;
}
// else{
// 	nameCond = False;
// }

if(age>=20 && age<=30){
	ageCond = true;
}
// else{
// 	ageCond = False;
// }

if(height>=170){
	heightCond = true;
}
// else{
// 	heightCond = False;
// }

if(petName[petName.length-1] === "y"){
	petCond = true;
}
// else{
// 	petCond = False;
// }

//Final Condition
if(nameCond && ageCond && heightCond && petCond == true){
	console.log("Hello Comrade! You've passed the spy test");
}
else{
	console.log("You're a nobody. There's nothing for you here!");
}