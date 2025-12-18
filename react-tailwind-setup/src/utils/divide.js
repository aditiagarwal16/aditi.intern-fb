// export function divide(a, b) {
//   return a / b;
// }

// # Problems:

// - No checks for invalid numbers
// - Crashes if b = 0
// - Crashes if a or b are strings
// - No useful error messages

export function divide(a, b) {
  // Guard clause: ensure inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be valid numbers.');
  }

  // Guard clause: avoid division by zero
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return a / b;
}
