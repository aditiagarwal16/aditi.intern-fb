# What was the issue?

The counter was supposed to increase by 5, but it only increased by 1.
The problem was caused by a stale closure — the value of count inside the loop never updated.

# What debugging method did you use?

I used:

- console.log inside the loop to inspect the value of count
- React DevTools to watch state updates
- Reading the React docs about functional updates

# How did you resolve the problem?

I replaced:

- setCount(count + 1);
with:
- setCount(prev => prev + 1);
This ensures React always receives the latest state for each update inside the loop.