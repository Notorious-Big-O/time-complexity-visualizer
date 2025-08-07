import { testingParamsFactory, dataPointFactory, timeAtN, timeFunction} from './testing_framework.js';
import { describe, it, expect } from 'vitest';

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
      'numberOfInputs','algoDatapoint','exponential',
      'n_qubed','n_squared','n','n_log_n','log_n'
    ]);
    Object.values(dp).forEach(v => expect(v).toBeUndefined());
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
    const arr = [1,2,3];
    const time = timeFunction(x => x + 1, arr);
    expect(typeof time).toBe('number');
    expect(time).toBeGreaterThanOrEqual(0);
  });
});