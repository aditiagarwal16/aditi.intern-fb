import { divide } from "./divide";

test("divides numbers correctly", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws error for invalid inputs", () => {
  expect(() => divide("10", 2)).toThrow("Inputs must be valid numbers.");
});

test("throws error for divide-by-zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero.");
});
