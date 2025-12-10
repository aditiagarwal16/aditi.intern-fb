import React, { useState, useCallback } from "react";
import Child from "./components/Child";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Without useCallback → function recreates every render
  // With useCallback → reference stays the same unless "count" changes
  const handleIncrement = useCallback(() => {
    console.log("Increment function called");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold">useCallback Demo</h1>

      <p className="text-lg">Count: {count}</p>
      <p className="text-lg">Other state: {other}</p>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleIncrement}
      >
        Increment Count
      </button>

      <button
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        onClick={() => setOther((prev) => prev + 1)}
      >
        Update Other State
      </button>

      <Child onClick={handleIncrement} />
    </div>
  );
}

export default UseCallbackDemo;
