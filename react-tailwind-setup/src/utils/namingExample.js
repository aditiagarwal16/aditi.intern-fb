// unclear variable/function names

export function calc(x, y) {
  const a = x + y;
  const b = a * 2;
  return b;
}

export function fn(arr) {
  return arr.map((i) => i * 3);
}

// Why this is BAD:

// calc → doesn’t explain what calculation

// x, y, a, b → unclear purpose

// fn → meaningless

// i → not expressive

// REFACTORED version

export function calculateDoubleSum(firstNumber, secondNumber) {
  const sum = firstNumber + secondNumber;
  const doubledValue = sum * 2;
  return doubledValue;
}

export function tripleValues(numbers) {
  return numbers.map((number) => number * 3);
}

// Why this is GOOD:

// Function names clearly describe purpose

// Variable names indicate what they represent

// No guessing required
