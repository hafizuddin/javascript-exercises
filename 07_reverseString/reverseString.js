// const reverseString = function(string) {
//     let reversed = "";
//     for (let i = string.length -1; i >= 0; i--){
//         reversed += string[i];
//     }
//     return reversed;
// };

// or using .reverse method but need to remember this method is for array
// so "convert" string to array using split then join them back 

// const reverseString = function(string) {
//     return string.split("").reverse().join("");
// };


const reverseString = string => string.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
