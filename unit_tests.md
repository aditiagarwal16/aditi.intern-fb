## Why is it important to mock API calls in tests?
Mocking API calls makes tests more reliable because they don’t depend on the internet or on the backend being available. It also lets the test focus on what the component should do with the data instead of testing the API itself. This makes tests faster and easier to maintain.

## What are some common pitfalls when testing asynchronous code?
A common issue is not waiting for the async function to finish, which can make the test pass or fail incorrectly. Another problem is forgetting to mock the API call, which causes real network requests. Timing issues, missing `await`, or not using `waitFor()` can also cause flaky tests.


## What was the most challenging part of testing Redux?
The most challenging part was testing the asynchronous thunk. It requires understanding how Redux Toolkit structures actions, especially the pending, fulfilled, and rejected states. Mocking the resolved value correctly and making sure the reducer updates the state as expected can be tricky when you’re still learning how async thunks behave.

Another challenge is Jest configuration. Redux + async thunks + React components often need additional setup, and misconfigured Jest environments can create errors unrelated to your actual code.

## How do Redux tests differ from React component tests?
Redux tests focus purely on **logic and state updates**, not UI.  
They check:

- Whether reducers return the correct new state  
- Whether actions create the correct output  
- Whether async thunks dispatch the expected states  

React component tests, however, involve:

- Rendering components  
- Interacting with UI  
- Checking what appears on the screen  

Component tests simulate user behavior, while Redux tests simulate application logic.


Reflection – Testing React Components

1. What are the benefits of using React Testing Library instead of testing implementation
details?
React Testing Library focuses on how users actually interact with the UI rather than the internal code structure. This makes tests more reliable, less fragile, and easier to maintain because UI changes don’t break tests unnecessarily.

2. What challenges did you encounter when simulating user interaction?
The main challenge was understanding how to properly use userEvent and asynchronous functions like waitFor. Another challenge was making sure the testing environment (setupTests.js) was configured correctly so Jest could understand JSX and DOM APIs. But once everything was set up, writing tests felt straightforward.



Introduction to Unit Testing – Reflection

1. Why is automated testing important in software development?
Automated testing ensures that code continues to work as expected even after new features are added or existing code is changed. It prevents regressions, increases confidence during development, and saves time because tests can run quickly and consistently without needing manual checks. For applications like Focus Bear, which evolve constantly, automated tests help maintain long-term reliability.

2. What did you find challenging when writing your first Jest test?
The main challenge was understanding how Jest structures tests and how assertions work.
Once I learned the basic pattern (arrange → act → assert) and understood how to run tests using Jest’s CLI, things became much easier. Writing tests for small utility functions turned out to be simpler than expected.