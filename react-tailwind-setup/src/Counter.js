//

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, selectCounterValue } from "./redux/counterSlice";

// export default function Counter() {
//   const dispatch = useDispatch();
//   const value = useSelector(selectCounterValue);

//   return (
//     <div className="p-6 bg-white shadow rounded max-w-sm mx-auto mt-10 text-center">
//       <h1 className="text-xl font-bold mb-4">Counter: {value}</h1>

//       {value > 10 ? (
//         <p className="text-green-600 font-semibold">🔥 Great job! You passed 10!</p>
//       ) : (
//         <p className="text-blue-600">Keep clicking!</p>
//       )}

//       <div className="flex gap-4 justify-center mt-4">
//         <button
//           onClick={() => dispatch(increment())}
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           +
//         </button>

//         <button
//           onClick={() => dispatch(decrement())}
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, selectCounterValue } from "../redux/counterSlice";

// function Counter() {
//   const count = useSelector(selectCounterValue);
//   const dispatch = useDispatch();

//   return (
//     <div className="p-6 bg-gray-100 shadow-md w-64 mx-auto text-center rounded">
//       <h2 className="text-xl font-bold mb-4">Count: {count}</h2>

//       <div className="flex gap-4 justify-center">
//         <button
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>

//         <button
//           className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Counter;

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1); // Update state properly
  };

  return (
    <div className="p-6 bg-gray-100 shadow-md rounded w-80 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Simple Counter</h2>

      <p className="text-lg mb-4">Count: {count}</p>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
