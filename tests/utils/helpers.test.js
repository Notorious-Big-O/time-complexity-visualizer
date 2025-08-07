import { describe, it, expect } from 'vitest';
import { scrubNumericInput } from '../../utils/helpers';

describe('Helper Functions', () => {
    describe('scrubNumericInput', () => {
        it('takes an argument', () => {
            // There really isn't a good JavaScript test for this
            // It is mostly here for the "it" documentation.
            expect(scrubNumericInput(1)).toBe(1);
        });

        it('returns numerical values', () => {
            expect(scrubNumericInput(1)).to.deep.equal(1);
        });

        it('returns the numeric equivalent of a string', () => {
            expect(scrubNumericInput("2")).toEqual(2);
        });

        it('handles Infinity inputs', () => {
            expect(scrubNumericInput(NaN)).toEqual(0);
        })

    });
});
