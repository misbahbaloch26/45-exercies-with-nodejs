// Question no# 15
//changing guest list
var guestNames = ["bablu", "banti", "koko"];
var notComing = guestNames[0];
console.log(notComing, "cannot join us for dinner.");
//.splice() revomes and add new element in an array. 
//(remove index 0 , add new element in index 0 , new element)
guestNames.splice(0, 0, "dazzy");
guestNames.forEach(function (newGuest) { return console.log("hello ".concat(newGuest, " would you like to join us for dinner?")); });
