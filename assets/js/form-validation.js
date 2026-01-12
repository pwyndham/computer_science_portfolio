//// JavaScript Document
//
//var elFirstName = document.getElementById('firstName');
//var elLastName = document.getElementById('lastName');
//var elEmail = document.getElementById('email');
//var elPhoneNumber = document.getElementById('phoneNumber');
//var elUsername = document.getElementById('username');
//var elPassword = document.getElementById('password');
//var elComments = document.getElementById('comments');
//var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//var validRegexDigit = /^\d+[10]$/;
//
//function checkLength(inputEl,statusEl,minLength,inputGroup) 
//{
//	var elStatus = document.getElementById(statusEl); //prep var for status update
//	var elInput = document.getElementById(inputEl); //prep var for input element
//	var elGroup = document.getElementById(inputGroup);
//	
//	if (elInput.value.length < 1) 
//	{
//		elStatus.innerHTML = inputEl.toUpperCase() + " CANNOT BE NULL";
//		elGroup.classList.add('has-error');
//	}
//	else if (elInput.value.length < minLength) 
//	{
//		elStatus.innerHTML = inputEl.toUpperCase() + " must be at least " +minLength+ " characters!";
//		elGroup.classList.add('has-error');
//	} 
//	else 
//	{
//		elStatus.innerHTML = "";
//		elGroup.classList.remove('has-error');
//		elGroup.classList.add('has-success');
//	}
//}
//
//function emailValidation(inputEl,statusEl,inputGroup,validRegex)
//{
//	var elStatus = document.getElementById(statusEl); //prep var for status update
//	var elInput = document.getElementById(inputEl); //prep var for input element
//	var elGroup = document.getElementById(inputGroup);
//	
//	if (validRegex.exec(elInput.value))
//	{
//		elStatus.innerHTML = "";
//		elGroup.classList.remove('has-error');
//		elGroup.classList.add('has-success');
//	}
//	else if (!validRegex.exec(elInput.value))
//	{
//		elStatus.innerHTML = "INVALID EMAIL!";
//		elGroup.classList.add('has-error');
//	}
//
//}
//
//function phoneNumberValidation(inputEl,statusEl,inputGroup,validRegexDigit)
//{
//	var elStatus = document.getElementById(statusEl); //prep var for status update
//	var elInput = document.getElementById(inputEl); //prep var for input element
//	var elGroup = document.getElementById(inputGroup);
//	
//	if (elInput.value.length < 1) 
//	{
//		elStatus.innerHTML = "PHONE NUMBER CANNOT BE NULL";
//		elGroup.classList.add('has-error');
//	}
//	else if (validRegexDigit.exec(elInput.value))
//	{
//		elStatus.innerHTML = "";
//		elGroup.classList.remove('has-error');
//		elGroup.classList.add('has-success');
//	}
//	else if (!validRegexDigit.exec(elInput.value))
//	{
//		elStatus.innerHTML = "PHONE NUMBER MUST BE 10 DIGITS!";
//		elGroup.classList.add('has-error');
//	}
//}
//
//elFirstName.addEventListener('blur', function() {
//	checkLength('firstName','firstNameStatus',2,'firstNameGroup');}, false);
//elLastName.addEventListener('blur', function() {
//	checkLength('lastName','lastNameStatus',2,'lastNameGroup');}, false);
//elUsername.addEventListener('blur', function() {
//	checkLength('username','usernameStatus',6,'usernameGroup');}, false);
//elPassword.addEventListener('blur', function() {
//	checkLength('password','passwordStatus',6,'passwordGroup');}, false);
//elComments.addEventListener('blur', function() {
//	checkLength('comments','commentsStatus',0,'commentsGroup');}, false);
//
//elPhoneNumber.addEventListener('blur', function() {
//	phoneNumberValidation('phoneNumber','phoneNumberStatus','phoneNumberGroup',validRegexDigit);}, false);
//elEmail.addEventListener('blur', function() {
//	emailValidation('email','emailStatus','emailGroup',validRegex);}, false);
//
