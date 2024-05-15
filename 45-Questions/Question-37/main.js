//question:37
//making a function
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(message, " printing a message on it."));
}
//calling the function with by-default values
make_shirt();
//calling the function with medium size and default message
make_shirt("medium");
//calling the function with small size and different message on it
make_shirt("small", "i love js");
