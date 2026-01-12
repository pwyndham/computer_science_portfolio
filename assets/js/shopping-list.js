// JavaScript Document

var elList, addLink, newElement, newText, counter, listItems, customText, nullText, removeButtonElement, newButton;

elList = document.getElementById('list');
addLink = document.getElementById('addToList');
counter = document.getElementById('counter');
customText = document.getElementById('itemName');
removeButtonElement = document.getElementById('removeButton')

//e is basically generic EVENT
function addItem(e) {
	e.preventDefault(); //prevent link action if page is not ready
	newElement = document.createElement('div'); // create div inside shopping list
	newButton = document.createElement('removeButton');
	newText = document.createTextNode(customText.value); // custom text to display inside div
	nullText = document.createTextNode("Null");
	
	if (customText.value < 1) {
		
		newElement.classList.add('alert'); //add alert class to div
		newElement.classList.add('alert-danger'); //add alert danger class to div
		newElement.appendChild(nullText); //add text to div
		elList.appendChild(newElement); // add full configured div to shopping list
		elList.appendChild(newButton);
		
		console.log("TEXT CANNOT BE NULL");
	} else {
		newElement.classList.add('alert'); //add alert class to div
		newElement.classList.add('alert-info'); //add alert info class to div
		newElement.appendChild(newText); //add text to div
		elList.appendChild(newElement); // add full configured div to shopping list
		elList.appendChild(newButton);
	}
	
}

function removeItem(e) {
	e.preventDefault();
	
	
}

function updateCounter() { 
	listItems = elList.getElementsByTagName('div').length; //get total number of divs in our list
	counter.innerHTML = listItems; //update the shopping list count
}


addLink.addEventListener('click', addItem, false);
removeButtonElement.addEventListener('click', removeItem, false);
elList.addEventListener('DOMNodeInserted', updateCounter, false);