import { testingParamsFactory } from './testing_framework.js';
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
