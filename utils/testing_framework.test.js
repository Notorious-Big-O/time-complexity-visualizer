import { testingParamsFactory, dataPointFactory, timeAtN, timeFunction, estimateAverageN, timeAlgoComplexity } from './testing_framework.js';
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';

import * as ds from './datasets.js';
import * as tf from './testing_framework.js';
import * as bubble from '../algo-snippets/bubbleSort.js';

describe('testingParamsFactory()', () => {
  it('returns the correct default shape or base', () => {
    const p = testingParamsFactory();
    expect(p).toEqual({
      startingN: 1000,
      endingN: 110000,
      resolution: 1000,
      algoFn: null,
    });
  });
});

describe('dataPointFactory()', () => {
  it('creates an object with all the right metric keys and they should be initialized as undefined', () => {
    const dp = dataPointFactory();
    expect(Object.keys(dp)).toEqual([
      'numberOfInputs',
      'algoDatapoint',
      'exponential',
      'n_qubed',
      'n_squared',
      'n',
      'n_log_n',
      'log_n',
    ]);
    Object.values(dp).forEach((v) => expect(v).toBeUndefined());
  });
});

describe('timeAtN()', () => {
  it('test the metric data points with avgN=1, n=2, measured=3', () => {
    const dp = timeAtN(1, 2, 3);
    expect(dp.numberOfInputs).toBe(2);
    expect(dp.algoDatapoint).toBe(3);
    expect(dp.exponential).toBe(4);
    expect(dp.n).toBe(2);
    expect(dp.n_qubed).toBe(8);
    expect(dp.n_squared).toBe(4);
    expect(dp.n_log_n).toBe(2);
    expect(dp.log_n).toBe(1);
  });
});

describe('timeFunction()', () => {
  it('expect time for how long a function takes to complete', () => {
    const arr = [1, 2, 3];
    const time = timeFunction((x) => x + 1, arr);
    expect(typeof time).toBe('number');
    expect(time).toBeGreaterThanOrEqual(0);
  });
});

describe('estimateAverageN()', () => {
  beforeEach(() => {
    vi.spyOn(ds, 'createRandomDataset').mockImplementation((n) => {
      const arr = [];
      for (let i = 0; i < n; i++) arr.push(i);
      return arr;
    });
  });

  afterEach(() => vi.restoreAllMocks());

  it('returns a positive finite average time per element', () => {
    const params = testingParamsFactory();

    params.algoFn = (arr) => {
      const K = 20000; 
      let s = 0;
      for (let i = 0; i < arr.length * K; i++) s += i;
      return s;
    };

    const avg = estimateAverageN(params);

    expect(Number.isFinite(avg)).toBe(true);
    expect(avg).toBeGreaterThan(0);
  });
});


describe('timeAlgoComplexity() with bubbleSort', () => {
  beforeEach(() => {
    vi.spyOn(ds, 'createRandomDataset').mockImplementation(function (n) {
      const arr = [];
      for (let i = 0; i < n; i++) {
        arr.push(i);
      }
      return arr;
    });
    // Time how long a function takes to complete (in milliseconds)
    // function timeFunction(fn, ...args)
    vi.spyOn(tf, 'timeFunction').mockImplementation((fn, ...args) => {
      //Even though we are returning 5, we still want to make sure the fn runs for observing
      fn(...args);
      return 5;
    });
  });
  // make sure clean up mock
  afterEach(() => vi.restoreAllMocks());

  it('invokes callback once per N increment and runs bubbleSort each time', async () => {
    const sortSpy = vi.spyOn(bubble, 'bubbleSort');

    const params = testingParamsFactory();
    params.startingN = 1;
    params.endingN = 3;
    params.resolution = 1;
    params.algoFn = sortSpy;

    const calls = [];
    await timeAlgoComplexity(params, (dp) => calls.push(dp));

    expect(calls.map((dp) => dp.numberOfInputs)).toEqual([1, 2, 3]);

    //should be called 13 times?
    expect(sortSpy).toHaveBeenCalled(); 

    const lens = sortSpy.mock.calls.map(([arr]) => arr.length);
    expect(lens).toEqual(expect.arrayContaining([1, 2, 3]));

    calls.forEach((dp) => {
      expect(typeof dp.algoDatapoint).toBe('number');
      expect(dp.algoDatapoint).toBeGreaterThanOrEqual(0);
    });
  });
});
