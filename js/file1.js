// console.log("Hello world")
// var a=45;
// var b="Hello"
// console.log(a);

// var num1=2;
// var num2=5;

// console.log("The value of num1 + num2 is " + (num1+num2));
// console.log("The value of num1 - num2 is " + (num1-num2));
// console.log("The value of num1 * num2 is " + (num1*num2));
// console.log("The value of num1 / num2 is " + (num1/num2));
// console.log("The value of num1 ** num2 is " + (num1**num2));
// console.log("The value of num1++ is " + (num1++));
// console.log("The value of ++num1 is " + (++num1));
// console.log("The value of num2-- is " + (num2--));
// console.log("The value of --num2 is " + (--num2));

var string = 'He"llo';
console.log(string);
// var name = 'JavaScript';
// var type = 'Programming Language';
// var temp = `${name} is a ${type} of web`;
// console.log(temp);

// var len = name.length;
// console.log(`length of ${name} is ${len}`);

// console.log('Hello...\n"This is Testing code" ')

// // constructor
// var y = new String("Hello");
// console.log(y);

// String Functions
var str = "This is a string.";
console.log(str);

// First Occurence of substring
// var pos=str.indexOf('is');
// console.log(pos);

// // last occurence of substring
// var lpos=str.lastIndexOf('is');
// console.log(lpos);

// SubString from a string
// var substr = str.slice(1,9);
// slice can take neg values but substring can't
// var substr = str.substring(1,8);
// var substr1 = str.substr(1,3);
// console.log(substr1);

// var rep=str.replace('string','shreya');
// console.log(str);
// console.log(rep);

// console.log(str.toUpperCase());
// console.log(rep.toLowerCase());

// var newstring=str.concat('Hello');
// console.log(newstring);

// var wspace = "   this is   white space   ";
// console.log(wspace);
// console.log(wspace.trim());

// To extract characters from string
// var char3=str.charAt(2);
// console.log(char3);

// // scope of variable
// let a='u';//global a
// {
//     let a ='u6';//local a
//     console.log(a);//u6
// }
// console.log(a);//u

// const b ="This can't be changed";
// console.log(b);

//if..else
let age = 34;
if (age > 18) {
    console.log("You can drive car!!");
}
else if (age == 16) {
    console.log("you can drive Scooter!");
}
else {
    console.log("You can't drive!!");
}

//Switch
const cups = 45;
switch (cups) {
    case 4:
        console.log("The value of cups is 4");
        break;
    case 41:
        console.log("The value of cups is 41");
        break;
    case 42:
        console.log("The value of cups is 42");
        break;
    default:
        console.log("The value of cups is not found!!");
        break;
}

//Array
let myVar = 34;
let myVar2 = "string";
let employee = {
    name: "Shreya",
    course: "B.sc.",
    channel: "python"
}
console.log(employee);
employee.name
employee['channel']


let names = [1, 2, 5, "hello", undefined];
let name2 = new Array(1, 2, 3, 4, 4, 7);//secound method
console.log(name2.length);
console.log(names[3]);
names.push("This is pushed");
console.log(names);

let n = new Array(23);
console.log(n)
//empty array with the length of 23

//Functions

function greet(name, text = "Good Day Ahead!") {
    let rno = 233;//local variable
    console.log("Hello! " + name + "." + text);
    console.log(name + ", Your Room number is " + rno + "!");
}
let n1 = "Shreya";
let n2 = "Purva";
let text = " Have a Nice Day!";
greet(n1, text);
greet(n2);



function sum(a = 5, b = 4, c = 7) {
    let d = a + b + c;
    return d;
}
console.log(sum());

// Alert in JS
// Alert in in-brower Javascript-Doesn't return anything
// alert("This is a message!");

// Prompt in JS
// If you want to ask something from user
// let naam = prompt("What is your name?", "Guest");
// console.log(naam);

// // Confirm in JS
// let deletePost = confirm("Do you want to delete this post?");
// // console.log(deletePost);
// if (deletePost) {
//     //to delete post
//     console.log("Your post has been Deleted!!!")
// }
// else {
//     //to cancel delete
//     console.log("Your post hasn't Deleted!!!")
// }

//For loop
// for (i = 0; i < 3; i++) {
//     console.log(i);
// }

let friends = ["Rohan", "Rahul", "Deepti", "Pooja", "Kunal"];
// for (let index = 0; index < friends.length; index++) {
//     let element = friends[index];
//     console.log("Hello Friend "+element+"!");
// }

// another approach
// friends.forEach(function f(element){
//     console.log("Hello Friend "+element+"!");
// });

// Another approach
for (element of friends) {
    console.log("Hello Friend " + element + "!");

}

// Use this loop to iterate over js obj
let employee1 = {
    name: "Shreya",
    course: "B.sc.",
    channel: "python"
}
for (key in employee1) {
    console.log(`The ${key} of employee is ${employee[key]}`);
}

// While in js
let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}

// Do..While loop
let j = 5;
do {
    console.log(`${j} is less than 4 and we are inside do while loop!`);
    j++;

} while (j < 4);

// Event & Listening to events
// Browerevents
// click
// contextmenu
// mouseover/mouseout
// mousedown / mouseup
// mousemove 
// form Event :submit
// focus
// DomContentloaded
// transitioned

