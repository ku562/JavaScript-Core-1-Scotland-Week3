
// We want a new array with all the numbers doubled

let numbersList = [5, 3, 15, 8, 24, 31, 12];

function doubleValue(x){
    return x * 2;
}

let doubledNumbers = [];
for(let i = 0; i < numbersList.length; i++){
let a = doubleValue(numbersList[i]);
doubledNumbers.push(a);
}
// Write a "for" loop to ITERATE through the numbersList array
// Call the function doubleValue for each number and ADD (push) the result to the doubledNumbers array





console.log(doubledNumbers);