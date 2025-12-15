import React, { useState } from "react";

function FixedCounter() {
  const [count, setCount] = useState(0);

  function incrementFiveTimes() {
    for (let i = 0; i < 5; i++) {
      setCount(prev => prev + 1); // ✅ Correct: uses functional update
    }
  }

  return (
    <div className="p-6 bg-green-100 rounded shadow-md text-center mt-6">
      <h2 className="text-xl font-bold mb-2">Fixed Counter</h2>
      <p className="text-lg mb-4">Count: {count}</p>
      <button
        onClick={incrementFiveTimes}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Increment 5 Times (Fixed)
      </button>
    </div>
  );
}

export default FixedCounter;
