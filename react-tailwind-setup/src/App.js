// import Counter from "./Counter";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import Message from "./components/Message";

// function App() {
//   return (
//     <div className="h-screen flex items-center justify-center">
//       <Message />
//     </div>
//   );
// }

// export default App;





// import React from "react";
// import UseCallbackDemo from "./UseCallbackDemo";

// function App() {
//   return <UseCallbackDemo />;
// }

// export default App;



// import FormikForm from "./components/FormikForm";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <FormikForm />
//     </div>
//   );
// }

// export default App;








// import UseMemoDemo from "./components/UseMemoDemo";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <UseMemoDemo />
//     </div>
//   );
// }

// export default App;



// import UseEffectDemo from "./components/UseEffectDemo";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <UseEffectDemo />
//     </div>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";      
import Profile from "./pages/Profile"; 

function App() {
  return (
    <Router>
      <nav className="flex gap-6 p-4 bg-gray-100 shadow-md">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>

        <Link to="/profile" className="text-blue-600 hover:underline">
          Profile
        </Link>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

