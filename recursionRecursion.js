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
function arrayDoubler(list) {

}

console.log(arrayDoubler([1, 2, 3, 4, 5]));