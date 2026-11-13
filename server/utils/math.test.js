const mathUtils = require('./math.js');

const testVars = {
    max: 20,
    min: 0,
};

describe('add()', () => {
    test('find the sum of two numbers', () => {
        expect(mathUtils.add(5, 10)).toBe(15);
    });

    test('should clamp num to max', () => {
        expect(mathUtils.add(testVars.max, 1)).toBe(testVars.max);
    });

    test('should clamp num to min', () => {
        expect(mathUtils.add(testVars.min-2, 1)).toBe(testVars.min);
    });
});

describe('multiply()', () => {
    test('find the product of two numbers', () => {
        expect(mathUtils.mul(5, 10)).toBe(50);
    });

    test('clamp inputs to max', () => {
        expect(mathUtils.mul(testVars.max+1, 10)).toBe(testVars.max*10);
    });

    test('clamp inputs to min', () => {
        expect(mathUtils.mul(testVars.min-1, 10)).toBe(testVars.min*10);
    });
});