// Before


export function calcTotal(prices) {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    if (typeof prices[i] === "number") {
      let value = prices[i];
      if (value >= 0) {
        total = total + value;
      } else {
        total = total + 0;
      }
    } else if (typeof prices[i] === "string") {
      const parsed = Number(prices[i]);
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          total = total + parsed;
        }
      }
    } else {
      // ignore all other types
    }
  }

  return total;
}


// Why this is bad:

// too many nested if statements

// repeated logic

// confusing variable names

// hard to maintain

// violates clean code principles



// After


export function calcTotal(prices) {
  return prices
    .map((item) => Number(item))
    .filter((num) => !isNaN(num) && num >= 0)
    .reduce((sum, num) => sum + num, 0);
}


// Why this is better:

// No nested conditions

// No duplicated logic

// Uses functional array methods

// Cleaner, readable, maintainable

// Same functionality, fewer bugs