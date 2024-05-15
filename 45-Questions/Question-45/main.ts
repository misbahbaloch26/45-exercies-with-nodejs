// =====> question: 45 <=======
//car

//function stores car object with options
function carObject(manufacturer , modal , ...options){
      //initializing car object
      let car ={
        manufacturer : manufacturer,
        modal: modal,
      }
//adding aditional options
      options.forEach(option =>{
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim()
      })

      return car
}

//calling the function 
let myCar = carObject("toyota" , "civic" , "color:black");

console.log(myCar);
