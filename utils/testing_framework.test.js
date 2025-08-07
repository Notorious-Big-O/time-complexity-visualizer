import { testingParamsFactory, dataPointFactory } from './testing_framework.js';
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
  it('creates an object with all the right keys and they should be initialized as undefined', () => {
    const dp = dataPointFactory();
    expect(Object.keys(dp)).toEqual([
      'numberOfInputs','algoDatapoint','exponential',
      'n_qubed','n_squared','n','n_log_n','log_n'
    ]);
    Object.values(dp).forEach(v => expect(v).toBeUndefined());
  });
});