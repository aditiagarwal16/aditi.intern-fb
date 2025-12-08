# Unit Testing Reflection

## Why is it important to mock API calls in tests?
Mocking API calls makes tests more reliable because they don’t depend on the internet or on the backend being available. It also lets the test focus on what the component should do with the data instead of testing the API itself. This makes tests faster and easier to maintain.

## What are some common pitfalls when testing asynchronous code?
A common issue is not waiting for the async function to finish, which can make the test pass or fail incorrectly. Another problem is forgetting to mock the API call, which causes real network requests. Timing issues, missing `await`, or not using `waitFor()` can also cause flaky tests.
