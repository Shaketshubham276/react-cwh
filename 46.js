let reg=/harry/g;
// this g is used for global flag and from this it will go full line

reg=/harry/i; //Case sensitivity

console.log(reg.source);
console.log(reg);

let s="This is great code with harry";
// function to match expressions
// 1. exec()-This function will return an array for match or null for no match
let result=reg.exec(s);
// console.log(result);
// result=reg.exec(s);
// console.log(result);
// result=reg.exec(s);
// console.log(result);--->We can use multiple exec with global flag

console.log(result);
console.log(result.input);
console.log(result.index);


//2. test()- Returns true or false
let result2=reg.test(s);
console.log(result2); //-->This will only print true if the "reg" is their in the string


// 3. match()-->it will return an array of result or null
// let result3= reg.match(a)--->This is wrong
let result3= a.match(reg) //--->This is right