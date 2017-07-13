const letters = ['d', 'b', 'a', 'c'];

const mergeSort = array => {
  if (Array.isArray(array) && array.length > 0) {
    if (array.length === 1) {
      return array;
    }
    let split = Math.floor(array.length / 2);
    let array1 = array.slice(0, split);
    let array2 = array.slice(split);
    return merge(mergeSort(array1), mergeSort(array2));
  } else {
    return 'This is not a valid array to be sorted!'
  }
}

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
