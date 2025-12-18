// import { add } from "./math";

// test("adds two numbers correctly", () => {
//   const result = add(2, 3);
//   expect(result).toBe(5);
// });

import { add, isPositive } from './math';

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test('checks if a number is positive', () => {
  expect(isPositive(5)).toBe(true);
  expect(isPositive(-3)).toBe(false);
  expect(isPositive(0)).toBe(false);
});
v;
