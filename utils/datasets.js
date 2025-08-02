import fs from "fs";
import path from "path";

const maxSize = 7; // Number of zeros (e.g., 10^8) (100,000,000)
const maxInt = 1000; // Each item would be from 1 to 1,000

/*
 * Return array of fill filepaths for files that contain the datasets.
 */
function datasetFileNames() {
  const fileNames = [];
  for (let exponent = 2; exponent <= maxSize; exponent++) {
    const size = 10 ** exponent;
    fileNames.push(path.resolve(`data/records_${size}.json`));
  }
  return fileNames;
}

/*
 * Retreive previously calculated datasets from file.
 * This operation should be done before starting any algorithm
 * testing.
 */
function fetchRandomDataset(filename) {
  return JSON.parse(fs.readFileSync(filename, "utf-8"));
}

/*
 * Create random datasets to be saved to a file in JSON format.
 * These datasets will be used for testing computational complexity
 */
function createRandomDatasets() {
  // 100, 1,000, 10,000 .... 1,000,000,000
  const setSizes = [];
  for (let i = 2; i <= maxSize; i++) setSizes.push(10 ** i);

  setSizes.forEach((n) => {
    const results = [];
    const filename = `records_${n}.json`;
    for (let i = 0; i < n; i++) {
      results.push(Math.floor(Math.random() * maxInt + 1));
    }
    fs.writeFile(filename, JSON.stringify(results), (err) => {
      if (err) throw err;
    });
  });
}

datasetFileNames().forEach((fn) => {
  console.log(fn);
  console.log(fetchRandomDataset(fn));
});
