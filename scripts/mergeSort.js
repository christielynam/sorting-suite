const letters = ['d', 'b', 'a', 'c'];

const mergeSort = array => {

};

const merge = (array1, array2) => {
  let mergedArray = [];
  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] <= array2[0]) {
      mergedArray.push(array1.shift());
    } else if (array2[0] <= array1[0]) {
      mergedArray.push(array2.shift());
    }
  }
  mergedArray.push(...array1, ...array2);
  return mergedArray;
};

mergeSort(letters)

export default mergeSort;
