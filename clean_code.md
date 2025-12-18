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



# What was the issue with the original code?

The original divide() function assumed all inputs were always valid and did not handle invalid numbers or division by zero. This could cause runtime crashes or unexpected behavior. Without guard clauses, the function could return Infinity, NaN, or break other parts of the program.

# How does handling errors improve reliability?

Adding guard clauses ensures that incorrect inputs are caught early, making the code safer and more predictable. Error messages help developers understand what went wrong instead of silently failing. This leads to more robust software, fewer bugs, and easier debugging. It also prevents invalid outputs from spreading through the system.


Refactoring Code for Simplicity
# What made the original code complex?

The original implementation used deeply nested if statements, repeated conditions, and unnecessary variables. It handled the same logic in multiple places, which made it hard to read, extend, or debug. The flow of the function was not clear, and the intent was buried inside multiple layers of checks.

# How did refactoring improve it?

Refactoring simplified the logic by using array methods like map, filter, and reduce. This made the code more declarative, readable, and maintainable. The refactored version removes duplicated conditions and clearly expresses the intent of the function. The code is now shorter and easier to debug or modify without changing functionality.




Avoiding Code Duplication (DRY Principle)
# What were the issues with duplicated code?

The original functions repeated the same capitalization logic in multiple places. This duplicated code increases the risk of inconsistencies and bugs because any future change would need to be updated in several locations. It also made the functions longer and harder to read.

# How did refactoring improve maintainability?

By extracting the repeated logic into a single reusable capitalize() helper function, the code became much cleaner and easier to maintain. If formatting rules change, they now only need to be updated in one place. This improves consistency, readability, and reduces the likelihood of errors.





Writing Small, Focused Functions
# Why is breaking down functions beneficial?

Breaking large functions into smaller, single-responsibility units makes the code easier to understand, test, and maintain. Each function has a clear purpose, reducing complexity and helping prevent bugs. Small functions also promote reuse and make future changes safer because logic is isolated.

# How did refactoring improve the structure of the code?

The original function mixed validation, total calculation, discount logic, and summary generation all in one place. After refactoring, each task was separated into helper functions such as validateOrder, calculateTotal, and applyDiscount. This made the main processOrder function much cleaner and easier to read. The code is now more modular, more testable, and easier to extend in the future.





Naming Variables & Functions
# What makes a good variable or function name?

A good name clearly describes the purpose of the variable or function. It should be specific, readable, and meaningful without requiring comments. Names should follow consistent conventions and avoid abbreviations or single letters unless used in simple loops.

# What issues can arise from poorly named variables?

Poor names make the code confusing and increase the risk of bugs. Developers may misunderstand what the variable represents, incorrectly modify it, or misuse the function. It also slows down onboarding and makes debugging much harder.

# How did refactoring improve code readability?

After renaming calc to calculateDoubleSum and using descriptive variable names like sum and doubledValue, the code became easier to understand at a glance. The purpose of each variable and function is now clear, reducing cognitive load and improving maintainability.