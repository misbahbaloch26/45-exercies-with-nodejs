// ====== question 43 =======>
//adding the great 
//function for printing the magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//functon for adding the great before magician names with .map() it will modify the array
function the_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//magicians name
var magicians_name = ["banti", "bablu", "pinki"];
//making a copy of original array with .slice() method
var copy_magician_names = magicians_name.slice();
var copyGreatMagicians = the_great(copy_magician_names);
//original
console.log("original array:");
show_magicians(magicians_name);
//copied
console.log("copied array:");
show_magicians(copyGreatMagicians);
