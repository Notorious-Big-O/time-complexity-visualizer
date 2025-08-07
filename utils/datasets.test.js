import { describe, it, expect, vi } from 'vitest';
import { createRandomDataset } from './datasets.js';

describe('createRandomDataset()', () => {
  it('returns an array of the requested size', () => {
    // since createRandomDataset(datasetSize, randomizer=Math.random), we need to have a override function 
    const arr = createRandomDataset(5, ()=>0);
    expect(arr).toHaveLength(5);
  });

  it('generates integers between 1 and 1000 inclusive', () => {
    const arr = createRandomDataset(10, ()=>0.9999);
    let allValid = true;
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i];
      if (!Number.isInteger(v) || v < 1 || v > 1000) {
        allValid = false;
        break;
      }
    }
    expect(allValid).toBe(true);
  });

  it('uses the provided randomizer function for each element', () => {
    const randomizer = vi.fn().mockReturnValue(0.5);

    const arr = createRandomDataset(3, randomizer);
    expect(randomizer).toHaveBeenCalledTimes(3);

    const expected = Math.floor(0.5 * 1000 + 1);
    expect(arr).toEqual([expected, expected, expected]);
  });

  it('defaults to Math.random when no randomizer is passed', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0.123);

    const arr = createRandomDataset(4);
    expect(spy).toHaveBeenCalledTimes(4);

    const expected = Math.floor(0.123 * 1000 + 1);
    expect(arr).toEqual(Array(4).fill(expected));
    spy.mockRestore();
  });
});
