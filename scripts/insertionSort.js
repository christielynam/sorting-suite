const insertionSort = array => {
  if (Array.isArray(array) && array.length > 0) {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1;
      while (array[i] < array[j]) {
        [array[j], array[i]] = [array[i], array[j]];
        i -= 1;
        j = i - 1;
      }
    }
    return array;
  } else {
    return 'This is not a valid array to be sorted!'
  }
};

export default insertionSort;
