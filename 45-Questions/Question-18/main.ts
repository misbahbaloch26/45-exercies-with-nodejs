 //               ******** Question 18 *******
 // favourite countries in an array

 let fvrtCountries:string[] = ["dubai" , "argentina" , "china" , "brazil"];
console.log("orignal order:" , fvrtCountries);


//alphabetical order without modifying the actual one
//for copying the array [...arrName]  for alphabetical order .sort()
console.log("alphabetical order", [...fvrtCountries].sort());


//show that array is in still order
console.log("still in original order", fvrtCountries);


///

//printing the array in reverse order without modifying the original order
console.log("reverse order" , [...fvrtCountries].reverse());

//show that array is in still order
console.log("still in original order", fvrtCountries);

//printing the array in reverse order in the original order
console.log("original order reverse", fvrtCountries.reverse());


//printing the array in reverse order back
console.log("back to original order" , fvrtCountries.reverse());

//printing the array to show that it is in back to alphabetical order
console.log("sorted back into alphabetical order" , fvrtCountries.sort());


//printing back the original order array in reverse order again
console.log("original order reverse", fvrtCountries.reverse());