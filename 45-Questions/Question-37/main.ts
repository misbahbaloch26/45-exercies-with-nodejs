// ======> question:37 <=======

//making a function
function make_shirt( size:string = "large" , message:string = "i love typescript" ){
             console.log(`creating a ${size} shirt with the ${message} printing a message on it.`)
}

//calling the function with by-default values
make_shirt();

//calling the function with medium size and default message
make_shirt("medium")

//calling the function with small size and different message on it
make_shirt("small" , "i love js")