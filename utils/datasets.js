/*
 * Create and utilize randomized datasets for testing time-complexity of
 * different algorithms
 */

const maxInt = 1000; // Each item would be from 1 to 1,000

/*
 * Create random datasets to be saved to a file in JSON format.
 * These datasets will be used for testing computational complexity
 */
function createRandomDataset(datasetSize, randomizer=Math.random) {
  const randomDataset = [];
  for (let i = 0; i < datasetSize; i++) {
    randomDataset.push(Math.floor(randomizer() * maxInt + 1));
  }
  return randomDataset;
}

export { createRandomDataset };