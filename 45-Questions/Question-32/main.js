//question:32
//array of current users
var currentUsers = ["sajida", "iqra", "aleena", "saba", "urooj"];
//array of new users
var newUsers = ["ayesha", "uzma", "Sajida", "urooj"];
//loop through new users to check for user_name availablity 
newUsers.forEach(function (one_new_user) {
    //making a condition for username already exist & saved in ourCondition variable
    var ourCondition = currentUsers.some(function (currentOneuser) { return currentOneuser.toLocaleLowerCase() === one_new_user.toLocaleLowerCase(); });
    //printing different messeges with if else
    if (ourCondition) {
        console.log("sorry ".concat(one_new_user, " is already taken."));
    }
    else {
        console.log("this user_name ".concat(one_new_user, " is available."));
    }
});
