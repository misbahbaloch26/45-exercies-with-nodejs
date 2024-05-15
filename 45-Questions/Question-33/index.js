//ordinal numbers
var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//using for loop
for (var _i = 0, ordinalNumbers_1 = ordinalNumbers; _i < ordinalNumbers_1.length; _i++) {
    var oneNumber = ordinalNumbers_1[_i];
    var ending = void 0;
    if (oneNumber === 1) {
        ending = "st";
    }
    else if (oneNumber === 2) {
        ending = "nd";
    }
    else if (oneNumber === 3) {
        ending = "rd";
    }
    else {
        ending = "th";
    }
    console.log("".concat(oneNumber).concat(ending));
}
