 // Question no# 15
 //changing guest list

 let guestNames = ["bablu" , "banti" , "koko" ];

 let notComing = guestNames[0];

 console.log(notComing , "cannot join us for dinner.");


//.splice() revomes and add new element in an array. 
//(remove index 0 , add new element in index 0 , new element)
 guestNames.splice(0 , 0 , "dazzy");

 
 guestNames.forEach(newGuest => console.log(`hello ${newGuest} would you like to join us for dinner?`)
 );