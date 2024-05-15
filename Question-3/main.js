//Question no# 03
//name cases
var personsName1 = "misbah baloch";
console.log(personsName1.toLowerCase());
console.log(personsName1.toUpperCase()); //upper case
console.log(personsName1.replace(/\b\w/g, function (title) { return title.toUpperCase(); }));
