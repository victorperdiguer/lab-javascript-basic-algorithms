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
let bigNameWithSpaces;
for (letter in hacker1){
    bigNameWithSpaces = bigNameWithSpaces + letter + " ";
};
bigNameWithSpaces = bigNameWithSpaces.toUpperCase();
bigNameWithSpaces.trim();
console.log(bigNameWithSpaces);

//3.2
let reverseName;
for (i = hacker2.length; i--; i==0){
    reverseName = reverseName + hacker2[i];
};
console.log(reverseName);

//3.3
