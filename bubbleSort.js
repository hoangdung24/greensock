const UNSORT_ARR = [9, 5, 2, 4, 6, 1, 3];

const bubbleSort1 = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[i]) {
        const temp = input[j];
        input[j] = input[i];
        input[i] = temp;
      }
    }
  }
  console.log("RESULT:", input);
};

const bubbleSort2 = (input) => {
  let i = 0;
  while (input[i] != undefined) {
    let j = i + 1;

    while (input[j] != undefined) {
      if (input[j] < input[i]) {
        const temp = input[j];
        input[j] = input[i];
        input[i] = temp;
      }

      j++;
    }

    i++;
  }

  console.log("RESULT:", input);
};

// bubbleSort1(UNSORT_ARR);
bubbleSort2(UNSORT_ARR);
// bubbleSort3(UNSORT_ARR);
