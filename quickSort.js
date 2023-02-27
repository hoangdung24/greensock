// const UNSORT_ARR = [9, 5, 2, 4, 6, 1, 3];
// const UNSORT_ARR = [7, 2, 1, 8, 6, 3, 5, 4];
// const UNSORT_ARR = [5, 1, 2, 8, 3];
const UNSORT_ARR = [6, 1, 2, 8, 3, 4];

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return;

  // const partition = partitionStart(arr, start, end);

  //* LEFT
  // quickSort(arr, 0, partition - 1);

  //* RIGHT
  // quickSort(arr, partition + 1, end);

  const partition = partitionEnd(arr, start, end);

  //* LEFT
  quickSort(arr, 0, partition - 1);

  //* RIGHT
  quickSort(arr, partition + 1, end);

  return arr;
};

const partitionStart = (arr, start, end) => {
  const partitionValue = arr[start];

  // console.log("START", arr);

  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < partitionValue) {
      swapIndex++;

      if (swapIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
      }
    }
  }

  // console.log("MIDDLE", arr);

  if (swapIndex !== start) {
    arr[start] = arr[swapIndex];
    arr[swapIndex] = partitionValue;
  }

  // console.log("END", arr);

  return swapIndex;
};

const partitionEnd = (arr, start, end) => {
  const pivotValue = arr[end];

  // console.log("START", arr, start, end);

  let swapIndex = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivotValue) {
      if (i !== swapIndex) {
        const temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
      }
      swapIndex++;
    }
  }

  arr.splice(end, 1);
  arr.splice(swapIndex, 0, pivotValue);

  // console.log("END", arr, swapIndex);
  // console.log("=====");

  return swapIndex;
};

// quickSort(UNSORT_ARR);
console.log(quickSort(UNSORT_ARR));
