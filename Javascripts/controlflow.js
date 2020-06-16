var hot = false
var temp = 49

if (temp>80) {
	console.log("Hot!")
}

else if (temp<80 && temp>50){
	console.log("Pleasant temp!")
}
else{
	console.log("Cold!")
}



//While Loop

var x = 0;

while (x<5){

console.log("x is currently: "+x);

if (x===3){
	console.log("X is now THREE");
	break;
}

console.log("x is currently less than 5, adding 1 to x");

x = x +1;
}

//console.clear()
//WHILE LOOPS EXERCISE

var y = 0;

while (y<11){
if (y%2===0){
	console.log(y+ " is an even number");
}

y = y+1;
}

//console.clear()

//FOR LOOPS

for (var i = 0; i < 5; i++) {
	console.log("Number is "+i);
}


var word = "ABCDEFGHI"
for (var i = 0; i < word.length; i++) {
	console.log(word[i]);
}
