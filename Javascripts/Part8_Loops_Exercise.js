/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop

var whileWord = 0;

while (whileWord<5){
	console.log("Hello");

whileWord = whileWord+1;
}


// For Loop

for (forWord = 0; forWord < 5; forWord++){
	console.log("Hello!");
}


/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var oddNum = 0;
while(oddNum<26){
	if(oddNum%2 !== 0){
		console.log(oddNum);
	}
oddNum = oddNum+1;	
}

// METHOD TWO
// For Loop
for (notEven = 0; notEven <= 25; notEven++){
	if(notEven%2 !==0){
		console.log(notEven);
	}
}