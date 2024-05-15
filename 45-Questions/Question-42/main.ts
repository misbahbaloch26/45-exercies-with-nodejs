// =========> Question: 42 <=========
//adding the great 

//function for printing the magician names
function show_magicians(magicians:string[]){
         magicians.forEach(name => console.log(name))
}


//functon for adding the great before magician names with .map() it will modify the array
function the_great(magicians:string[]){
     return magicians.map(name => `the great ${name}`)
}

//magicians name
let magicians_name:string[] = ["banti" , "bablu" , "pinki"];

//calling the_great function to modify magician names and storing it in a variable
let great_magicians = the_great(magicians_name);

//calling show_magicians to print the modified array/
show_magicians(great_magicians);