function sheepCount(numOfSheep) {
  if(numOfSheep === 0) {
    return;
  }
  console.log(`${numOfSheep} - Another sheep jumped over`);
  sheepCount(numOfSheep - 1);
}

sheepCount(5);