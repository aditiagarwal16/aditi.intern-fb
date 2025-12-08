## 1. Magic Numbers and Magic Strings

Example of code smell:
function calculateTotal(price) {
  return price * 0.18; // unclear meaning of 0.18
}

Refactored version:
const GST_RATE = 0.18;

function calculateTotal(price) {
  return price * GST_RATE;
}

Using a constant makes the code easier to understand and update.


## 2. Long Function

Example of code smell:
function submitOrder(order) {
  console.log("Validating order...");
  if (!order.items || order.items.length === 0) return "Invalid";

  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    total += order.items[i].price;
  }

  let shipping = 0;
  if (total < 50) shipping = 10;
  else shipping = 0;

  console.log("Saving order...");
  console.log("Sending confirmation...");
  return total + shipping;
}

Refactored version:
function isValid(order) {
  return order.items && order.items.length > 0;
}

function calculateOrderTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function calculateShipping(total) {
  return total < 50 ? 10 : 0;
}

function submitOrder(order) {
  if (!isValid(order)) return "Invalid";
  const total = calculateOrderTotal(order.items);
  return total + calculateShipping(total);
}

Breaking this into smaller functions makes it easier to test and maintain.

## 3. Duplicate Code

Example of code smell:
function getStudentName(student) {
  return student.first + " " + student.last;
}

function getTeacherName(teacher) {
  return teacher.first + " " + teacher.last;
}

Refactored version:
function getFullName(person) {
  return `${person.first} ${person.last}`;
}

Now there’s only one function to maintain.

## 4. Large Class (God Object)

Example of code smell:
class UserManager {
  login() {}
  logout() {}
  saveToDatabase() {}
  loadFromDatabase() {}
  processPayment() {}
  sendEmail() {}
}

This class tries to handle too many responsibilities.

Refactored version:
class AuthService {
  login() {}
  logout() {}
}

class DatabaseService {
  save() {}
  load() {}
}

class NotificationService {
  sendEmail() {}
}

Splitting responsibilities avoids confusion and makes the code cleaner.

## 5. Deeply Nested Conditionals

Example of code smell:
function canActivate(user) {
  if (user) {
    if (user.role) {
      if (user.role === "admin") {
        return true;
      }
    }
  }
  return false;
}

Refactored version:
function canActivate(user) {
  if (!user) return false;
  return user.role === "admin";
}

This is easier to read and understand.

## 6. Commented-Out Code

Example of code smell:
function multiply(a, b) {
  // return a + b;
  return a * b;
}

Refactored version:
function multiply(a, b) {
  return a * b;
}

Commented-out code adds noise and should be removed.


## 7. Inconsistent Naming

Example of code smell:
let x = 10;
let nm = "Aditi";
let check = true;

Refactored version:
let itemCount = 10;
let username = "Aditi";
let isActive = true;

# Reflection

## What code smells did you find in your examples?
While researching code smells, I recreated examples that commonly appear in real projects. These included:

- **Magic numbers and strings** where values were hardcoded without explanation.
- **Long functions** that were handling too many responsibilities.
- **Duplicate code** that repeated the same logic across functions.
- **Large classes (God objects)** that mixed unrelated responsibilities.
- **Deeply nested conditionals** that made the logic difficult to understand.
- **Commented-out code** that added noise and confusion.
- **Inconsistent naming** which made the code harder to read and maintain.

These issues are small individually, but they add up and make a codebase harder to work with over time.

## How did refactoring improve readability and maintainability?
Refactoring improved readability by:

- Giving meaningful names to constants and variables  
- Splitting long functions into smaller, single-purpose functions  
- Removing duplicate logic  
- Keeping classes focused on one responsibility  
- Flattening nested conditionals  
- Cleaning up unnecessary commented-out code  

The refactored code is easier to scan, easier to understand, and easier to update later without breaking things.

## How can avoiding code smells make future debugging easier?
Avoiding code smells reduces debugging time because:

- Clean code is easier to trace when things go wrong  
- Smaller functions make it easier to isolate where a bug lives  
- Consistent naming helps you know what a variable represents  
- No duplicate code means fixing a bug in one place fixes it everywhere  
- Removing commented-out or dead code avoids confusion  
- Clear structure prevents errors caused by deeply nested logic  

Refactoring early prevents bigger problems later and keeps the codebase healthy as new features are added.
