// =======> Question:33 <=======

//ordinal numbers
let ordinalNumbers:number[] = [1 , 2, 3, 4, 5 , 6, 7, 8 , 9,];

//using for loop
for(let oneNumber of ordinalNumbers){
    let ending: string;

    if(oneNumber === 1){
        ending = "st";
    }
    else if(oneNumber === 2){
        ending = "nd";
    }
    else if(oneNumber === 3){
        ending = "rd";
    }
    else{
        ending = "th";
    }
    console.log(`${oneNumber}${ending}`);
}