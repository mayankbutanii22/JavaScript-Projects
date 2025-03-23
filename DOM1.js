var newDiv = document.createElement('div');

//add class 
newDiv.className = 'box';
//add id 
newDiv.id = 'textBox';

//create text node
var newDivText = document.createTextNode('Mayank Sir will teach all these courses.');
//add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector('#content');

var form = document.querySelector('form');

newDiv.style.color = 'red';
newDiv.style.backgroundColor = 'Yellow';
newDiv.style.border = '3px solid gray';

newDiv.style.padding = '10px';
newDiv.style.margin = '30px 90px 20px 0px';

container.insertBefore(newDiv,form);