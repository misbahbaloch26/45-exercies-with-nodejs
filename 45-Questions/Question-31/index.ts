//  ------> Question no# 31 <--------

//no users

let user_names = ["admin" , "eric" , "justin" , "elif" , "harry"];

user_names=[]

if(user_names.length === 0){
    console.log("your array is empty, we need to fill this")
}else{
    user_names.forEach(userOne => {
        if(userOne === "admin"){
    console.log(`hello ${userOne}: would you like to see the status report?`)
        }else{
            console.log(`hello ${userOne}! \t Thank you for logging again.`)
        }
    })
}
    

