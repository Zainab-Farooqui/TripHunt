import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register"; // 👈 import your register page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Add your register page here */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
