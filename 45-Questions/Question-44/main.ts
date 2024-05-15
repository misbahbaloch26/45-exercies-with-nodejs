//======> Question: 44 <=========
//making sandwich with function

//funcation with rest parameter that accepts items arguments representing our sandwich
function makingSandwich(...items:string[]){
       console.log(`\n <---making a sandwich with following items---> \n`);
       items.forEach(oneItem => console.log(oneItem));

}

//calling the function with 3 different aruments
makingSandwich("bread" , "egg" , "cheese" , );
makingSandwich("bread" , "boiled egg" , "mayo" , "cheese" , "black paper");
makingSandwich("butter" , "chicken" , "kebab" , "tomato");
