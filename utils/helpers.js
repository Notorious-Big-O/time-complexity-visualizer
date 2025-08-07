/*
 * Validate parameter input for
 * data entred within a web form. If a non-integer
 * value is given, return 0.
 */
function scrubNumericInput(input) {
    const num = parseInt(input, 10);
    if (isNaN(num)) {
        return 0;
    } else {
        return num;
    }
};

export { scrubNumericInput }