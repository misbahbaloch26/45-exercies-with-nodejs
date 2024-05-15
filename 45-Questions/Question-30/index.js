//question: 30
//hello admin
var userNames = ["admin", "eric", "justin", "elif", "harry"];
//using for each method for array
userNames.forEach(function (userOne) {
    if (userOne === "admin") {
        console.log("hello ".concat(userOne, ": would you like to see the status report?"));
    }
    else {
        console.log("hello ".concat(userOne, "! \t Thank you for logging again."));
    }
});
