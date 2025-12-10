import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register"; // 👈 import your register page
import Login from "./Components/Login";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Add your register page here */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
