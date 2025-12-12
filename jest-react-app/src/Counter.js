import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCounterValue } from "./redux/counterSlice";
import Button from "./components/Button";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCounterValue);

  const message =
    count > 10
      ? "🔥 You're on fire!"
      : count > 5
      ? "⚡ Keep going!"
      : "🙂 Start clicking!";

  return (
    <div className="bg-white shadow p-6 rounded text-center w-80 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-2">Count: {count}</h2>
      <p className="mb-4 text-gray-600">{message}</p>

      <div className="flex gap-4 justify-center">
        <Button color="blue" onClick={() => dispatch(increment())}>
          Increment
        </Button>

        <Button color="red" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default Counter;
