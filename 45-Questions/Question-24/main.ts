 // ======> Question no# 24 <========
 
 //testing equality and inequality with string
 let isRaining:string = "raining";
 let upperCaseRaining = "RAINING"

 
console.log("is it raining outside?");
console.log(isRaining == "raining");

console.log("is it raining outside?");
console.log(isRaining != "raining");



///
//TEST using lowerCase functon 
console.log("\n  is RAINING equals to raining after converting to lowercase?");
console.log(upperCaseRaining.toLowerCase() == isRaining);

console.log("\n  is RAINING not equals to raining after converting to lowercase?");
console.log(upperCaseRaining.toLowerCase() != isRaining);



///
//test : numerical values

let ten:number = 10;
let twenty:number = 20;

console.log("\n is ten is equal to 20?");
console.log(ten == twenty);

console.log("\n is twenty grater than 10?");
console.log(twenty > ten);

console.log("\n  ten is not equal to 20?");
console.log(ten != twenty);

console.log("\n is ten is less than 0?");
console.log(ten < 0);

console.log("\n is ten is grater than or  equal to 5?");
console.log(ten >= 5);

console.log("\n is twenty less than or equal to 10?");
console.log( twenty <= ten);



//tests using && and || operators
// (and) && operator
console.log("\n twenty is not equal to 10 & twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

console.log("\n twenty is not equal to 10 & twenty is greater than ten");
console.log(twenty != ten && twenty > 30);

//(or) || operator
console.log("\n twenty is grater then 50 OR twenty is equal to 20");
console.log(twenty > 50 || twenty == 20);

console.log("\n twenty is grater then 50 OR twenty is not equal to 20");
console.log(twenty > 50 || twenty != 20);




//test wether an item includes in array
let fruits:string[] = ["apple" , "mango" , "banana" , "strawberry"] ;

console.log("\n is orange include in my fruits array ");
console.log(fruits.includes("orange"));