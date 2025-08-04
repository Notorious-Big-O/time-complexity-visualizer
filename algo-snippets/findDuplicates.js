function findDuplicates(arr) {
  const dups = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) dups.push(arr[i]);
    }
  }
  return dups;
}

export { findDuplicates };