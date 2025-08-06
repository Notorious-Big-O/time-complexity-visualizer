import { describe, it, expect } from 'vitest';
import { bubbleSort } from './bubbleSort';

describe('bubbleSort()', () => {
  it('sorts numbers ascending', () => {
    const arr = [4,3,1,2];
    expect(bubbleSort([...arr])).toEqual([1,2,3,4]);
  });

  it('handles empty arrays', () => {
    expect(bubbleSort([])).toEqual([]);
  });
});
