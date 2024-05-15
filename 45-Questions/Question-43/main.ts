// ====== question 43 =======>
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

//making a copy of original array with .slice() method
let copy_magician_names = magicians_name.slice()

let copyGreatMagicians = the_great(copy_magician_names);

//original
console.log("original array:")
show_magicians(magicians_name);

//copied
console.log("copied array:")
show_magicians(copyGreatMagicians)