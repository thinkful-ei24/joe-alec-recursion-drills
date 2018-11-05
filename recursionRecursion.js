//#1- SHEEP COUNTER
//recursive
function sheepCount(numOfSheep) {
  if(numOfSheep === 0) {
    return;
  }
  console.log(`${numOfSheep} - Another sheep jumped over(recursive)`);
  sheepCount(numOfSheep - 1);
}

sheepCount(3);

//iterative 
function sheepCountIt(numOfSheep) {
  while(numOfSheep > 0) {
  console.log(`${numOfSheep} - Another sheep jumped over(iterative)`);
  numOfSheep--;
  }
}

sheepCountIt(3);
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
//recursive
function reverseStr(str) {
  if(str.length === 0) {
    return str;
  }

  return str.slice(-1) + reverseStr(str.slice(0, str.length - 1));
}

console.log('recursive', reverseStr('Hello'));

//iterative
function reverseStrIt(str) {
  let newStr = '';

  while(str.length !== 0) {
    newStr += (str.slice(-1));
    str = str.slice(0, str.length - 1);
  }
  
  return newStr;
}

console.log('iterative', reverseStrIt('Hello'));
//#4 TRIANGULAR NTH 

//#5 STRING SPLITTER

//#6 BINARY REPRESENTATION

//#7 FACTORIAL

//#8 FIBBONACI

//#9 ANAGRAM

//#10 ANIMAL HIERARCHY

//#11 ORGANIZATION CHART

