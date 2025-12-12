import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [number, setNumber] = useState(1);
  const [otherState, setOtherState] = useState(0);

  // ❗ Expensive calculation (simulated with a large loop)
  const expensiveResult = useMemo(() => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 500000000; i++) {
      total += number;
    }
    return total;
  }, [number]); // Only recalculate when "number" changes

  return (
    <div className="p-6 max-w-xl mx-auto mt-10 bg-white shadow rounded text-center">
      <h2 className="text-2xl font-bold mb-4">useMemo Demo</h2>

      <p className="text-lg">Number: {number}</p>
      <p className="font-semibold mt-2">Expensive Result: {expensiveResult}</p>

      <div className="mt-4 space-y-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setNumber(number + 1)}
        >
          Increase Number
        </button>

        <button
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 block mx-auto"
          onClick={() => setOtherState(otherState + 1)}
        >
          Update Other State ({otherState})
        </button>
      </div>
    </div>
  );
}

export default UseMemoDemo;
