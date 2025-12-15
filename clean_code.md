# Poor Example (bad comments)

// function
function calc(x, y) {
  // add
  let a = x + y; // sum
  return a; // return
}


Problems:

- Comments repeat what the code already says
- Variable names are unclear
- No explanation of purpose or edge cases

# Improved Version (good comments + cleaner code)

function calculateTotalWithTax(amount, taxRate) {
  // Convert percentage to multiplier
  const taxAmount = amount * taxRate;

  // Add tax to the original amount
  return amount + taxAmount;
}

What changed?

- Meaningful function + variable names
- Documentation explains why, not what
- Comment is only added where it clarifies intent




# When Should You Add Comments?

You should add comments when:

- The purpose of the code is not immediately obvious
- A specific decision or calculation needs justification
- You’re explaining why something is done, not what is done
- The code includes a workaround, edge case handling, or non-intuitive logic
- You're documenting a function’s expected inputs, outputs, and behavior

Good comments provide context, not repetition.

# When Should You Avoid Comments and Improve Code Instead?

Avoid comments when:

- The code is unclear only because of poor naming
- The logic can be simplified instead of explained
- You're writing comments that describe obvious behavior
Example: i++; // increment i
- Comments would become outdated if code changes

Instead of adding comments, prefer:

- Renaming variables
- Breaking a long function into smaller functions
- Using meaningful function names
- Removing redundant or outdated comments

Clean, readable code is better than commented messy code.







# How do unit tests help keep code clean?

Unit tests force you to write small, predictable, and reusable functions because large or overly complicated functions are difficult to test. They catch problems early, help prevent regressions, and make refactoring safer since tests confirm everything still works as expected. This leads to cleaner and more maintainable code.

# What issues did you find while testing?

While testing, I realized that certain edge cases (like checking isPositive(0)) needed to be handled explicitly. Writing tests also made me confirm the expected behavior more clearly. Testing helped highlight where assumptions in the logic could cause bugs.