function badComplexityExample(n) {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (n[i] === n[j]) count++;
    }
  }
  return count;
}

export { badComplexityExample };
