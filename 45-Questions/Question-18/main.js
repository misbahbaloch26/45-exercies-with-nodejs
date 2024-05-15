var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//quuestion 18
// favourite countries in an array
var fvrtCountries = ["dubai", "argentina", "china", "brazil"];
console.log("orignal order:", fvrtCountries);
//alphabetical order without modifying the actual one
console.log("alphabetical order", __spreadArray([], fvrtCountries, true).sort());
//show that array is in still order
console.log("still in original order", fvrtCountries);
///
//printing the array in reverse order without modifying the original order
console.log("reverse order", __spreadArray([], fvrtCountries, true).reverse());
//show that array is in still order
console.log("still in original order", fvrtCountries);
//printing the array in reverse order in the original order
console.log("original order reverse", fvrtCountries.reverse());
//printing the array in reverse order back
console.log("back to original order", fvrtCountries.reverse());
//printing the array to show that it is in back to alphabetical order
console.log("sorted back into alphabetical order", fvrtCountries.sort());
//printing back the original order array in reverse order again
console.log("original order reverse", fvrtCountries.reverse());
