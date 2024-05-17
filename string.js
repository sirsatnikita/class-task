// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// let input = "this is javascript";
// let words = input.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// }

// let result = words.join(" ");
// console.log(result);
/********************************************************************** */

// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
// function array(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].toLowerCase().includes("javascript")) {
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// }

// let inputArray = ["javascript", "react", "node"];
// let result = array(inputArray);
// console.log(result);

	
// 	input - ["java","python","c"]
// 	output - [false, false, false]

// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// function array(input) {
//     if (input.includes("@") && (input.includes(".com") || input.includes(".org"))) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let result1 = array("nikita@gmail.com");
// console.log(result1);

// let result2 = array("nikita@navgurukul");
// console.log(result2); 

// 4. 
// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i


// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success