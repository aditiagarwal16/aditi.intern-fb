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
