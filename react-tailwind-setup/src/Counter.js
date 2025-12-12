// 

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCounterValue } from "./redux/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(selectCounterValue);

  return (
    <div className="p-6 bg-white shadow rounded max-w-sm mx-auto mt-10 text-center">
      <h1 className="text-xl font-bold mb-4">Counter: {value}</h1>

      {value > 10 ? (
        <p className="text-green-600 font-semibold">🔥 Great job! You passed 10!</p>
      ) : (
        <p className="text-blue-600">Keep clicking!</p>
      )}

      <div className="flex gap-4 justify-center mt-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
      </div>
    </div>
  );
}
