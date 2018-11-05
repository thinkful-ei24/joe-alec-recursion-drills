//#1- SHEEP COUNTER
function sheepCount(numOfSheep) {
  if(numOfSheep === 0) {
    return;
  }
  console.log(`${numOfSheep} - Another sheep jumped over`);
  sheepCount(numOfSheep - 1);
}

sheepCount(5);

//#2 ARRAY NUMBER DOUBLER
// function arrayDoubler(list) {
//   if(list.length === 0) {
//     return [];
//   }
//   let newNumber = list.shift() * 2;
//   list.
//   console.log(list);
//   arrayDoubler(list);
// }

// console.log(arrayDoubler([1, 2, 3, 4, 5]));

//#3 REVERSE STRING 
function reverseStr(str) {
  if(str.length === 0) {
    return str;
  }

  return str.slice(-1) + reverseStr(str.slice(0, str.length - 1));
}

console.log(reverseStr('Hello'));