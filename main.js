/*global console, alert, propt*/
// första exampel om array är array eller nåt annat
// Get och Set

/*
// To String
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toString();
*/


/*
// To Locale String
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toLocaleString();
*/

/*
// To Join
1
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();

2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join(" and ");
*/


/*
var myMsg = "Welcome To that websait";

if (Array.isArray(myMsg)){

    console.log("Yes This Is Array");

}else{
    console.log("No This Is Not Array");
}
*/
/*
var myMsg = [

    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"

];

if (Array.isArray(myMsg)) {

    console.log("Yes This Is Array");

} else {
    console.log("No This Is Not Array");
}
*/
/* 

var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
                               // Get och Set 
console.log(myMsg.length);

console.log(myMsg);

myMsg.length =2;

console.log(myMsg);
*/
/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
console.log(myMsg);

console.log(myMsg.toString()); // To String
*/

/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
console.log(myMsg);

console.log(myMsg.toLocaleString()); // To Locale String
*/

/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];

var myDate = new Date();

myString = myDate.toString();

console.log(myString);
*/
/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];

var myDate = new Date();

myString = myDate.toString();
console.log(myDate);


console.log(myString);
*/
/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];

var myDate = new Date();

myString = myDate.toLocaleString();

console.log(myDate);


console.log(myString);
*/

/*
// To Join
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
console.log(myMsg.join());
*/

/*
// To Join
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
console.log(myMsg.join(" - "));
*/

/*
// To Join
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
console.log(myMsg.join(" and "));
*/

/*
// Hur Kan Jag Ligga Ett Element Till Array
var myMsg = [
    "Msg 1",   // 0 index
    "Msg 2",   // 1 index
    "Msg 3",   // 2 index
    "Msg 4"    // 3 index
];

console.log(myMsg);

myMsg[4] = "Msg 5"; // 4 index

console.log(myMsg);
*/


/*
var myMsg = [
    "Msg 1",   // 0 index and 1 In Length
    "Msg 2",   // 1 index and 2 In Length
    "Msg 3",   // 2 index and 3 In Length
    "Msg 4"    // 3 index and 4 In Length
];
console.log(myMsg);

myMsg[myMsg.length] = "Msg 5"; // 4 index and 5 In Length

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.push("Msg 5");

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.unshift("Msg 0");

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.splice(1 , 2);

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.splice(1 , 4);

console.log(myMsg);
*/
/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.splice(0 , 4);

console.log(myMsg);
*/
/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.splice(1 , 0);

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.splice(1 , 0, "Item 1", "Item 2");

console.log(myMsg);

*/
/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.splice(0 , 0, "Item 1", "Item 2");

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

myMsg.pop();

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

console.log(myMsg.pop);

myMsg.pop();


console.log(myMsg);
*/
/*
var myMsg = [
    "Msg 1", // 0 index and 1 In Length
    "Msg 2", // 1 index and 2 In Length
    "Msg 3", // 2 index and 3 In Length
    "Msg 4" // 3 index and 4 In Length
];
console.log(myMsg);

console.log(myMsg.pop);

console.log(myMsg);
*/
/*
var myMsg = [
    "Msg 1", 
    "Msg 2",
    "Msg 3", 
    "Msg 4" 
];
console.log(myMsg);

console.log(myMsg.shift());

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 2", 
    "Msg 1",
    "Msg 4", 
    "Msg 3" 
];
console.log(myMsg);

myMsg.sort();  // Sort

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 2",
    "Msg 1",
    "Msg 4",
    "Msg 3"
];

console.log(myMsg);

myMsg.reverse();

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 2",
    "Msg 1",
    "Msg 4",
    "Msg 3"
];

console.log(myMsg);

myMsg.sort();

console.log(myMsg);

myMsg.reverse();

console.log(myMsg);
*/
/*
var myMsg = [
    "Msg 2",
    "Msg 1",
    "Msg 4",
    "Msg 3"
];

console.log(myMsg);

myMsg.sort();

console.log(myMsg);

myMsg.reverse();

console.log(myMsg);
*/

/*
var myMsg = [
    "Msg 2",
    "Msg 1",
    "Msg 4",
    "Msg 3"
];
myMsg.sort();

console.log(myMsg.slice(1, 3));
*/
/*
var myMsg = [
    "Msg 2",
    "Msg 1",
    "Msg 4",
    "Msg 3"
];
myMsg.sort();

console.log(myMsg.slice());
*/

/*
var myMsg = [
    "Msg 2",
    "Msg 1",
    "Msg 4",
    "Msg 3"
];
myMsg.sort();

console.log(myMsg.slice(-3, -1));
*/
/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
myMsg.sort();

console.log(myMsg.slice(-3, -1));
*/

/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];
var myMsg2 = [
    "One",
    "Two"
];

console.log(myMsg.concat(myMsg2));
*/
/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];

console.log(myMsg.indexOf("Msg 2"));
*/
/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];

console.log(myMsg.lastIndexOf("Msg 2"));
*/

/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];

console.log(myMsg.lastIndexOf("Msg 2", 3));
*/
/*
var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];

console.log(myMsg.lastIndexOf("Msg 2", 0));
*/

var myMsg = [
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
];

console.log(myMsg.indexOf("Msg 4", 2));


