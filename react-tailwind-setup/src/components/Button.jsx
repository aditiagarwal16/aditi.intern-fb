import React from 'react';

function Button({ children, onClick, variant = 'primary' }) {
  const base = 'px-4 py-2 rounded-md font-medium transition active:scale-95';

  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`,
    danger: `${base} bg-red-600 text-white hover:bg-red-700`,
  };

  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
