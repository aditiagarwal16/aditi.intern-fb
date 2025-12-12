import React from "react";
import { useSelector } from "react-redux";
import { selectCounterValue } from "../redux/counterSlice";

function CounterDisplay() {
  const count = useSelector(selectCounterValue);

  return (
    <p className="text-center text-sm text-gray-500 mt-4">
      (Another component sees count as: {count})
    </p>
  );
}

export default CounterDisplay;
