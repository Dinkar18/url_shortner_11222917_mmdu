import React from "react";
import { BrowserRouter } from "react-router-dom"; // ✅ Add this
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter> {/* ✅ Wrap entire app */}
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
