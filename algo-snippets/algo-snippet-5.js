import { testAlgo } from "../utils/datasets.js";
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
testAlgo(fib)