'use strict';

// 3. Write a function to reverse a string (provided as an argument)
​
const string1 = "bingo";
​
const reverseString = (strVar) => {
    let newString = "";
    for (let i = (strVar.length - 1); i >= 0; i--) {
        newString += strVar[i]
    }
    return newString;
}
​
console.log("The reverse of ", string1, " is ", reverseString(string1));