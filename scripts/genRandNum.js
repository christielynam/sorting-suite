function genRandNum(count) {
  let numArray = [];
  for (let i = 0; i < count; i++) {
    let randomNum = Math.round(Math.random() * 100);
    numArray.push(randomNum);
  }
  return numArray;
}

export default genRandNum;
