const UNSORT_ARR = [9, 5, 2, 4, 6, 1, 3];
// const UNSORT_ARR = [8, 7, 6, 5, 4, 1, 2];

const selectionSort1 = (input) => {
  for (let i = 0; i < input.length; i++) {
    let minValueIdx = i;

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[minValueIdx]) {
        minValueIdx = j;
      }
    }

    const temp = input[minValueIdx];

    input[minValueIdx] = input[i];
    input[i] = temp;
  }

  console.log(input);
};

const selectionSort2 = (input) => {
  let i = 0;
  while (input[i] !== undefined) {
    let minValueIdx = i;

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[minValueIdx]) {
        minValueIdx = j;
      }
    }

    const temp = input[minValueIdx];
    input[minValueIdx] = input[i];
    input[i] = temp;

    i++;
  }

  console.log(input);
};

const selectionSort3 = (input) => {
  let i = 0;
  while (input[i] !== undefined) {
    let minValueIdx = i;

    let j = i + 1;
    while (input[j] !== undefined) {
      if (input[j] < input[minValueIdx]) {
        minValueIdx = j;
      }
      j++;
    }

    const temp = input[minValueIdx];
    input[minValueIdx] = input[i];
    input[i] = temp;

    i++;
  }

  console.log(input);
};

// selectionSort1(UNSORT_ARR);
// selectionSort2(UNSORT_ARR);
selectionSort3(UNSORT_ARR);
