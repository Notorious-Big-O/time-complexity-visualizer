import { createRandomDataset } from "./datasets.js";

const MAXIMUM_ARRAY_SIZE = 10000000;
const MAX_EXPONENTIAL_N = 7; // To prevent overflow in O(2^n) calculations

function testingParamsFactory() {
  return {
    startingN: 1000, // The beginning number of records to test
    endingN: 110000, // The ending number of records to test
    resolution: 1000, // The resolution of data to test (every X # of records)
    algoFn: null, // Function definition of algorithm to test
  };
}

/*
 * Return a datapoint object that will hold the
 * shape of all of the datapoints for a given n.
 * Each of these will represent a set of points
 * on the vertical y-axis.
 *
 * Each value corresponds to the expected time it
 * will take to perform an operation (in milliseconds)
 * compared to an averagely known 'n' operations.
 */
function dataPointFactory() {
  return {
    numberOfInputs: undefined, // Original number of items in Input
    algoDatapoint: undefined, // Actual measured execution time for the algorithm (in milliseconds)
    exponential: undefined, // Example: 2^n
    n_qubed: undefined, // n^3
    n_squared: undefined, // n^2
    n: undefined, // How long to do n operations
    n_log_n: undefined, // n * log(n)
    log_n: undefined, // log(n)
  };
}

/*
 * Given an average time for an n=1 operation (avgN) in milliseconds, how much
 * time would be needed for a dataPoint given by the dataPoint factory at a
 * particular given 'n' (integer);
 */
function timeAtN(avgN, n, algoDatapoint) {
  const dataPoint = dataPointFactory();
  dataPoint.numberOfInputs = n;
  dataPoint.algoDatapoint = algoDatapoint;
  dataPoint.exponential = n > MAX_EXPONENTIAL_N ? Infinity : avgN * 2 ** n;
  dataPoint.n = n * avgN;
  dataPoint.n_qubed = n ** 3 * avgN;
  dataPoint.n_squared = n ** 2 * avgN;
  dataPoint.n_log_n = n * Math.log2(n) * avgN;
  dataPoint.log_n = Math.log2(n) * avgN;

  return dataPoint;
}

/*
 * Time how long a function takes to complete (in milliseconds)
 */
function timeFunction(fn, ...args) {
  const start = Date.now();
  fn(...args);
  const end = Date.now();

  return end - start;
}

/*
 * Estimate smallest average input size that it would take to get
 * a 1 ms response time.
 */
function estimateNtoGetOneMs(testingParams) {
  let n = 2; // Number of integers in array
  let arrayOfNumbers;
  let timeToComplete = 0; // ms
  console.log("Estimating minimum number of records to take 1 ms...");

  while (timeToComplete <= 0 && n < MAXIMUM_ARRAY_SIZE) {
    arrayOfNumbers = createRandomDataset(n);
    timeToComplete = timeFunction(testingParams.algoFn, arrayOfNumbers);
    n = n * 2; // Continually double input size until we get a big enough sample
  }

  if (timeToComplete <= 0)
    throw Error(
      "Algorithm is too efficient to estimate time for n=1 operation"
    );
  if (n >= MAXIMUM_ARRAY_SIZE)
    throw Error(
      "Algorithm grew too quickly to estimate time for n=1 operation."
    );

  return n;
}

/*
 * Estimate the average time it takes (in milliseconds) to operate on `n=1`
 * operations. We need an estimate so that we can use scale the comparison
 * functions results to match the actual time we are seeing to execute a
 * particular algorithm over a larger and larger data set.
 */
function estimateAverageN(testingParams) {
  let totalTime = 0; // Total time in all iterations
  let totalN = 0; // Total number of N in all iterations
  let timeToComplete; // Time for Fn to complete
  const nForOne = estimateNtoGetOneMs(testingParams);

  console.log("Estimating time for n=1 operations...");
  const dataset = createRandomDataset(nForOne * 2);

  for (let i = 0; i <= 10; i++) {
    timeToComplete = timeFunction(testingParams.algoFn, dataset);
    if (timeToComplete > 0) {
      totalTime += timeToComplete;
      totalN += dataset.length;
    }
  }

  if (totalTime === 0 || totalN === 0) {
    let message = "Unexpected results when estimateAverageN: ";
    message += `totalTime: ${totalTime}\ttotalN: ${totalN}\tFn: ${testingParams.algoFn}`;
    throw new Error(message);
  }

  // Average time for n=1 operations:
  return totalTime / totalN;
}

/*
 * Given testingParams populated with algoFn (algorithm function definition),
 * the number of inputs to test, etc, run the given algorithm while recording
 * the time it takes to run. The algorithm will be run for each iteration
 * and with the appopriate number of randomly generated input items.
 *
 * For each iteration/run of the algorithm, a dataPoint as described in the
 * dataPointFactory, is returned with the data for algorithm execution.
 */
function timeAlgoComplexity(testingParams, callback, ...callBackArgs) {
  const avgN = estimateAverageN(testingParams);
  console.log(`avgN: ${avgN}`);

  for (
    let n = testingParams.startingN;
    n <= testingParams.endingN;
    n += testingParams.resolution
  ) {
    const dataset = createRandomDataset(n);
    const time = timeFunction(testingParams.algoFn, dataset);
    const dataPoint = timeAtN(avgN, dataset.length, time);
    callback(dataPoint, ...callBackArgs);
  }
}

export { testingParamsFactory, timeAlgoComplexity };
