                    //*****QUESTION NO# 17*****
                         //shrinking guest list
                         
//starting with exercise  16                
let guestList = ["misbah" , "sajida" , "urooj" , "iqra"];//guestlist in array

//stored a guest in variable who can't join for dinner
let notComing = guestList[0];
console.log(notComing, "can not join us for dinner");

//adding and removing the value from array with help of splice
guestList.splice(0,1, "saba");

//printing messege for bigger table
console.log("good news! we found a bigger table for dinner");





//adding new guest   in starting index of an array
guestList.unshift("uzma");

//ading new guest in ending index of array
guestList.push("zoya");

//finding middle index of array
let middleIndex = Math.floor(guestList.length / 2);

//adding new guest in middle index of array
guestList.splice(middleIndex, 0 , "rida");

//sending new invitation
guestList.forEach(oneGuest => console.log(`hello ${oneGuest} would you like to join us for dinner`)
)


         // ============= exercise 17  ================
// Shrinking Guest List

console.log("sorry the dinner table wont arrive on time so sadly i have to invite only two person");



//using while loop to remove element from our array until 2 element remains
while(guestList.length > 2){
   let removedGuest =  guestList.pop();
   console.log(`sorry ${removedGuest} i cannot invite you to dinner`);   
}


console.log("invitation for last 2 guests");


guestList.forEach(lastTwo => console.log(`congratulations ${lastTwo}you are still invited `))


guestList.pop();
guestList.pop();

console.log("Empty list" , guestList);