// JavaScript Document


var elMsg = document.getElementById('usernameFeedback');
var elUsername = document.getElementById('username');
function checkUsername(minLength)
{
if (elUsername.value.length < minLength)
{
elMsg.innerHTML = 'Username must be '+minLength+' characters or more';
}
else
{
elMsg.innerHTML = '';
}
}
elUsername.addEventListener('blur', function() {
checkUsername(6);
},false);


var elMsg2 = document.getElementById('passwordFeedback');
var elPassword = document.getElementById('password');
function checkPassword(minLength)
{
if (elPassword.value.length < minLength)
{
elMsg2.innerHTML = 'Password must be '+minLength+' characters or more';
}
else
{
elMsg2.innerHTML = '';
}
}
elPassword.addEventListener('blur', function() {
checkPassword(8);
},false);
