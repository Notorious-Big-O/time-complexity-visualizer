function binarySearch (n, target) {
  let left = 0;
  let right = n.length - 1;

  while(left <= right) {
    const middle = Math.floor((left + right) / 2);

    if(n[middle] === target) {
      return middle;
    } else if (n[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}


export {binarySearch}