import React from "react";

function HelloWorld({ name }) {
  return (
    <div className="p-6 bg-gray-100 rounded shadow-md text-center">
      <h1 className="text-xl font-bold">Hello, Focus Bear!</h1>
      <p className="text-gray-700 mt-2">Hello, {name}!</p>
    </div>
  );
}

export default HelloWorld;
