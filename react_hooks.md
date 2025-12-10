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