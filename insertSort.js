const UNSORT_ARR = [9, 5, 2, 4, 6, 1, 3];

const insetSort1 = (input) => {
  for (let i = 1; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (input[j + 1] < input[j]) {
        const temp2 = input[j + 1];
        input[j + 1] = input[j];

        input[j] = temp2;
      }
    }
  }

  console.log("RESULT:", input);
};

const insetSort2 = (input) => {
  for (let i = 1; i < input.length; i++) {
    const temp = input[i];

    let pos = i;

    for (let j = i - 1; j >= 0; j--) {
      if (temp < input[j]) {
        input[j + 1] = input[j];
        pos = j;
      }
    }

    input[pos] = temp;
  }

  console.log("RESULT:", input);
};

const insetSort3 = (input) => {
  for (let i = 1; i < input.length; i++) {
    const temp = input[i];

    let j = i - 1;

    while (j >= 0 && temp < input[j]) {
      input[j + 1] = input[j];
      j--;
    }

    input[j + 1] = temp;
  }

  console.log("RESULT:", input);
};

const insetSort4 = (input) => {
  for (let i = 1; i < input.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (input[j + 1] < input[j]) {
        const temp = input[j + 1];
        input[j + 1] = input[j];
        input[j] = temp;
      }

      j--;
    }
  }

  console.log("RESULT:", input);
};

// insetSort1(UNSORT_ARR);
// insetSort2(UNSORT_ARR);
// insetSort3(UNSORT_ARR);
insetSort4(UNSORT_ARR);

//
//
