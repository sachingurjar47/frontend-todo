import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" index element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route
          path="dashBoard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
