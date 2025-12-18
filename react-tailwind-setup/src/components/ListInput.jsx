import React, { useState } from 'react';

function ListInput() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div className="p-6 bg-gray-100 shadow-md rounded w-96 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Add Items to List</h2>

      <div className="flex gap-3">
        <input
          type="text"
          value={inputValue}
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Enter item..."
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className="py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListInput;
