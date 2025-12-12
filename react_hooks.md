Reflection – useCallback

# What problem does useCallback solve?
useCallback helps prevent unnecessary re-renders when a function is passed as a prop to a child component. Without it, React would recreate the function on every render, causing memoized children to re-render even when nothing relevant changed.

# How does useCallback work differently from useMemo?
useCallback memoizes a function, while useMemo memoizes a value.
useMemo returns a computed value, and useCallback returns a stable function reference.

# When would useCallback NOT be useful?
useCallback is not helpful when:

- The component does not pass functions to children
- The child component is not memoized with React.memo
- The component is simple and extra optimization adds unnecessary complexity





# How does useMemo improve performance?

useMemo improves performance by memoizing the result of expensive calculations so they only recompute when their dependencies change. This prevents unnecessary recalculations on every render, which is especially important when performing heavy computations or rendering large lists.

# When should you avoid using useMemo?

You should avoid using useMemo for simple calculations because it adds overhead. If the computation is cheap, the memoization process can actually make performance worse instead of better. useMemo should only be used when the calculation is noticeably expensive.

# What happens if you remove useMemo from your implementation?

Without useMemo, the expensive calculation runs on every render, even when unrelated state updates. This causes lag, freezes, higher CPU usage, and noticeable performance issues. With useMemo removed, clicking a button unrelated to the calculation still triggers the heavy function again.



# When should you use useEffect instead of handling logic inside event handlers?

useEffect should be used whenever the logic is a side effect instead of a user-triggered action. Examples include fetching data on mount, subscribing to events, updating the document title, timers, and syncing external data sources. Event handlers only run when the user interacts, while useEffect runs based on component lifecycle or dependency changes.

# What happens if you don’t provide a dependency array?

If you leave out the dependency array, useEffect runs after every render, which can cause infinite loops, repeated fetch calls, and unnecessary performance costs. This is usually not intended unless you explicitly want the effect to run on every update.

# How can improper use of useEffect cause performance issues?

Improper use can lead to:

- Infinite API calls
- Effects running too often
- Memory leaks when cleanup is missing
- Re-render loops triggered by updating state inside useEffect without dependencies

Using the dependency array correctly and cleaning up subscriptions prevents these issues.