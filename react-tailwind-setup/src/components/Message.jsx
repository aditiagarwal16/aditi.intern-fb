// import React, { useState } from "react";

// function Message() {
//   const [text, setText] = useState("Hello!");

//   return (
//     <div>
//       <p data-testid="message">{text}</p>
//       <button
//         onClick={() => setText("Button clicked")}
//         className="px-3 py-1 bg-blue-500 text-white rounded"
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default Message;



import React from "react";
import { useTranslation } from "react-i18next";

function Message() {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">{t("greeting")}</h1>
      <p className="mt-2">{t("clickMessage")}</p>

      <div className="mt-4 flex justify-center gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => i18n.changeLanguage("es")}
        >
          Español
        </button>
      </div>
    </div>
  );
}

export default Message;
