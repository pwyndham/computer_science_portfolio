// JavaScript Document
function checkUsername()
{ // Declare function
var elMsg = document.getElementById('usernameFeedback'); // Get feedback element
var elUsername = document.getElementById('username'); // Get username input
	
	if (elUsername.value.length < 5)
	{ // If username too short
		elMsg.innerHTML = 'Username must be 5 characters or more'; // Set msg
		console.log("Username Characters entered: "+elUsername.value.length); //username debug log
	}
	else
	{ // Otherwise
		elMsg.innerHTML = ''; // Clear message
	}
}

function checkPassword()
{ // Declare function
var elMsg2 = document.getElementById('passwordFeedback'); // Get feedback element
var elPassword = document.getElementById('password'); // Get password input
	
	if (elPassword.value.length < 8)
	{ // If username too short
		elMsg2.innerHTML = 'Password must be 8 characters or more'; // Set msg
		console.log("Password Characters entered: "+elPassword.value.length); //password debug log
	}
	else
	{ // Otherwise
		elMsg2.innerHTML = ''; // Clear message
	}
}

var el = document.getElementById('username');
el.onblur = checkUsername;

var el2 = document.getElementById('password');
el2.onblur = checkPassword;