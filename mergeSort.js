const UNSORT_ARR = [9, 5, 2, 4, 8, 6, 1, 3, 7];
// const UNSORT_ARR = [9, 5, 4, 3];

const mergeSort1 = (input) => {
  console.log("RESULT", divideArr(input));
};

const divideArr = (input) => {
  if (input.length <= 1) return input;

  const middlePoint = Math.floor(input.length / 2);

  const leftArr = divideArr(input.slice(0, middlePoint));
  const rightArr = divideArr(input.slice(middlePoint));

  return merge(leftArr, rightArr);
};

const merge = (leftArr, rightArr) => {
  let newArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      newArr.push(leftArr.shift());
    } else {
      newArr.push(rightArr.shift());
    }
  }

  return [...newArr, ...leftArr, ...rightArr];
};

// insetSort1(UNSORT_ARR);
// insetSort2(UNSORT_ARR);
// insetSort3(UNSORT_ARR);
mergeSort1(UNSORT_ARR);
