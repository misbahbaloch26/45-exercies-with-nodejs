// ------> question:32 <--------

// current users
let currentUsers:string[] = ["sajida" , "iqra" , "aleena" , "saba" ,"urooj"];


// new users
let newUsers:string[] = ["ayesha" , "uzma" , "Sajida" , "urooj"];


//loop through new users to check for user_name availablity 
newUsers.forEach(one_new_user => {


//making a condition for username already exist & saved in ourCondition variable
let ourCondition = currentUsers.some(currentOneuser => currentOneuser.toLowerCase() === one_new_user.toLowerCase())
   


//printing different messeges with if else
if( ourCondition){
        console.log(`sorry ${one_new_user} is already taken.`)
    }else{
        console.log(`this user_name ${one_new_user} is available.`)
    }
})