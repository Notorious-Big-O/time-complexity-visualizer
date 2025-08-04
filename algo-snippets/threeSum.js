function threeSum(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          results.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return results;
}

export {threeSum};