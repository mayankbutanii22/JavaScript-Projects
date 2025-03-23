var headerTitle = document.getElementById('header-title');

console.log(headerTitle);



headerTitle.textContent = 'Computer Courses';
console.log(headerTitle);

headerTitle.innerHTML = 'Pro Courses';
headerTitle.textContent = 'Pro Courses';

headerTitle.innerHTML = '<h1>Hello World</h1>';

var header = document.getElementById('content');
header.style.border = '5px solid #000';
header.style.background = 'black';
header.style.color = 'white';
header.style.fontSize = '20px';



var items = document.getElementsByClassName('list-item');
console.log(items);
console.log(items[1]);
console.log(items[2]);

items[1].textContent = 'Animation';
items[2].textContent = 'Motion Graphics';
items[3].textContent = 'Digital Marketing';

items[2].style.fontWeight = 'bold';
items[3].style.color = 'red';
items[2].style.backgroundColor = 'aqua';

for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = 'Yellow';
}




var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
console.log(li[2]);
li[1].textContent = 'Animation';
li[2].textContent = 'Motion Graphics';
li[3].textContent = 'Digital Marketing';

li[2].style.fontWeight = 'bold';
li[3].style.color = 'red';
li[2].style.background 
for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = 'Yellow';
}