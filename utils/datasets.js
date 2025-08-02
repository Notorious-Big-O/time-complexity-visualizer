import fs from "fs";
import path from "path";

const maxDatasetSize = 1000; // Maximum dataset size
const maxInt = 1000; // Each item would be from 1 to 1,000

/*
 * Time how long a function takes to complete
 */
function timeFunction(fn, ...args) {
  const start = Date.now();
  const result = fn(...args);
  const end = Date.now();

  return end - start;
}

/*
 * Return array of integers that represent the sizes of each dataset
 * to be generated.
 */
function datasetSizes() {
  const datasetSizes = [];
  for (let i = 1; i <= maxDatasetSize; i++) datasetSizes.push(1000 * i);
  return datasetSizes;
}

/*
 * Return array of full filepaths for files that contain the datasets.
 */
function datasetFileNames() {
  const fileNames = [];

  datasetSizes().forEach((size) => {
    fileNames.push(path.resolve(`data/records_${size}.json`));
  });

  return fileNames;
}

/*
 * Retrieve previously calculated datasets from file.
 * This operation should be done before starting any algorithm
 * testing.
 */
function fetchRandomDataset(filename) {
  try {
    return JSON.parse(fs.readFileSync(filename, "utf-8"));
  } catch (err) {
    console.error(`Error reading or parsing file "${filename}":`, err.message);
    return null;
  }
}

/*
 * Create random datasets to be saved to a file in JSON format.
 * These datasets will be used for testing computational complexity
 */
function createRandomDatasets() {
  datasetSizes().forEach((n) => {
    const results = [];
    // const filename = `records_${n}.json`;
    const filename = path.resolve(`data/records_${n}.json`);
    for (let i = 0; i < n; i++) {
      results.push(Math.floor(Math.random() * maxInt + 1));
    }
    fs.writeFileSync(filename, JSON.stringify(results), (err) => {
      if (err)
        throw new Error(`Failed to write file ${filename}: ${err.message}`);
    });
  });
}

/*
 * Given a given function defition, call that function
 * with increasingly large numbers of input data. Print
 * time taken:
 * n:      100     time: 1.0000
 * n:     1000     time: 3.0000
 * n:    10000     time: 70.0000
 * n:   100000     time: 6418.0000
 */
function testAlgo(fn) {
  datasetFileNames().forEach((filename) => {
    const n = fetchRandomDataset(filename);
    const time = timeFunction(fn, n);
    console.log(`${n.length},${time}`);
  });
}

export {
  timeFunction,
  datasetFileNames,
  fetchRandomDataset,
  createRandomDatasets,
  testAlgo,
};
