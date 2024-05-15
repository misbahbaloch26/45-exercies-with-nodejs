//question: 45
//car
//function stores car object with options
function carObject(manufacturer, modal) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initializing car object
    var car = {
        manufacturer: manufacturer,
        modal: modal,
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//calling the function 
var myCar = carObject("toyota", "civic", "color:black");
console.log(myCar);
