//question 42
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
//calling the_great function to modify magician names and storing it in a variable
var great_magicians = the_great(magicians_name);
//calling show_magicians to print the modified array/
show_magicians(great_magicians);
