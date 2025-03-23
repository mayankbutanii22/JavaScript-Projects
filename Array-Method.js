let software = ['Illustrator','Photoshop','Corel','Indesign'];
 
console.log(software[1]);



let software1 = ['Illustrator','Photoshop','Corel','Indesign'];
 
console.log(software1.length);


let software2 = ['Illustrator','Photoshop','Corel','Indesign'];
 
software2.push('Premiere');
console.log(software2);



let software3 = ['Illustrator','Photoshop','Corel','Indesign'];
 
software3.unshift('Premiere');
console.log(software3);



let software4 = ['Illustrator','Photoshop','Corel','Indesign'];
 
software4.pop();
console.log(software4);



let software5 = ['Illustrator','Photoshop','Corel','Indesign'];
 
software5.shift();
console.log(software5);




let software6 = ['Illustrator','Photoshop','Corel','Indesign'];
 
software6.splice(1,2);
console.log(software6);



let software7 = ['Illustrator','Photoshop','Corel','Indesign'];

software7.length=0;
software7 = [];
console.log(software7);




let software8 = ['Illustrator','Photoshop','Corel','Indesign'];

let position = software8.indexOf('Corel');

console.log(position);



let text = 'My Name is Mayank Butani';

let wordarray = text.split(' ');

console.log(wordarray);
console.log(wordarray[4]);





let software9 = ['Illustrator','Photoshop','Corel','Indesign'];

let textarray = software9.join('-');
console.log(textarray);



let software10 = ['Illustrator','Photoshop','Corel','Indesign'];

let software11 = ['Premiere','Audition'];

let newsoftware = software10.concat(software11);
console.log(newsoftware);

let software12 = [
    ['Illustrator','1 Months'],
    ['Photoshop','2 Months'],
    ['Corel','3 Months'],
    ['Indesign','4 Months']
];
console.log(software12[1]);
console.log(software12[2][0]);