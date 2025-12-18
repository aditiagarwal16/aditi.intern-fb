import React, { useEffect, useState } from 'react';

function UseEffectDemo() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(true);

  // 🔹 Logs when component mounts + cleanup on unmount
  useEffect(() => {
    console.log('🟢 Component mounted');

    return () => {
      console.log('🔴 Component unmounted (cleanup ran)');
    };
  }, []);

  // 🔹 Fetch data when button is clicked
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      const json = await response.json();
      setData(json);
      console.log('📥 Data fetched:', json);
    } catch (error) {
      console.error('❌ Error fetching data:', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-10 bg-white shadow rounded text-center">
      <h2 className="text-2xl font-bold mb-4">useEffect Demo</h2>

      {show ? (
        <>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Fetch Data
          </button>

          {data && (
            <p className="mt-4 p-3 bg-gray-100 rounded">
              <strong>Fetched Title:</strong> {data.title}
            </p>
          )}
        </>
      ) : (
        <p className="text-gray-500">Component is hidden</p>
      )}

      <button
        onClick={() => setShow(!show)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        {show ? 'Unmount Component' : 'Mount Component'}
      </button>
    </div>
  );
}

export default UseEffectDemo;
