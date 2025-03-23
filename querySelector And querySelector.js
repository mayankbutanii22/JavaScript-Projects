//querySelector Start


var headline = document.querySelector('#tagline');
headline.style.color = 'Yellow';

var items = document.querySelector('.list-item');
// items.style.color = 'red';
var items = document.querySelectorAll('.list-item');
// items[0].style.color = 'red';
// items[1].style.color = 'red';
// items[2].style.color = 'red';
// items[3].style.color = 'red'; 


var items = document.querySelector('.list-item:nth-child(1)');
items.style.color = 'Yellow';

var input = document.querySelector('input');
input.value = 'Enter Your Name';

var button = document.querySelector('input[type = "submit"]');
button.style.backgroundColor = 'red';
button.style.color = 'Yellow';
button.value = 'SEND';

//querySelectorAll Start

var items = document.querySelectorAll('li');
items[0].style.color = 'aqua';
items[1].style.backgroundColor = 'red';



var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'Yellow';
}


var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<even.length; i++){
    even[i].style.backgroundColor = 'red';
}