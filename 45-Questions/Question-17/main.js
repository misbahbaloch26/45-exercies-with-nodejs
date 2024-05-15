//*****QUESTION NO# 16*****
//more guests
//starting with exercise  15                  
var guestList = ["misbah", "sajida", "urooj", "iqra"]; //guestlist in array
//stored a guest in variable who can't join for dinner
var notComing = guestList[0];
console.log(notComing, "can not join us for dinner");
//adding and removing the value from array with help of splice
guestList.splice(0, 1, "saba");
//printing messege for bigger table
console.log("good news! we found a bigger table for dinner");
//adding new guest   in starting index of an array
guestList.unshift("uzma");
//ading new guest in ending index of array
guestList.push("zoya");
//finding middle index of array
var middleIndex = Math.floor(guestList.length / 2);
//adding new guest in middle index of array
guestList.splice(middleIndex, 0, "rida");
//sending new invitation
guestList.forEach(function (oneGuest) { return console.log("hello ".concat(oneGuest, " would you like to join us for dinner")); });
//exercise 17
// Shrinking Guest List
console.log("sorry the dinner table wont arrive on time so sadly i have to invite only two person");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry ".concat(removedGuest, " i cannot invite you to dinner"));
}
console.log("invitation for last 2 guests");
guestList.forEach(function (lastTwo) { return console.log("congratulations ".concat(lastTwo, "you are still invited ")); });
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
