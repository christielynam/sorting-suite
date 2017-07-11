const letters = ['d', 'b', 'a', 'c'];

const bubbleSort = array => {
  if (Array.isArray(array) && array.length > 0) {
    for (let n = array.length - 1; n > 0; n--) {
      let swap = 0;
      for (let i = 0; i < n; i++) {
        let j = i + 1;
        while (array[i] > array[j]) {
          [array[i], array[j]] = [array[j], array[i]]
          swap++
        }
      }
      if (swap === 0) {
        return array;
      }
    }
    return array;
  } else {
    return 'This is not a valid array to be sorted!'
  }
}

bubbleSort(letters)

export default bubbleSort;
