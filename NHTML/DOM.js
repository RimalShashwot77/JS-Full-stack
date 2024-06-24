const titleElement = document.getElementById('title');
console.log(titleElement.textContent);

let readlinParagraph = document.getElementsByClassName('content');
console.log(readlinParagraph[0].textContent);

let listItemElements = document.getElementsByTagName('li');
console.log(listItemElements.length);


titleElement.textContent = "Suiiii";
console.log(titleElement.textContent);

const paragraphElement = document.querySelector('.content');
paragraphElement.innerHTML = 'this is modified'

var inputElement = document.getElementsById("myInput");
console.log(inputElement.type); // Output: "text"
console.log(inputElement.type); // Output : "Hello, World!"

inputElement.value = "New value";
console.log(inputElement.value); // Output: "New value"

var element = document.getElementById("myElement");
if(element.hasAttribute("attributeName")) {
    // Attribute exists
} else {
    //Attribute does not exist
}

// Create New Element
const newElement = document.createElement('div');
newElement.textContent = 'Newly created element';

// Add new element inside a body in HTML
const bodyElement = document.body;
bodyElement.appendChild(newElement);