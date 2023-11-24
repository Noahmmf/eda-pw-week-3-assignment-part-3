console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partsNeeded = 40;

console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChange = [ 3, 5, -6, 0, 7, 11];

console.log('2. Array of supplyChanges:', supplyChange);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChange[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
supplyChange.pop(-1);

console.log('4. Removed item:', supplyChange);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChange.push(25);

console.log('5. Adding 25 to supplyChanges.', supplyChange);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

for(let i = 0; i < supplyChange.length; i++){
    let parts = supplyChange[i];

    if (parts > 0) {
        console.log("added", parts, "parts.");
    } else if( parts === 0) {
        console.log("no change") 
    }
      else {
      console.log('removed', -parts, 'parts.');
    }

}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

for( let parts of supplyChange){
    if (parts > 0) {
        console.log("added", parts, "parts.");
    } else if( parts === 0) {
        console.log("no change") 
    }
      else {
      console.log('removed', -parts, 'parts.');
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

let total = 0;

for( parts of supplyChange){
    total += parts;
}

console.log(total);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

// 572 parts that fit inside a box of 7 slot, obj. is to figure out how many boxes can 
// hold 572 parts. We can do this by division (572/7).

let totalParts = 572;// first define how many parts we have in total. 
let boxHolds = 7; // then define how many the box can hold. 
let filledBoxes = 0 // then create a variable for how many boxes are filled
let remainingParts = totalParts; // then set the amount of remaing parts left over (there will be since 572 isnt divisable by 7.. i checked)

while( remainingParts >= boxHolds ){ //total parts is more than or equal to the box holds
    remainingParts -= boxHolds; //  remaining parts subtracted by 7 for each individual box
    filledBoxes++; 
}

console.log("filled boxes:", filledBoxes);

console.log("Remaining parts:", remainingParts);