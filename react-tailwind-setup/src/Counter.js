import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-60 mx-auto mt-10">
      <h1 className="text-2xl font-semibold text-gray-800">Count: {count}</h1>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

          <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 active:scale-95 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
