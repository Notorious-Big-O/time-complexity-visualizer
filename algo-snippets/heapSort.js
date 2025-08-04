function heapSort(arr) {
  const heapify = (arr, i, len) => {
    let largest = i, l = 2*i+1, r = 2*i+2;
    if (l < len && arr[l] > arr[largest]) largest = l;
    if (r < len && arr[r] > arr[largest]) largest = r;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, largest, len);
    }
  };
  for (let i = Math.floor(arr.length/2)-1; i >= 0; i--) heapify(arr, i, arr.length);
  for (let i = arr.length-1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
  return arr;
}

export {heapSort};