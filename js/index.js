// Iteration 1: Names and Input

const hacker1 = "Fernando Alonso";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Alpine F1 Racing Team";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
};
if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
};
if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
};

// Iteration 3: Loops

//3.1
let bigNameWithSpaces = "";
for (i = 0; i < hacker1.length; i++){
    bigNameWithSpaces = bigNameWithSpaces + hacker1[i] + " ";
};
bigNameWithSpaces = bigNameWithSpaces.toUpperCase();
bigNameWithSpaces.trim();
console.log(bigNameWithSpaces);

//3.2
let reverseName = "";
for (i = hacker2.length-1; i>-1; i--){
    reverseName = reverseName + hacker2[i];
};
console.log(reverseName);

//3.3

//Default value is that both are the same. We iterate until we find out if one of the strings goes first lexicographically.
let result = 0;

//Iterate. We only need to iterate as long as the shortest length. 
for (i=0; i<Math.max(hacker1.length, hacker2.length); i++){
    if (hacker1[i]<hacker2[i]){
        result = 1;
        break;
    }
    if (hacker1[i]>hacker2[i]){
        result = 2;
        break;
    }
}

//Particular case: if after the loop 'result' stays the same, it means both strings have the same chars but one is actually longer.
//We always need to check if a string is shorter than the other because it may have implications.
if ((result === 1) || (result === 0 && hacker1.length<hacker2.length)) {
  console.log("The driver's name goes first.");
}

if ((result === 2) || (result === 0 && hacker1.length>hacker2.length)) {
  console.log("Yo, the navigator's name goes first.");
}

if (result === 0 && hacker1.length === hacker2.length){
  console.log(`What?! You both have the same name?`)
}


//BONUS TIME 2 - no methods, loops only
//We are treating empty spaces as another character. 'race car' is therefore not a palindrome :)
const phraseToCheck = "race car";
let isPalindrome = true;
for (i = 0; i<phraseToCheck.length; i++) {
    //loop starts at 0 but we check at the same time both ends of the string using the string's length as the last character
    if (phraseToCheck[i]!=phraseToCheck[phraseToCheck.length-1-i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("It's a palindrome!");
}
else {
    console.log("Sorry bro");
} 