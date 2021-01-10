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


var myMsg = [
    "Msg 1",   // 0 index
    "Msg 2",   // 1 index
    "Msg 3",   // 2 index
    "Msg 4"    // 3 index
];

console.log(myMsg);

myMsg[4] = "Msg 5"; // 4 index

console.log(myMsg);




