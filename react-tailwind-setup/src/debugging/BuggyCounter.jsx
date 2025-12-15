import React, { useState } from "react";

function BuggyCounter() {
  const [count, setCount] = useState(0);

  function incrementFiveTimes() {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1); // ❌ Bug: stale closure — `count` never updates inside loop
    }
  }

  return (
    <div className="p-6 bg-red-100 rounded shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Buggy Counter</h2>
      <p className="text-lg mb-4">Count: {count}</p>
      <button
        onClick={incrementFiveTimes}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Increment 5 Times (Buggy)
      </button>
    </div>
  );
}

export default BuggyCounter;
