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
