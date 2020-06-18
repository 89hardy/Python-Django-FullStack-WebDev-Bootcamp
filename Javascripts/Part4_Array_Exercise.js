// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(){
	var newName = prompt("Add the new name:");
	roster.push(newName);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(){
	var delName = prompt("Enter the name you want to remove:");
	var delIndex = roster.indexOf(delName);
	roster.splice(delIndex, 1); //second param tells the number of elements to be removed
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//


// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(){
	console.log(roster);
}

// Start by asking if they want to use the web app
var yesNo = prompt("Would you like to use this app(y/n):");
var response = "empty";

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if (yesNo === "y"){
	while(response !== "quit"){
		response = prompt("Would you like to add, remove, display or quit: ");

		if (response === "add"){
			addNew();
		}

		if (response === "remove"){
			remove();
		}

		if (response === "display"){
			display();
		}
		if (response === "quit"){
			break;
		}
	}
}
alert("Please refresh the page to start again!");