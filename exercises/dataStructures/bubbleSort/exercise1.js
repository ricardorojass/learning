function bubbleSort(array) {
  let lastUnsorted = array.length - 1;
  let isSorted = false;

  while (!isSorted) {
    for (let i = 0; i < lastUnsorted; i++) {
      isSorted = true;
      if (array[i] > array[i+1]) {
        swap(array, i, i + 1)
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
  return array
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(
  bubbleSort([4,2,7,1,3])
)