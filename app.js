let char = prompt("Enter a character:");

let ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("Number");
} 
else if (ascii >= 65 && ascii <= 90) {
    console.log("Uppercase Letter");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log("Lowercase Letter");
} 
else {
    console.log("Invalid Input");
}
// Q2
var program = prompt ("number")
// console.log(program)
if(program>10) console.log("bigger")
else if (program<10)console.log("small")
else (program == 10){
    console.log("equal")
}

// Q3

var weat = prompt("weather number")
// console.log(weat)

if(weat>0) console.log("positive")
else if(weat<0) console.log("negative")
    else console.log("Zero")
// Q4
var vowel = promt("vowel")

if(vowel=== "a"  || vowel ==="e" || vowel ==="i" || vowel ==="o" 
    || vowel ==="u") console.log("vowel")
else{
    console.assert.log("not vowel")
}
// Q5
var c_pass = haseebkhan 
var u_pass = prompt("give password")
if(c_pass === u_pass) console.log("correct")
    else if (!u_pass) console.log("please enter pass")
else console.log("incorret password")

// Q6
var greeting;
var hour= 13;
if (hour<18){greeting = "Good Evening";}
else {
greeting = "Good Night"
}

// Q7

var time = promt("enter Time in 24 hour format")

if(time >= 500 && time < 1200) console.log("Good Morning")
else if (time>=1200 && time<1700) console.log(" Good Afternoon")
else if (time>=1700 && time <2300) console.log("Good Evening")
else if (time>= 2350 && time <2359)console.log ("Good Night")
else { console.log("Invalid Number")}



