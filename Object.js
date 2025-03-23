let person = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26
};
console.log(person);
document.write(person + "<br> <br>");
document.write(person.firstname + "<br>");
document.write(person.lastname + "<br>");
document.write(person.age + "<br> <br> <br>");


// Object me Property Change Kaise Kare
let person1 = {
    firstname:'Istakar',
    lastname:'Husain',
    age:40
};
person1.firstname='Mayank';
person1.lastname='Butani';
person1.age=26;

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1);
document.write(person1 + "<br> <br> <br>");



//Object me New Property Kaise Add Kare
let person2 = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26
};
person2.email='mayankbutanii22@gmail.com';
console.log(person2);



//Object me Property ko Delete Kaise Kare
let person3 = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26
};
delete person3.age;
console.log(person3);



//Object me Property True and False Kaise Check Kare
let person4 = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26
};

console.log(person4.email);
console.log('age' in person4);
console.log('firstname' in person4);
console.log('lastname' in person4);



//Object me Sabhi Property ko Kaise Aek Sath Show(run) Kare
let person5 = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26
};
let name;
for(name in person5){
    console.log(name + ':' + person5[name]);
    document.write(name + ':' + person5[name] + "<br>");
};



//Object me Array Kaise Banaye
let person6 = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26,
    hobbies:['Listerning Music','Car Driving','Talking to People']
};
console.log(person6);
console.log(person6.hobbies);
console.log(person6.hobbies.length);



//Object me Object Property Kaise Use Kare
let person7 = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26,
living:{
    'city':'Amreli',
    'state':'Gujrat',
    'country':'India'
}   
};
console.log(person7);
console.log(person7.living);
console.log(person7.living.city);
console.log(person7.living.state);
console.log(person7.living.country);



//object me function kaise banaye
let person8 = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26,
    salary:function(){
        // console.log(20000);
        return 20000;
    }
};
console.log(person8.salary());



//object me function se Do(2) Property ko Kaise Jode
let person9 = {
    firstname:'Mayank',
    lastname:'Butani',
    age:26,
    email:'mayankbutanii22@gmail.com',
    password:'abcd@228',
    fullname:function(){
        return this.firstname + ' ' + this.lastname + ' ' + this.age + ' ' + this.email + '  ' + this.password;
    }
}
console.log(person9.fullname());