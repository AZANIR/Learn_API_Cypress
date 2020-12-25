"use strict";

let test1 = function() {
	setTimeout(function() {
	console.log('Code Starts here!');

	alert('This is an Alert!');

	console.log('Code Ends here!')

	}, 5);
};

let test2 = function() {
	console.log("Please notice me!");
}

test1();
test2();