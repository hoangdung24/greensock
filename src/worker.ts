import * as Comlink from "comlink";

const fibonacci = (num: number): number => {
  if (num <= 1) return 1;

  console.log("HERE");

  return fibonacci(num - 1) + fibonacci(num - 2);
};

Comlink.expose(fibonacci);

// export { fibonacci };
