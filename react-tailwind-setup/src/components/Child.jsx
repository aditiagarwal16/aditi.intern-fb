import React from "react";

function Child({ onClick }) {
  console.log("Child component rendered");

  return (
    <button
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      onClick={onClick}
    >
      Child Button
    </button>
  );
}

export default React.memo(Child);
