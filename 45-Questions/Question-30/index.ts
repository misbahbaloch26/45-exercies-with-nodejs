//  =========> Question: 30 <==========
//hello admin

let userNames:string[] = ["admin" , "eric" , "justin" , "elif" , "harry"];

//using for each method for printing message
userNames.forEach(userOne => {
    if(userOne === "admin"){
console.log(`hello ${userOne}: would you like to see the status report?`)
    }else{
        console.log(`hello ${userOne}! \t Thank you for logging again.`)
    }
})