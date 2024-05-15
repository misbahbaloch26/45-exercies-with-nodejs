//question : 38
function cities(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//calling the function
cities("karachi");
cities("lahore");
cities("hyderabad");
cities("salmiya", "kuwait");
