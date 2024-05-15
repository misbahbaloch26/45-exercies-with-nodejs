//question 44
//making sandwich with function
//funcation with rest parameter that accepts items arguments representing our sandwich
function makingSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n <---making a sandwich with following items---> \n");
    items.forEach(function (oneItem) { return console.log(oneItem); });
}
//calling the function with 3 different aruments
makingSandwich("bread", "egg", "cheese");
makingSandwich("bread", "boiled egg", "mayo", "cheese", "black paper");
makingSandwich("butter", "chicken", "kebab", "tomato");
