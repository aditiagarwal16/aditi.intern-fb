import React, { useState } from "react";

function Message() {
  const [text, setText] = useState("Hello!");

  return (
    <div>
      <p data-testid="message">{text}</p>
      <button
        onClick={() => setText("Button clicked")}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Click Me
      </button>
    </div>
  );
}

export default Message;
